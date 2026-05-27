import { Buffer } from "buffer";

export const runtime = "nodejs";

type FatSecretFood = {
  food_id?: string;
  food_name?: string;
  brand_name?: string;
  food_description?: string;
  food_type?: string;
  food_url?: string;
};

function parseFoods(data: any): FatSecretFood[] {
  const foods = data?.foods?.food;
  if (Array.isArray(foods)) return foods;
  if (foods) return [foods];
  return [];
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const restaurant = searchParams.get("restaurant");

    if (!restaurant) {
      return Response.json(
        { error: "Missing restaurant search term" },
        { status: 400 }
      );
    }

    const clientId = process.env.FATSECRET_CLIENT_ID;
    const clientSecret = process.env.FATSECRET_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return Response.json(
        { error: "Missing FatSecret API credentials" },
        { status: 500 }
      );
    }

    const tokenResponse = await fetch("https://oauth.fatsecret.com/connect/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope: "basic",
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();

      return Response.json(
        {
          error: "Could not get FatSecret access token",
          status: tokenResponse.status,
          detail: errorText,
        },
        { status: 500 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const searches = [
      restaurant,
      `${restaurant} chicken`,
      `${restaurant} grilled chicken`,
      `${restaurant} bowl`,
      `${restaurant} salad`,
      `${restaurant} burrito`,
      `${restaurant} taco`,
      `${restaurant} burger`,
    ];

    const allFoods: FatSecretFood[] = [];

    for (const search of searches) {
      const foodSearchUrl = new URL(
        "https://platform.fatsecret.com/rest/foods/search/v1"
      );

      foodSearchUrl.searchParams.set("search_expression", search);
      foodSearchUrl.searchParams.set("format", "json");
      foodSearchUrl.searchParams.set("max_results", "20");

      const searchResponse = await fetch(foodSearchUrl.toString(), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!searchResponse.ok) {
        const errorText = await searchResponse.text();

        return Response.json(
          {
            error: "FatSecret search failed",
            searchedFor: search,
            status: searchResponse.status,
            detail: errorText,
          },
          { status: 500 }
        );
      }

      const searchData = await searchResponse.json();
      allFoods.push(...parseFoods(searchData));
    }

    const uniqueFoods = Array.from(
      new Map(allFoods.map((food) => [food.food_id, food])).values()
    );

    return Response.json({
      restaurant,
      resultCount: uniqueFoods.length,
      results: uniqueFoods.slice(0, 25).map((food) => ({
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
        error: "Unexpected server error",
        detail: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}