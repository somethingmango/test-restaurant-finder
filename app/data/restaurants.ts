export type MenuItem = {
    name: string;
    calories: number;
    protein: number;
    description: string;
    customization: string;
    tags: string[];
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
      note: 'Best move: bowl format, lean protein, beans or light rice, and salsa instead of heavy sauces.',
      items: [
        {
          name: 'Double Chicken Salad Bowl',
          calories: 520,
          protein: 66,
          description:
            'Romaine base, double chicken, black beans, fajita veggies, tomato salsa, and cheese.',
          customization:
            'Use salsa as dressing. Skip vinaigrette to save a lot of calories.',
          tags: ['highest protein', 'low carb', 'has cheese', 'chicken'],
        },
        {
          name: 'Chicken Burrito Bowl — No Rice',
          calories: 430,
          protein: 39,
          description:
            'Chicken, black beans, fajita veggies, tomato salsa, cheese, and lettuce.',
          customization:
            'No rice makes this lighter while still feeling like a real meal.',
          tags: ['lower calorie', 'has cheese', 'chicken'],
        },
        {
          name: 'Chicken Bowl — Light Rice + Beans',
          calories: 560,
          protein: 43,
          description:
            'Chicken, light rice, black beans, fajita veggies, tomato salsa, light sour cream, and cheese.',
          customization:
            'Ask for light rice and light sour cream. Skip queso and vinaigrette.',
          tags: ['has rice', 'has cheese', 'filling', 'chicken'],
        },
        {
          name: 'Steak Bowl — Light Rice',
          calories: 610,
          protein: 42,
          description:
            'Steak, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.',
          customization: 'Keep sour cream and cheese, but skip queso and chips.',
          tags: ['has rice', 'has cheese', 'steak', 'filling'],
        },
      ],
    },
    {
      name: 'Taco Bell',
      aliases: ['taco bell', 'tacobell'],
      note: 'Best move: chicken, bowls, fresco-style tacos, and light creamy sauces.',
      items: [
        {
          name: 'Two Chicken Soft Tacos Fresco Style',
          calories: 320,
          protein: 24,
          description:
            'Two chicken soft tacos made lighter with pico instead of cheese and creamy sauce.',
          customization: 'Order fresco style. Add extra chicken if available.',
          tags: ['lower calorie', 'easy order', 'chicken'],
        },
        {
          name: 'Chicken Power Menu Bowl — Light Sauce',
          calories: 460,
          protein: 27,
          description:
            'Chicken, rice, black beans, lettuce, pico, cheese, guacamole, and avocado ranch sauce.',
          customization:
            'Ask for light avocado ranch or remove it if you want to cut more calories.',
          tags: ['has rice', 'has cheese', 'chicken', 'bowl'],
        },
        {
          name: 'Cantina Chicken Bowl — No Creamy Sauce',
          calories: 490,
          protein: 25,
          description:
            'Chicken bowl with rice, beans, lettuce, cabbage, pico, guacamole, and cheese.',
          customization: 'Remove creamy sauces and keep pico for flavor.',
          tags: ['has rice', 'has cheese', 'chicken', 'filling'],
        },
        {
          name: 'Chicken Soft Taco + Bean Burrito Fresco',
          calories: 510,
          protein: 25,
          description:
            'A lighter combo that keeps protein decent without going all-in on fried items.',
          customization:
            'Order fresco style and skip creamy sauces. Use hot sauce for flavor.',
          tags: ['budget', 'filling', 'chicken'],
        },
      ],
    },
    {
      name: 'Wendy’s',
      aliases: ['wendys', 'wendy’s', "wendy's"],
      note: 'Best move: chili, grilled-style chicken options when available, or simple burgers without mayo-heavy sauces.',
      items: [
        {
          name: 'Small Chili',
          calories: 280,
          protein: 19,
          description:
            'Beef-and-bean chili that is filling, non-fried, and relatively low calorie.',
          customization: 'Pair with water or unsweetened tea. Skip fries.',
          tags: ['lower calorie', 'filling', 'chili'],
        },
        {
          name: 'Large Chili',
          calories: 370,
          protein: 23,
          description:
            'A larger portion of Wendy’s chili with more protein and still reasonable calories.',
          customization:
            'Good as a full meal. Avoid adding cheese or crackers if cutting calories.',
          tags: ['filling', 'chili', 'high protein'],
        },
        {
          name: 'Grilled Chicken Wrap',
          calories: 420,
          protein: 27,
          description: 'Chicken wrap with cheese and sauce.',
          customization: 'Ask for light sauce if available.',
          tags: ['has cheese', 'easy order', 'chicken'],
        },
        {
          name: 'Jr. Cheeseburger + Small Chili',
          calories: 570,
          protein: 33,
          description:
            'A more satisfying combo that stays lighter than a large burger and fries.',
          customization: 'Skip mayo and fries. Keep ketchup/mustard for flavor.',
          tags: ['has cheese', 'filling', 'burger'],
        },
      ],
    },
    {
      name: 'McDonald’s',
      aliases: ['mcdonalds', 'mcdonald’s', "mcdonald's", 'mcd'],
      note: 'Best move: eggs, simple burgers, McNuggets without sugary sauces, and no fries/sugary drinks.',
      items: [
        {
          name: 'Egg McMuffin',
          calories: 310,
          protein: 17,
          description: 'Egg, Canadian bacon, cheese, and English muffin.',
          customization: 'Pair with black coffee or unsweetened iced coffee.',
          tags: ['breakfast', 'has cheese', 'lower calorie'],
        },
        {
          name: 'McDouble',
          calories: 400,
          protein: 22,
          description:
            'Beef patties, cheese, pickles, onions, ketchup, and mustard.',
          customization:
            'Good when you want a burger without Big Mac-level calories.',
          tags: ['has cheese', 'burger', 'easy order'],
        },
        {
          name: '6 Piece Chicken McNuggets',
          calories: 250,
          protein: 14,
          description: 'A smaller fried option that keeps calories controlled.',
          customization:
            'Choose a lighter sauce or use less sauce. Pair with apple slices if available.',
          tags: ['lower calorie', 'chicken', 'simple'],
        },
        {
          name: 'Two Hamburgers — No Fries',
          calories: 500,
          protein: 26,
          description: 'Two regular hamburgers without fries or a sugary drink.',
          customization: 'Add extra pickles/onions. Skip mayo-based sauces.',
          tags: ['simple', 'burger', 'filling'],
        },
      ],
    },
    {
      name: 'Chick-fil-A',
      aliases: ['chickfila', 'chick-fil-a', 'chick fil a'],
      note: 'Best move: grilled chicken, nuggets, fruit, and sauce control.',
      items: [
        {
          name: 'Grilled Chicken Sandwich',
          calories: 390,
          protein: 28,
          description:
            'Grilled chicken filet on a multigrain bun with lettuce and tomato.',
          customization:
            'Use sauce lightly. Pair with fruit or a side salad instead of fries.',
          tags: ['grilled', 'chicken', 'sandwich'],
        },
        {
          name: '8 Count Grilled Nuggets',
          calories: 130,
          protein: 25,
          description: 'Bite-sized grilled chicken nuggets.',
          customization:
            'Add a fruit cup or side salad if you need more volume.',
          tags: ['lowest calorie', 'high protein', 'chicken', 'low carb'],
        },
        {
          name: '12 Count Grilled Nuggets',
          calories: 200,
          protein: 38,
          description: 'A larger serving of grilled chicken nuggets.',
          customization: 'Go easy on sauces to keep calories lower.',
          tags: ['highest protein', 'chicken', 'low carb'],
        },
        {
          name: 'Grilled Chicken Cool Wrap',
          calories: 660,
          protein: 43,
          description:
            'Grilled chicken, lettuce, shredded cheese, and flaxseed flatbread.',
          customization:
            'Use half the dressing or choose a lighter sauce.',
          tags: ['has cheese', 'chicken', 'filling'],
        },
      ],
    },
    {
      name: 'Panera',
      aliases: ['panera', 'panera bread'],
      note: 'Best move: protein-heavy salads, soups, and half portions when needed.',
      items: [
        {
          name: 'Greek Salad with Chicken',
          calories: 490,
          protein: 33,
          description:
            'Chicken, romaine, tomatoes, cucumbers, red onions, feta, olives, and Greek dressing.',
          customization:
            'Ask for dressing on the side and use half.',
          tags: ['salad', 'chicken', 'has cheese'],
        },
        {
          name: 'Caesar Salad with Chicken',
          calories: 440,
          protein: 32,
          description:
            'Romaine, chicken, parmesan, Caesar dressing, and croutons.',
          customization:
            'Use light dressing and go easy on croutons.',
          tags: ['salad', 'chicken', 'has cheese'],
        },
        {
          name: 'Turkey Chili',
          calories: 300,
          protein: 21,
          description:
            'A hearty chili option with beans and turkey.',
          customization:
            'Good when you want something warm and filling without a sandwich.',
          tags: ['chili', 'filling', 'lower calorie'],
        },
        {
          name: 'Mediterranean Bowl with Chicken',
          calories: 650,
          protein: 35,
          description:
            'Chicken, grains, greens, hummus, feta, cucumbers, tomatoes, and sauce.',
          customization:
            'Ask for light sauce or sauce on the side.',
          tags: ['bowl', 'has rice', 'has cheese', 'chicken'],
        },
      ],
    },
    {
      name: 'Starbucks',
      aliases: ['starbucks', 'sbux'],
      note: 'Best move: egg bites, wraps, and unsweetened drinks.',
      items: [
        {
          name: 'Egg White & Roasted Red Pepper Egg Bites',
          calories: 170,
          protein: 12,
          description:
            'Egg white bites with roasted red pepper and cheese.',
          customization:
            'Pair with unsweetened coffee or tea.',
          tags: ['breakfast', 'lower calorie', 'has cheese'],
        },
        {
          name: 'Turkey Bacon, Cheddar & Egg White Sandwich',
          calories: 230,
          protein: 17,
          description:
            'Turkey bacon, egg whites, and cheese on an English muffin.',
          customization:
            'Good breakfast pick when you want protein without a pastry.',
          tags: ['breakfast', 'has cheese', 'sandwich'],
        },
        {
          name: 'Spinach, Feta & Egg White Wrap',
          calories: 290,
          protein: 20,
          description:
            'Egg whites, spinach, feta, and tomatoes in a wrap.',
          customization:
            'Pair with black coffee or unsweetened iced coffee.',
          tags: ['breakfast', 'has cheese', 'vegetarian'],
        },
        {
          name: 'Bacon & Gruyère Egg Bites',
          calories: 300,
          protein: 19,
          description:
            'Egg bites with bacon and Gruyère cheese.',
          customization:
            'Higher calorie than egg white bites, but more protein and very filling.',
          tags: ['breakfast', 'has cheese', 'filling'],
        },
      ],
    },
    {
      name: 'Dunkin’',
      aliases: ['dunkin', 'dunkin’', "dunkin'", 'dunkin donuts'],
      note: 'Best move: egg wraps, wake-up wraps, and unsweetened coffee drinks.',
      items: [
        {
          name: 'Egg & Cheese Wake-Up Wrap',
          calories: 180,
          protein: 7,
          description: 'Egg and cheese in a small wrap.',
          customization:
            'Order two if you need more protein while keeping calories reasonable.',
          tags: ['breakfast', 'has cheese', 'lower calorie'],
        },
        {
          name: 'Turkey Sausage, Egg & Cheese Sandwich',
          calories: 470,
          protein: 23,
          description:
            'Turkey sausage, egg, and cheese on an English muffin or bread.',
          customization:
            'Skip sweetened coffee drinks to keep the meal lighter.',
          tags: ['breakfast', 'has cheese', 'filling'],
        },
        {
          name: 'Bacon, Egg & Cheese Wake-Up Wrap',
          calories: 220,
          protein: 10,
          description:
            'Bacon, egg, and cheese in a smaller wrap.',
          customization:
            'A lighter way to get the breakfast sandwich vibe.',
          tags: ['breakfast', 'has cheese', 'lower calorie'],
        },
        {
          name: 'Avocado Toast with Bacon',
          calories: 290,
          protein: 11,
          description:
            'Avocado spread on toast with bacon topping.',
          customization:
            'Pair with unsweetened coffee. Not super high protein, but lighter.',
          tags: ['breakfast', 'lower calorie'],
        },
      ],
    },
    {
      name: 'Subway',
      aliases: ['subway'],
      note: 'Best move: 6-inch subs, grilled chicken, turkey, lots of vegetables, and light sauces.',
      items: [
        {
          name: '6-Inch Rotisserie-Style Chicken Sub',
          calories: 350,
          protein: 29,
          description:
            'Rotisserie-style chicken on bread with vegetables.',
          customization:
            'Load up vegetables. Choose mustard or vinegar instead of creamy sauces.',
          tags: ['sandwich', 'chicken', 'high protein'],
        },
        {
          name: '6-Inch Grilled Chicken Sub',
          calories: 360,
          protein: 27,
          description:
            'Grilled chicken with vegetables on a 6-inch sub.',
          customization:
            'Skip mayo and creamy sauces. Add extra veggies.',
          tags: ['sandwich', 'chicken', 'high protein'],
        },
        {
          name: '6-Inch Turkey Sub',
          calories: 280,
          protein: 18,
          description:
            'Turkey breast with vegetables on a 6-inch sub.',
          customization:
            'Add lots of veggies and choose mustard for flavor.',
          tags: ['sandwich', 'lower calorie'],
        },
        {
          name: 'Chicken Protein Bowl',
          calories: 370,
          protein: 32,
          description:
            'Chicken, vegetables, and toppings served as a bowl without bread.',
          customization:
            'Use lighter sauce and skip heavy toppings if cutting calories.',
          tags: ['bowl', 'low carb', 'chicken', 'high protein'],
        },
      ],
    },
    {
      name: 'Chili’s',
      aliases: ['chilis', 'chili’s', "chili's"],
      note: 'Best move: grilled chicken, fajitas, salmon, and skipping fries or heavy appetizers.',
      items: [
        {
          name: 'Margarita Grilled Chicken',
          calories: 650,
          protein: 48,
          description:
            'Grilled chicken with rice, beans, pico, and tortilla strips.',
          customization:
            'Ask for light rice or skip tortilla strips if you want to lower calories.',
          tags: ['chicken', 'has rice', 'high protein'],
        },
        {
          name: 'Grilled Chicken Fajitas',
          calories: 590,
          protein: 46,
          description:
            'Grilled chicken fajitas with peppers and onions.',
          customization:
            'Use fewer tortillas and go light on sour cream/cheese.',
          tags: ['chicken', 'fajitas', 'high protein'],
        },
        {
          name: 'Ancho Salmon',
          calories: 630,
          protein: 48,
          description:
            'Seasoned salmon with rice and vegetables.',
          customization:
            'Good if you eat salmon. Ask for extra vegetables instead of extra rice.',
          tags: ['salmon', 'has rice', 'high protein'],
        },
        {
          name: 'Santa Fe Grilled Chicken Salad',
          calories: 680,
          protein: 36,
          description:
            'Grilled chicken salad with toppings and dressing.',
          customization:
            'Ask for dressing on the side and use half.',
          tags: ['salad', 'chicken', 'filling'],
        },
      ],
    },
    {
      name: 'The Cheesecake Factory',
      aliases: [
        'cheesecake factory',
        'the cheesecake factory',
        'cheesecake',
      ],
      note: 'Best move: SkinnyLicious menu, grilled protein, salads with dressing on the side, and boxing half early.',
      items: [
        {
          name: 'SkinnyLicious Grilled Chicken',
          calories: 590,
          protein: 53,
          description:
            'Grilled chicken served with vegetables or lighter sides.',
          customization:
            'Ask for sauces on the side. Avoid adding bread or appetizers.',
          tags: ['skinnylicious', 'chicken', 'high protein'],
        },
        {
          name: 'SkinnyLicious Chicken Pasta',
          calories: 590,
          protein: 39,
          description:
            'A lighter pasta option with chicken and vegetables.',
          customization:
            'Box half if portions are large. Skip bread to keep calories controlled.',
          tags: ['skinnylicious', 'chicken', 'pasta'],
        },
        {
          name: 'SkinnyLicious Turkey & Avocado Sandwich',
          calories: 550,
          protein: 34,
          description:
            'Turkey and avocado sandwich from the lighter menu.',
          customization:
            'Choose salad or vegetables instead of fries if available.',
          tags: ['skinnylicious', 'sandwich', 'filling'],
        },
        {
          name: 'SkinnyLicious Asian Chicken Salad',
          calories: 590,
          protein: 40,
          description:
            'Chicken salad with Asian-style vegetables and dressing.',
          customization:
            'Ask for dressing on the side and use half.',
          tags: ['skinnylicious', 'salad', 'chicken'],
        },
      ],
    },
  ];