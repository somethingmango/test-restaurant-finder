export type MenuItem = {
    name: string;
    calories: number;
    protein: number;
    description: string;
    customization: string;
    tags: string[];
    source: string;
  };
  
  export type Restaurant = {
    name: string;
    aliases: string[];
    note: string;
    items: MenuItem[];
  };
  
  export const RESTAURANTS: Restaurant[] = [
    {
      name: 'Chipotle',
      aliases: ['chipotle', 'chipotle mexican grill'],
      note: 'Best move: bowl or salad format, lean protein, beans or light rice, and salsa instead of queso, chips, or vinaigrette.',
      items: [
        {
          name: 'Chicken Salad Bowl',
          calories: 465,
          protein: 47,
          description:
            'Romaine, chicken, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'Use salsa as dressing. Skip vinaigrette to save calories.',
          tags: ['chicken', 'salad', 'has cheese', 'lower calorie'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Double Chicken Salad Bowl',
          calories: 645,
          protein: 79,
          description:
            'Romaine, double chicken, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'Very high protein. Skip vinaigrette and queso.',
          tags: ['chicken', 'salad', 'has cheese', 'highest protein'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Chicken Bowl — Light Rice + Beans',
          calories: 675,
          protein: 51,
          description:
            'Chicken, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.',
          customization:
            'Ask for light rice and light sour cream. Skip queso and chips.',
          tags: ['chicken', 'has rice', 'has cheese', 'filling'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Steak Salad Bowl',
          calories: 435,
          protein: 36,
          description:
            'Romaine, steak, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'Use salsa as dressing. Add rice only if you have calories to spare.',
          tags: ['steak', 'salad', 'has cheese', 'lower calorie'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Steak Bowl — Light Rice + Beans',
          calories: 645,
          protein: 40,
          description:
            'Steak, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.',
          customization:
            'Keep cheese or sour cream, but ideally not queso.',
          tags: ['steak', 'has rice', 'has cheese', 'filling'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Barbacoa Salad Bowl',
          calories: 455,
          protein: 39,
          description:
            'Romaine, barbacoa, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'A strong lower-calorie protein option. Skip vinaigrette.',
          tags: ['barbacoa', 'salad', 'has cheese'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Carnitas Salad Bowl',
          calories: 495,
          protein: 38,
          description:
            'Romaine, carnitas, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'Good protein, but higher calories than chicken or steak.',
          tags: ['carnitas', 'salad', 'has cheese'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Chicken Bowl — No Rice',
          calories: 575,
          protein: 47,
          description:
            'Chicken, black beans, fajita veggies, tomato salsa, sour cream, cheese, and lettuce.',
          customization:
            'No rice keeps calories lower while still feeling like a full bowl.',
          tags: ['chicken', 'has cheese', 'lower calorie'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Chicken + Fajita Veggie Bowl',
          calories: 355,
          protein: 41,
          description:
            'Chicken, black beans, fajita veggies, tomato salsa, and lettuce.',
          customization:
            'Skip cheese and sour cream for the leanest version.',
          tags: ['chicken', 'lowest calorie', 'high protein'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Steak + Fajita Veggie Bowl',
          calories: 325,
          protein: 30,
          description:
            'Steak, black beans, fajita veggies, tomato salsa, and lettuce.',
          customization:
            'Very light option. Add cheese if you want more flavor and protein.',
          tags: ['steak', 'lowest calorie'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Sofritas Salad Bowl',
          calories: 435,
          protein: 23,
          description:
            'Romaine, sofritas, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'A vegetarian option, but lower protein than chicken or steak.',
          tags: ['vegetarian', 'salad', 'has cheese'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
        {
          name: 'Chicken Burrito — Light Rice',
          calories: 995,
          protein: 59,
          description:
            'Tortilla, chicken, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.',
          customization:
            'Higher calorie because of the tortilla. Choose a bowl if cutting calories.',
          tags: ['chicken', 'has rice', 'has cheese', 'burrito'],
          source: 'Chipotle official nutrition calculator / nutrition facts PDF',
        },
      ],
    },
  
    {
      name: 'Chick-fil-A',
      aliases: ['chickfila', 'chick-fil-a', 'chick fil a'],
      note: 'Best move: grilled nuggets, grilled chicken sandwiches, fruit, and sauce control.',
      items: [
        {
          name: '8 Count Grilled Nuggets',
          calories: 130,
          protein: 25,
          description: 'Grilled bite-sized chicken breast nuggets.',
          customization:
            'Add fruit or a side salad if you need more volume. Go light on sauces.',
          tags: ['chicken', 'grilled', 'lowest calorie', 'high protein'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: '12 Count Grilled Nuggets',
          calories: 200,
          protein: 38,
          description: 'Larger serving of grilled chicken nuggets.',
          customization:
            'One of the best protein-per-calorie fast food options.',
          tags: ['chicken', 'grilled', 'highest protein', 'low carb'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: '5 Count Grilled Nuggets',
          calories: 80,
          protein: 16,
          description: 'Smaller serving of grilled chicken nuggets.',
          customization:
            'Good snack-sized protein option.',
          tags: ['chicken', 'grilled', 'snack', 'lowest calorie'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Grilled Chicken Sandwich',
          calories: 390,
          protein: 28,
          description:
            'Grilled chicken filet on a multigrain bun with lettuce and tomato.',
          customization:
            'Use sauce lightly. Pair with fruit instead of fries.',
          tags: ['chicken', 'grilled', 'sandwich'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Chick-fil-A Chicken Sandwich',
          calories: 420,
          protein: 29,
          description:
            'Classic breaded chicken sandwich with pickles on a toasted bun.',
          customization:
            'Still reasonable calories, but grilled is the leaner choice.',
          tags: ['chicken', 'sandwich'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Spicy Chicken Sandwich',
          calories: 450,
          protein: 28,
          description:
            'Spicy breaded chicken filet on a toasted bun.',
          customization:
            'Skip fries and sugary drinks to keep the meal balanced.',
          tags: ['chicken', 'sandwich', 'spicy'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Chick-fil-A Cool Wrap',
          calories: 660,
          protein: 43,
          description:
            'Grilled chicken, lettuce, shredded cheese, and flaxseed flatbread.',
          customization:
            'Use half the dressing or choose a lighter sauce.',
          tags: ['chicken', 'wrap', 'has cheese', 'high protein'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Grilled Chicken Club Sandwich',
          calories: 520,
          protein: 38,
          description:
            'Grilled chicken sandwich with bacon and cheese.',
          customization:
            'Higher calorie than the regular grilled sandwich, but more protein.',
          tags: ['chicken', 'grilled', 'has cheese', 'sandwich'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Chicken, Egg & Cheese Muffin',
          calories: 410,
          protein: 27,
          description:
            'Chicken, egg, and cheese on an English muffin.',
          customization:
            'Good breakfast protein option. Skip hash browns if cutting calories.',
          tags: ['breakfast', 'chicken', 'has cheese'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Bacon, Egg & Cheese Muffin',
          calories: 300,
          protein: 16,
          description:
            'Bacon, egg, and cheese on an English muffin.',
          customization:
            'Lower calorie breakfast pick, but less protein than chicken options.',
          tags: ['breakfast', 'has cheese'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Sausage, Egg & Cheese Muffin',
          calories: 490,
          protein: 23,
          description:
            'Sausage, egg, and cheese on an English muffin.',
          customization:
            'More filling, but higher fat/calories than egg white or grilled options.',
          tags: ['breakfast', 'has cheese', 'filling'],
          source: 'Chick-fil-A official nutrition guide',
        },
        {
          name: 'Chick-fil-A Chicken Biscuit',
          calories: 460,
          protein: 19,
          description:
            'Breaded chicken filet served on a biscuit.',
          customization:
            'Tasty but not the best protein-to-calorie option.',
          tags: ['breakfast', 'chicken'],
          source: 'Chick-fil-A official nutrition guide',
        },
      ],
    },
  
    {
      name: 'Subway',
      aliases: ['subway'],
      note: 'Best move: 6-inch subs, chicken/turkey/roast beef, lots of vegetables, and mustard or vinegar instead of creamy sauces.',
      items: [
        {
          name: '6-Inch Grilled Chicken & Fresh Avocado',
          calories: 450,
          protein: 35,
          description:
            'Grilled chicken, avocado, bread, and standard vegetables.',
          customization:
            'Use mustard or vinegar instead of creamy sauce.',
          tags: ['chicken', 'sandwich', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Grilled Chicken & Smashed Avocado',
          calories: 470,
          protein: 35,
          description:
            'Grilled chicken with smashed avocado on a 6-inch sub.',
          customization:
            'Avocado adds calories but helps the sandwich feel more filling.',
          tags: ['chicken', 'sandwich', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Ham & Turkey Stacker',
          calories: 290,
          protein: 20,
          description:
            'A lighter 6-inch sub with ham and turkey.',
          customization:
            'Add vegetables and choose mustard for flavor.',
          tags: ['sandwich', 'lower calorie'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Turkey & Ranch Delite',
          calories: 380,
          protein: 26,
          description:
            'Turkey-based 6-inch sub with ranch-style flavor.',
          customization:
            'Ask for light ranch if possible.',
          tags: ['sandwich', 'lower calorie'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Seasoned Steak & Fresh Avocado',
          calories: 430,
          protein: 35,
          description:
            'Seasoned steak and avocado on a 6-inch sub.',
          customization:
            'Good high-protein option. Keep sauces light.',
          tags: ['steak', 'sandwich', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Seasoned Steak & Smashed Avocado',
          calories: 460,
          protein: 35,
          description:
            'Seasoned steak with smashed avocado on a 6-inch sub.',
          customization:
            'A little higher calorie than fresh avocado version.',
          tags: ['steak', 'sandwich', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Buffalo Chicken',
          calories: 510,
          protein: 31,
          description:
            'Buffalo chicken 6-inch sub.',
          customization:
            'Skip creamy ranch or use light sauce if available.',
          tags: ['chicken', 'sandwich', 'spicy'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: '6-Inch Oven-Roasted Turkey & Ham',
          calories: 480,
          protein: 27,
          description:
            'Turkey and ham 6-inch sub.',
          customization:
            'Load vegetables and avoid mayo-heavy sauces.',
          tags: ['sandwich', 'filling'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: 'Steak Philly Wrap',
          calories: 710,
          protein: 46,
          description:
            'Steak Philly wrap with cheese and toppings.',
          customization:
            'Higher calorie, but strong protein. Good when your calorie slider is higher.',
          tags: ['steak', 'wrap', 'has cheese', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: 'Chipotle Philly Wrap',
          calories: 700,
          protein: 47,
          description:
            'Steak wrap with chipotle-style flavor.',
          customization:
            'Use less sauce if possible.',
          tags: ['steak', 'wrap', 'has cheese', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: 'Grilled Chicken Wrap',
          calories: 680,
          protein: 48,
          description:
            'Grilled chicken wrap with vegetables and toppings.',
          customization:
            'Good high-protein option when you have room for more calories.',
          tags: ['chicken', 'wrap', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: 'Chicken & Bacon Ranch Wrap',
          calories: 830,
          protein: 56,
          description:
            'Chicken, bacon, ranch, cheese, and vegetables in a wrap.',
          customization:
            'Very high protein, but higher calorie. Use light ranch if possible.',
          tags: ['chicken', 'wrap', 'has cheese', 'high protein'],
          source: 'Subway U.S. nutrition PDF',
        },
        {
          name: 'Oven-Roasted Turkey Protein Bowl',
          calories: 410,
          protein: 21,
          description:
            'Turkey and vegetables served as a bowl without bread.',
          customization:
            'Good lower-carb option. Add extra turkey if available.',
          tags: ['bowl', 'lower calorie', 'low carb'],
          source: 'Subway U.S. nutrition PDF',
        },
      ],
    },
  
    {
      name: 'Chili’s',
      aliases: ['chilis', 'chili’s', "chili's"],
      note: 'Best move: Lighter Choices, sirloin, grilled chicken, salmon, and fajitas without all the toppings/tortillas.',
      items: [
        {
          name: 'Lighter Choice 6 oz Classic Sirloin',
          calories: 240,
          protein: 37,
          description:
            'A lighter sirloin option listed under Chili’s Lighter Choices.',
          customization:
            'Pair with steamed broccoli if available.',
          tags: ['steak', 'lowest calorie', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: '6 oz Classic Sirloin',
          calories: 300,
          protein: 34,
          description:
            'Classic 6 oz sirloin listed without extra heavy sides.',
          customization:
            'Choose vegetables instead of fries or loaded sides.',
          tags: ['steak', 'lower calorie', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: '10 oz Classic Sirloin',
          calories: 440,
          protein: 56,
          description:
            'Larger sirloin option with strong protein.',
          customization:
            'Best when paired with a lighter side.',
          tags: ['steak', 'highest protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Lighter Choice Salmon',
          calories: 540,
          protein: 47,
          description:
            'Salmon from the Lighter Choices section.',
          customization:
            'Pair with vegetables. Skip extra sauces if possible.',
          tags: ['salmon', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Mango-Chile Chicken',
          calories: 540,
          protein: 38,
          description:
            'Chicken entrée with mango-chile flavor.',
          customization:
            'A solid lighter chicken option. Watch sugary drinks and sides.',
          tags: ['chicken', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Mango-Chile Tilapia',
          calories: 550,
          protein: 38,
          description:
            'Tilapia entrée with mango-chile flavor.',
          customization:
            'Good if you eat fish. Pair with vegetables.',
          tags: ['fish', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Lighter Choice Margarita Grilled Chicken',
          calories: 610,
          protein: 51,
          description:
            'Grilled chicken with rice and beans.',
          customization:
            'Ask for lighter rice or extra vegetables if available.',
          tags: ['chicken', 'has rice', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Grilled Chicken Salad',
          calories: 430,
          protein: 39,
          description:
            'Grilled chicken salad from the Lighter Choices section.',
          customization:
            'Ask for dressing on the side and use half.',
          tags: ['chicken', 'salad', 'lower calorie'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Santa Fe Chicken Salad',
          calories: 690,
          protein: 38,
          description:
            'Chicken salad with Santa Fe-style toppings.',
          customization:
            'Use dressing lightly. This is higher calorie for a salad.',
          tags: ['chicken', 'salad', 'filling'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Fajita Grilled Chicken',
          calories: 110,
          protein: 20,
          description:
            'Grilled chicken portion from fajitas, listed without tortillas and toppings.',
          customization:
            'Add peppers/onions for volume. Tortillas and toppings increase calories.',
          tags: ['chicken', 'fajitas', 'lowest calorie'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Fajita Grilled Steak',
          calories: 200,
          protein: 18,
          description:
            'Grilled steak portion from fajitas, listed without tortillas and toppings.',
          customization:
            'Add peppers/onions; go light on toppings.',
          tags: ['steak', 'fajitas', 'lower calorie'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Fajita Pork Carnitas',
          calories: 220,
          protein: 29,
          description:
            'Carnitas portion from fajitas, listed without tortillas and toppings.',
          customization:
            'High protein for the calories. Watch toppings and tortillas.',
          tags: ['pork', 'fajitas', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Chipotle Chicken Bowl',
          calories: 940,
          protein: 59,
          description:
            'Fresh Mex bowl with chipotle chicken.',
          customization:
            'Higher calorie, but high protein. Save for higher calorie slider settings.',
          tags: ['chicken', 'bowl', 'has rice', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Margarita Chicken Bowl',
          calories: 920,
          protein: 57,
          description:
            'Fresh Mex bowl with margarita chicken.',
          customization:
            'High protein, but calorie-dense. Skip appetizers and sugary drinks.',
          tags: ['chicken', 'bowl', 'has rice', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
        {
          name: 'Half Rack Memphis Dry Rub Ribs',
          calories: 940,
          protein: 45,
          description:
            'Half rack ribs with dry rub.',
          customization:
            'High calorie, but still protein-heavy. Better than full rack if managing calories.',
          tags: ['ribs', 'high protein'],
          source: 'Chili’s official nutrition PDF',
        },
      ],
    },
  
    {
      name: 'The Cheesecake Factory',
      aliases: ['cheesecake factory', 'the cheesecake factory', 'cheesecake'],
      note: 'Best move: SkinnyLicious menu, grilled proteins, lighter tacos/specialties, and boxing half early.',
      items: [
        {
          name: 'SkinnyLicious Steak Medallions',
          calories: 440,
          protein: 45,
          description:
            'Steak medallions from the SkinnyLicious menu.',
          customization:
            'One of the better protein-per-calorie options here.',
          tags: ['skinnylicious', 'steak', 'high protein'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Asian Chicken Lettuce Wrap Tacos',
          calories: 450,
          protein: 29,
          description:
            'Chicken lettuce wrap tacos from the SkinnyLicious menu.',
          customization:
            'Good lighter option. Watch sauces if served on the side.',
          tags: ['skinnylicious', 'chicken', 'lower calorie'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Chicken Soft Tacos',
          calories: 520,
          protein: 32,
          description:
            'Chicken soft tacos from the SkinnyLicious menu.',
          customization:
            'A reasonable pick compared with heavier entrées.',
          tags: ['skinnylicious', 'chicken', 'tacos'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Shrimp Soft Tacos',
          calories: 520,
          protein: 31,
          description:
            'Shrimp soft tacos from the SkinnyLicious menu.',
          customization:
            'Solid option if you eat shrimp.',
          tags: ['skinnylicious', 'shrimp', 'tacos'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Grilled Branzino',
          calories: 530,
          protein: 36,
          description:
            'Grilled branzino from the SkinnyLicious menu.',
          customization:
            'Good lighter seafood option.',
          tags: ['skinnylicious', 'fish', 'high protein'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Turkey & Avocado Sandwich',
          calories: 550,
          protein: 38,
          description:
            'Turkey and avocado sandwich from the SkinnyLicious menu.',
          customization:
            'Choose salad or vegetables instead of fries if available.',
          tags: ['skinnylicious', 'sandwich', 'filling'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Veggie Burger',
          calories: 550,
          protein: 14,
          description:
            'Vegetarian burger from the SkinnyLicious menu.',
          customization:
            'Not high protein, but useful as a lighter vegetarian option.',
          tags: ['skinnylicious', 'vegetarian', 'burger'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Crispy Chicken Sandwich',
          calories: 560,
          protein: 25,
          description:
            'Crispy chicken sandwich from the SkinnyLicious menu.',
          customization:
            'Reasonable for Cheesecake Factory, but grilled proteins rank better.',
          tags: ['skinnylicious', 'chicken', 'sandwich'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Grilled Turkey Burger',
          calories: 560,
          protein: 29,
          description:
            'Grilled turkey burger from the SkinnyLicious menu.',
          customization:
            'Good burger-style option with better calories than many entrées.',
          tags: ['skinnylicious', 'burger', 'filling'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Hamburger',
          calories: 570,
          protein: 35,
          description:
            'Hamburger from the SkinnyLicious menu.',
          customization:
            'Good if you want a burger without going full Cheesecake Factory chaos.',
          tags: ['skinnylicious', 'burger', 'high protein'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Spicy Crispy Chicken Sandwich',
          calories: 580,
          protein: 25,
          description:
            'Spicy crispy chicken sandwich from the SkinnyLicious menu.',
          customization:
            'Higher calorie than fish/taco options, but still moderate.',
          tags: ['skinnylicious', 'chicken', 'sandwich', 'spicy'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Chicken Pasta',
          calories: 590,
          protein: 46,
          description:
            'Chicken pasta from the SkinnyLicious specialties section.',
          customization:
            'Box half if portions feel large. Skip bread if cutting calories.',
          tags: ['skinnylicious', 'chicken', 'pasta', 'high protein'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Sesame Ginger Chicken',
          calories: 590,
          protein: 46,
          description:
            'Sesame ginger chicken from the SkinnyLicious specialties section.',
          customization:
            'Good high-protein option. Watch added sauces.',
          tags: ['skinnylicious', 'chicken', 'high protein'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Lemon-Garlic Shrimp',
          calories: 550,
          protein: 32,
          description:
            'Lemon-garlic shrimp from the SkinnyLicious menu.',
          customization:
            'Good lighter seafood option.',
          tags: ['skinnylicious', 'shrimp'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
        {
          name: 'SkinnyLicious Grilled Salmon',
          calories: 590,
          protein: 45,
          description:
            'Grilled salmon from the SkinnyLicious menu.',
          customization:
            'High-protein seafood option with moderate calories.',
          tags: ['skinnylicious', 'salmon', 'high protein'],
          source: 'The Cheesecake Factory official nutritional guide',
        },
      ],
    },
  ];