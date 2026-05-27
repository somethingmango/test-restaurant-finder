import { Buffer } from 'buffer';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const restaurant = searchParams.get('restaurant');

    if (!restaurant) {
      return Response.json(
        { error: 'Missing restaurant search term' },
        { status: 400 }
      );
    }

    const clientId = process.env.FATSECRET_CLIENT_ID;
    const clientSecret = process.env.FATSECRET_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return Response.json(
        { error: 'Missing FatSecret API credentials' },
        { status: 500 }
      );
    }

    const tokenResponse = await fetch(
      'https://oauth.fatsecret.com/connect/token',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'basic',
        }),
      }
    );

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();

      return Response.json(
        {
          error: 'Could not get FatSecret access token',
          status: tokenResponse.status,
          detail: errorText,
        },
        { status: 500 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const foodSearchUrl = new URL(
      'https://platform.fatsecret.com/rest/server.api'
    );
    foodSearchUrl.searchParams.set('method', 'foods.search');
    foodSearchUrl.searchParams.set('search_expression', restaurant);
    foodSearchUrl.searchParams.set('format', 'json');
    foodSearchUrl.searchParams.set('max_results', '20');

    const searchResponse = await fetch(foodSearchUrl.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();

      return Response.json(
        {
          error: 'FatSecret search failed',
          status: searchResponse.status,
          detail: errorText,
        },
        { status: 500 }
      );
    }

    const searchData = await searchResponse.json();
    const foods = searchData?.foods?.food;
    const foodList = Array.isArray(foods) ? foods : foods ? [foods] : [];

    return Response.json({
      restaurant,
      results: foodList.map((food: any) => ({
        id: food.food_id,
        name: food.food_name,
        brand: food.brand_name || null,
        description: food.food_description,
        type: food.food_type,
        url: food.food_url,
      })),
    });
  } catch (error: any) {
    return Response.json(
      {
        error: 'Unexpected server error',
        detail: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
