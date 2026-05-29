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
    "name": "McDonald’s",
    "aliases": [
      "mcdonalds",
      "mcdonald’s",
      "mcdonald's",
      "mcd"
    ],
    "note": "Search across breakfast, burgers, chicken, nuggets, sandwiches, and higher-calorie protein-heavy items.",
    "items": [
      {
        "name": "Hamburger",
        "calories": 250,
        "protein": 12,
        "description": "Classic hamburger with beef patty, pickles, onions, ketchup, and mustard.",
        "customization": "Simple lower-calorie burger option.",
        "tags": [
          "burger",
          "lower calorie"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Cheeseburger",
        "calories": 300,
        "protein": 15,
        "description": "Classic cheeseburger with one beef patty and cheese.",
        "customization": "Good smaller burger option.",
        "tags": [
          "burger",
          "has cheese",
          "lower calorie"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "McDouble",
        "calories": 400,
        "protein": 22,
        "description": "Two beef patties with one slice of cheese.",
        "customization": "Good protein for the calories compared with larger burgers.",
        "tags": [
          "burger",
          "has cheese",
          "easy order"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Double Cheeseburger",
        "calories": 450,
        "protein": 25,
        "description": "Two beef patties with two slices of cheese.",
        "customization": "Higher protein than McDouble, slightly more calories.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Quarter Pounder with Cheese",
        "calories": 520,
        "protein": 30,
        "description": "Quarter-pound beef patty with cheese, pickles, onions, ketchup, and mustard.",
        "customization": "Skip fries if this is your main protein.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Double Quarter Pounder with Cheese",
        "calories": 740,
        "protein": 48,
        "description": "Two quarter-pound beef patties with cheese and classic toppings.",
        "customization": "Very strong protein, but higher calorie.",
        "tags": [
          "burger",
          "has cheese",
          "highest protein"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Big Mac",
        "calories": 590,
        "protein": 25,
        "description": "Two beef patties, special sauce, lettuce, cheese, pickles, onions, and sesame bun.",
        "customization": "Not the best protein score, but useful for comparison.",
        "tags": [
          "burger",
          "has cheese"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "McChicken",
        "calories": 400,
        "protein": 14,
        "description": "Crispy chicken sandwich with lettuce and mayo.",
        "customization": "Ask for no mayo to reduce calories.",
        "tags": [
          "chicken",
          "sandwich"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "McCrispy",
        "calories": 470,
        "protein": 26,
        "description": "Crispy chicken filet sandwich on a potato roll.",
        "customization": "Higher protein than McChicken. Skip fries or sugary drinks.",
        "tags": [
          "chicken",
          "sandwich"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Filet-O-Fish",
        "calories": 390,
        "protein": 16,
        "description": "Fish filet sandwich with cheese and tartar sauce.",
        "customization": "Ask for light tartar if available.",
        "tags": [
          "fish",
          "sandwich",
          "has cheese"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "6 Piece Chicken McNuggets",
        "calories": 250,
        "protein": 14,
        "description": "Six-piece Chicken McNuggets.",
        "customization": "Go light on dipping sauces.",
        "tags": [
          "chicken",
          "nuggets",
          "lower calorie"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "10 Piece Chicken McNuggets",
        "calories": 410,
        "protein": 23,
        "description": "Ten-piece Chicken McNuggets.",
        "customization": "Solid protein if you control sauce calories.",
        "tags": [
          "chicken",
          "nuggets"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "4 Piece Chicken McNuggets",
        "calories": 170,
        "protein": 9,
        "description": "Four-piece Chicken McNuggets.",
        "customization": "Useful as a smaller protein add-on. Sauce calories can sneak up fast.",
        "tags": [
          "chicken",
          "nuggets",
          "side",
          "lower calorie"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "20 Piece Chicken McNuggets",
        "calories": 830,
        "protein": 46,
        "description": "Twenty-piece Chicken McNuggets.",
        "customization": "High protein, but calorie-dense and easy to overdo with sauces.",
        "tags": [
          "chicken",
          "nuggets",
          "high protein",
          "high calorie"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Small French Fries",
        "calories": 230,
        "protein": 3,
        "description": "Small order of McDonald’s World Famous Fries.",
        "customization": "If fries are happening, small is the least chaotic route.",
        "tags": [
          "fries",
          "side",
          "lower calorie"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Medium French Fries",
        "calories": 320,
        "protein": 5,
        "description": "Medium order of McDonald’s World Famous Fries.",
        "customization": "Better as a shared side than the main character.",
        "tags": [
          "fries",
          "side"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Large French Fries",
        "calories": 480,
        "protein": 7,
        "description": "Large order of McDonald’s World Famous Fries.",
        "customization": "Worth showing for transparency. Not exactly protein-ing.",
        "tags": [
          "fries",
          "side",
          "high calorie"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Apple Slices",
        "calories": 15,
        "protein": 0,
        "description": "Packaged apple slices.",
        "customization": "Very light side if you just need something crunchy.",
        "tags": [
          "side",
          "fruit",
          "lowest calorie"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Hash Browns",
        "calories": 140,
        "protein": 2,
        "description": "Crispy breakfast hash brown patty.",
        "customization": "Small breakfast side. Pair with a protein-forward sandwich.",
        "tags": [
          "breakfast",
          "side",
          "lower calorie"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Egg McMuffin",
        "calories": 310,
        "protein": 17,
        "description": "Egg, Canadian bacon, cheese, and English muffin.",
        "customization": "Pair with black coffee or unsweetened iced coffee.",
        "tags": [
          "breakfast",
          "has cheese",
          "lower calorie"
        ],
        "source": "McDonald’s official nutrition calculator"
      },
      {
        "name": "Sausage Burrito",
        "calories": 310,
        "protein": 13,
        "description": "Breakfast burrito with sausage, egg, cheese, peppers, and onions.",
        "customization": "Not huge protein, but easy to order and moderate calories.",
        "tags": [
          "breakfast",
          "burrito",
          "has cheese"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Fruit & Maple Oatmeal",
        "calories": 320,
        "protein": 6,
        "description": "Oatmeal with diced apples, cranberry-raisin blend, and cream.",
        "customization": "More fiber-friendly than protein-friendly. Still useful for breakfast variety.",
        "tags": [
          "breakfast",
          "oatmeal",
          "lower protein"
        ],
        "source": "McDonald’s official product nutrition API"
      },
      {
        "name": "Sausage McMuffin with Egg",
        "calories": 480,
        "protein": 20,
        "description": "Sausage patty, egg, cheese, and English muffin.",
        "customization": "More filling than Egg McMuffin, but higher calories.",
        "tags": [
          "breakfast",
          "has cheese",
          "filling"
        ],
        "source": "McDonald’s official nutrition calculator"
      }
    ]
  },
  {
    "name": "Burger King",
    "aliases": [
      "burger king",
      "bk",
      "burgerking"
    ],
    "note": "Search across Whoppers, burgers, chicken sandwiches, nuggets, fish, Impossible Whopper, and higher-calorie protein-heavy items.",
    "items": [
      {
        "name": "Hamburger",
        "calories": 250,
        "protein": 13,
        "description": "Small flame-grilled beef burger with pickles, ketchup, and mustard.",
        "customization": "Simple lower-calorie burger option.",
        "tags": [
          "burger",
          "lower calorie"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Cheeseburger",
        "calories": 290,
        "protein": 15,
        "description": "Small beef burger with cheese.",
        "customization": "Good small burger option.",
        "tags": [
          "burger",
          "has cheese",
          "lower calorie"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Whopper Jr.",
        "calories": 330,
        "protein": 16,
        "description": "Smaller Whopper-style burger with lettuce, tomato, pickles, onion, mayo, and ketchup.",
        "customization": "Ask for no mayo to lower calories.",
        "tags": [
          "burger",
          "lower calorie"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Double Cheeseburger",
        "calories": 400,
        "protein": 24,
        "description": "Two beef patties with cheese.",
        "customization": "Solid protein for a smaller burger.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Bacon Double Cheeseburger",
        "calories": 440,
        "protein": 26,
        "description": "Double cheeseburger with bacon.",
        "customization": "Good protein, but bacon increases calories/fat.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Whopper",
        "calories": 670,
        "protein": 32,
        "description": "Flame-grilled Whopper with lettuce, tomato, pickles, onion, ketchup, and mayo.",
        "customization": "Ask for no mayo to cut calories.",
        "tags": [
          "burger",
          "high protein"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Whopper with Cheese",
        "calories": 770,
        "protein": 37,
        "description": "Whopper with cheese added.",
        "customization": "Higher protein, but cheese adds calories.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Impossible Whopper",
        "calories": 630,
        "protein": 25,
        "description": "Plant-based Impossible patty with Whopper toppings.",
        "customization": "Ask for no mayo if you want to reduce calories.",
        "tags": [
          "burger",
          "vegetarian"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Double Whopper",
        "calories": 920,
        "protein": 51,
        "description": "Double-patty Whopper.",
        "customization": "High protein and high calorie. No mayo helps.",
        "tags": [
          "burger",
          "highest protein",
          "high calorie"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Bacon King",
        "calories": 1200,
        "protein": 66,
        "description": "Large double-patty burger with bacon and cheese.",
        "customization": "Very calorie-dense. Consider splitting or skipping sides.",
        "tags": [
          "burger",
          "has cheese",
          "highest protein",
          "high calorie"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Royal Crispy Chicken Sandwich",
        "calories": 600,
        "protein": 31,
        "description": "Crispy chicken filet sandwich.",
        "customization": "Good protein, but sauce increases calories.",
        "tags": [
          "chicken",
          "sandwich",
          "high protein"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Original Chicken Sandwich",
        "calories": 680,
        "protein": 28,
        "description": "Long breaded chicken sandwich with lettuce and mayo.",
        "customization": "Ask for light/no mayo if available.",
        "tags": [
          "chicken",
          "sandwich"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Big Fish Sandwich",
        "calories": 570,
        "protein": 24,
        "description": "Breaded fish sandwich with tartar-style sauce.",
        "customization": "Ask for light sauce if possible.",
        "tags": [
          "fish",
          "sandwich"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "8 Piece Chicken Nuggets",
        "calories": 390,
        "protein": 21,
        "description": "Eight-piece chicken nuggets.",
        "customization": "Decent protein if you control sauce calories.",
        "tags": [
          "chicken",
          "nuggets"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      },
      {
        "name": "Chicken Fries",
        "calories": 430,
        "protein": 24,
        "description": "Chicken fries portion.",
        "customization": "Use sauces lightly.",
        "tags": [
          "chicken",
          "fried"
        ],
        "source": "Burger King nutrition data / published nutrition references"
      }
    ]
  },
  {
    "name": "Taco Bell",
    "aliases": [
      "taco bell",
      "tacobell"
    ],
    "note": "Search across tacos, bowls, burritos, quesadillas, Crunchwraps, nachos, chicken items, and vegetarian options.",
    "items": [
      {
        "name": "Chicken Soft Taco",
        "calories": 160,
        "protein": 12,
        "description": "Soft taco with chicken, lettuce, and cheese.",
        "customization": "Order fresco style or add extra chicken if available.",
        "tags": [
          "taco",
          "chicken",
          "lower calorie"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Crunchy Taco",
        "calories": 170,
        "protein": 8,
        "description": "Classic crunchy taco with seasoned beef, lettuce, and cheese.",
        "customization": "Order fresco style to lower calories slightly.",
        "tags": [
          "taco",
          "beef",
          "lower calorie"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Soft Taco",
        "calories": 180,
        "protein": 9,
        "description": "Classic soft taco with seasoned beef, lettuce, and cheese.",
        "customization": "Simple lower-calorie option.",
        "tags": [
          "taco",
          "beef",
          "lower calorie"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Two Chicken Soft Tacos Fresco Style",
        "calories": 320,
        "protein": 24,
        "description": "Two chicken soft tacos made lighter with pico instead of cheese and creamy sauce.",
        "customization": "Order fresco style. Add extra chicken if available.",
        "tags": [
          "chicken",
          "taco",
          "lower calorie"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Bean Burrito",
        "calories": 360,
        "protein": 13,
        "description": "Bean burrito with beans, cheese, red sauce, and onions.",
        "customization": "Filling vegetarian option, but not super high protein.",
        "tags": [
          "burrito",
          "vegetarian",
          "filling"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Burrito Supreme — Beef",
        "calories": 390,
        "protein": 16,
        "description": "Beef burrito with beans, red sauce, lettuce, cheese, tomatoes, onions, and sour cream.",
        "customization": "Order fresco style to lower calories.",
        "tags": [
          "burrito",
          "beef",
          "filling"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Power Menu Bowl — Chicken",
        "calories": 460,
        "protein": 26,
        "description": "Chicken bowl with rice, black beans, lettuce, pico, cheese, guacamole, and avocado ranch.",
        "customization": "Ask for light avocado ranch or remove it.",
        "tags": [
          "chicken",
          "bowl",
          "has rice",
          "has cheese"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Chicken Quesadilla",
        "calories": 520,
        "protein": 27,
        "description": "Chicken quesadilla with cheese and creamy jalapeño sauce.",
        "customization": "Ask for light sauce if possible.",
        "tags": [
          "chicken",
          "quesadilla",
          "has cheese"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Steak Quesadilla",
        "calories": 520,
        "protein": 27,
        "description": "Steak quesadilla with cheese and creamy jalapeño sauce.",
        "customization": "Ask for light sauce if possible.",
        "tags": [
          "steak",
          "quesadilla",
          "has cheese"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Crunchwrap Supreme",
        "calories": 530,
        "protein": 16,
        "description": "Crunchwrap with beef, nacho cheese, tostada shell, sour cream, lettuce, and tomato.",
        "customization": "Not the best protein-per-calorie item, but useful for comparison.",
        "tags": [
          "beef",
          "crunchwrap",
          "filling"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Mexican Pizza",
        "calories": 540,
        "protein": 20,
        "description": "Layered pizza-style Taco Bell item with seasoned beef, beans, cheese, and sauce.",
        "customization": "Moderate protein, higher calorie.",
        "tags": [
          "beef",
          "pizza",
          "has cheese"
        ],
        "source": "Taco Bell official nutrition information"
      },
      {
        "name": "Nachos BellGrande",
        "calories": 740,
        "protein": 17,
        "description": "Nachos with beef, beans, nacho cheese, tomatoes, and sour cream.",
        "customization": "High calorie for the protein. Better shared.",
        "tags": [
          "beef",
          "nachos",
          "high calorie"
        ],
        "source": "Taco Bell official nutrition information"
      }
    ]
  },
  {
    "name": "Chipotle",
    "aliases": [
      "chipotle",
      "chipotle mexican grill"
    ],
    "note": "Search across bowls, salads, burritos, proteins, rice, beans, and toppings.",
    "items": [
      {
        "name": "Steak + Fajita Veggie Bowl",
        "calories": 325,
        "protein": 30,
        "description": "Steak, black beans, fajita veggies, tomato salsa, and lettuce.",
        "customization": "Very light option. Add cheese if you want more flavor and protein.",
        "tags": [
          "steak",
          "bowl",
          "lowest calorie"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Chicken + Fajita Veggie Bowl",
        "calories": 355,
        "protein": 41,
        "description": "Chicken, black beans, fajita veggies, tomato salsa, and lettuce.",
        "customization": "Skip cheese and sour cream for the leanest version.",
        "tags": [
          "chicken",
          "bowl",
          "lowest calorie",
          "high protein"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Barbacoa + Fajita Veggie Bowl",
        "calories": 345,
        "protein": 33,
        "description": "Barbacoa, black beans, fajita veggies, tomato salsa, and lettuce.",
        "customization": "A solid beef option that stays lighter without rice, sour cream, or cheese.",
        "tags": [
          "barbacoa",
          "bowl",
          "lower calorie"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Steak Salad Bowl",
        "calories": 435,
        "protein": 36,
        "description": "Romaine, steak, black beans, fajita veggies, tomato salsa, and cheese.",
        "customization": "Use salsa as dressing. Add rice only if you have calories to spare.",
        "tags": [
          "steak",
          "salad",
          "has cheese",
          "lower calorie"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Sofritas Salad Bowl",
        "calories": 435,
        "protein": 23,
        "description": "Romaine, sofritas, black beans, fajita veggies, tomato salsa, and cheese.",
        "customization": "Vegetarian pick with decent protein. Skip cheese if you want it lighter.",
        "tags": [
          "vegetarian",
          "salad",
          "has cheese"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Chicken Salad Bowl",
        "calories": 465,
        "protein": 47,
        "description": "Romaine, chicken, black beans, fajita veggies, tomato salsa, and cheese.",
        "customization": "Use salsa as dressing. Skip vinaigrette to save calories.",
        "tags": [
          "chicken",
          "salad",
          "has cheese",
          "lower calorie"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Chicken Bowl — No Rice",
        "calories": 575,
        "protein": 47,
        "description": "Chicken, black beans, fajita veggies, tomato salsa, sour cream, cheese, and lettuce.",
        "customization": "No rice keeps calories lower while still feeling like a full bowl.",
        "tags": [
          "chicken",
          "bowl",
          "has cheese",
          "lower calorie"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Double Chicken Salad Bowl",
        "calories": 645,
        "protein": 79,
        "description": "Romaine, double chicken, black beans, fajita veggies, tomato salsa, and cheese.",
        "customization": "Very high protein. Skip vinaigrette and queso.",
        "tags": [
          "chicken",
          "salad",
          "has cheese",
          "highest protein"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Steak Bowl — Light Rice + Beans",
        "calories": 645,
        "protein": 40,
        "description": "Steak, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.",
        "customization": "Keep cheese or sour cream, but ideally not queso.",
        "tags": [
          "steak",
          "bowl",
          "has rice",
          "has cheese",
          "filling"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Barbacoa Bowl — Light Rice + Beans",
        "calories": 665,
        "protein": 43,
        "description": "Barbacoa, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.",
        "customization": "Light rice keeps this from going fully off the rails.",
        "tags": [
          "barbacoa",
          "bowl",
          "has rice",
          "has cheese",
          "filling"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Chicken Bowl — Light Rice + Beans",
        "calories": 675,
        "protein": 51,
        "description": "Chicken, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.",
        "customization": "Ask for light rice and light sour cream. Skip queso and chips.",
        "tags": [
          "chicken",
          "bowl",
          "has rice",
          "has cheese",
          "filling"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      },
      {
        "name": "Chicken Burrito — Light Rice",
        "calories": 995,
        "protein": 59,
        "description": "Tortilla, chicken, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.",
        "customization": "Higher calorie because of the tortilla. Choose a bowl if cutting calories.",
        "tags": [
          "chicken",
          "burrito",
          "has rice",
          "has cheese"
        ],
        "source": "Chipotle official nutrition calculator / nutrition facts PDF"
      }
    ]
  },
  {
    "name": "Shake Shack",
    "aliases": [
      "shake shack",
      "shakeshack",
      "shake"
    ],
    "note": "Search across burgers, chicken sandwiches, lettuce-wrap style picks, hot dogs, fries, and higher-protein double builds.",
    "items": [
      {
        "name": "ShackBurger",
        "calories": 500,
        "protein": 29,
        "description": "Single cheeseburger with lettuce, tomato, and ShackSauce on a potato bun.",
        "customization": "Ask for sauce on the side or consider lettuce wrap to lower calories.",
        "tags": [
          "burger",
          "has cheese"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Hamburger",
        "calories": 390,
        "protein": 25,
        "description": "Single beef patty on a potato bun without cheese.",
        "customization": "Simpler than the ShackBurger and lower calorie than double builds.",
        "tags": [
          "burger",
          "lower calorie"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Cheeseburger",
        "calories": 450,
        "protein": 26,
        "description": "Single beef patty with cheese on a potato bun.",
        "customization": "Good middle ground if you want a burger without going double.",
        "tags": [
          "burger",
          "has cheese"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "SmokeShack",
        "calories": 570,
        "protein": 32,
        "description": "Cheeseburger with bacon, chopped cherry peppers, and ShackSauce.",
        "customization": "Higher calorie than ShackBurger; skip fries if this is the meal.",
        "tags": [
          "burger",
          "has cheese",
          "bacon"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Double ShackBurger",
        "calories": 760,
        "protein": 51,
        "description": "Double cheeseburger with lettuce, tomato, and ShackSauce.",
        "customization": "High protein, but higher calorie. Lettuce wrap can help.",
        "tags": [
          "burger",
          "has cheese",
          "highest protein"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Double SmokeShack",
        "calories": 870,
        "protein": 58,
        "description": "Double cheeseburger with bacon, chopped cherry peppers, and ShackSauce.",
        "customization": "Very high protein and calorie-dense.",
        "tags": [
          "burger",
          "bacon",
          "highest protein",
          "high calorie"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Chicken Shack",
        "calories": 550,
        "protein": 29,
        "description": "Crispy chicken sandwich with lettuce, pickles, and buttermilk herb mayo.",
        "customization": "Ask for light sauce if available.",
        "tags": [
          "chicken",
          "sandwich"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Avocado Bacon Chicken",
        "calories": 670,
        "protein": 40,
        "description": "Crispy chicken sandwich with avocado and bacon.",
        "customization": "Good protein, but calorie-dense.",
        "tags": [
          "chicken",
          "sandwich",
          "bacon",
          "high protein"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Chicken Bites — 6 Piece",
        "calories": 300,
        "protein": 27,
        "description": "Crispy white-meat chicken bites.",
        "customization": "Use sauce lightly.",
        "tags": [
          "chicken",
          "nuggets"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Chicken Bites — 10 Piece",
        "calories": 510,
        "protein": 45,
        "description": "Larger serving of crispy white-meat chicken bites.",
        "customization": "High protein, but sauces can add calories quickly.",
        "tags": [
          "chicken",
          "nuggets",
          "high protein"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Hot Dog",
        "calories": 350,
        "protein": 16,
        "description": "Flat-top Vienna beef hot dog on a potato bun.",
        "customization": "Moderate calories but lower protein than burgers/chicken.",
        "tags": [
          "hot dog"
        ],
        "source": "Shake Shack official nutrition information"
      },
      {
        "name": "Regular Fries",
        "calories": 470,
        "protein": 6,
        "description": "Crinkle-cut fries.",
        "customization": "Low protein; better as a side than a main.",
        "tags": [
          "fries",
          "low protein"
        ],
        "source": "Shake Shack official nutrition information"
      }
    ]
  },
  {
    "name": "IHOP",
    "aliases": [
      "ihop",
      "international house of pancakes"
    ],
    "note": "Search across omelettes, egg breakfasts, pancakes, steak tips, chicken, sandwiches, and higher-calorie breakfast plates.",
    "items": [
      {
        "name": "Simple & Fit Two-Egg Breakfast",
        "calories": 410,
        "protein": 25,
        "description": "Egg-based breakfast with lighter sides depending on location/options.",
        "customization": "Choose fruit instead of hash browns if available.",
        "tags": [
          "breakfast",
          "eggs"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Egg White Vegetable Omelette",
        "calories": 330,
        "protein": 29,
        "description": "Egg white omelette with vegetables.",
        "customization": "Good high-protein breakfast base; avoid adding pancakes if cutting calories.",
        "tags": [
          "breakfast",
          "omelette",
          "vegetarian",
          "high protein"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Spinach & Mushroom Omelette",
        "calories": 680,
        "protein": 47,
        "description": "Omelette with spinach, mushrooms, and cheese.",
        "customization": "Ask for fruit or lighter side instead of pancakes/hash browns.",
        "tags": [
          "breakfast",
          "omelette",
          "has cheese",
          "high protein"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Big Steak Omelette",
        "calories": 1040,
        "protein": 72,
        "description": "Large omelette with steak and toppings.",
        "customization": "Very high protein, but high calorie. Skip pancakes or split.",
        "tags": [
          "breakfast",
          "omelette",
          "steak",
          "highest protein",
          "high calorie"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Colorado Omelette",
        "calories": 1250,
        "protein": 77,
        "description": "Large meat-heavy omelette with multiple proteins and cheese.",
        "customization": "High protein and very calorie-dense.",
        "tags": [
          "breakfast",
          "omelette",
          "highest protein",
          "high calorie"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Original Buttermilk Pancakes — Short Stack",
        "calories": 450,
        "protein": 10,
        "description": "Short stack of original buttermilk pancakes.",
        "customization": "Low protein; add eggs or lean protein if making a meal.",
        "tags": [
          "breakfast",
          "pancakes",
          "low protein"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Original Buttermilk Pancakes — Full Stack",
        "calories": 690,
        "protein": 18,
        "description": "Full stack of original buttermilk pancakes.",
        "customization": "Higher calories and not especially high protein.",
        "tags": [
          "breakfast",
          "pancakes"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Turkey Bacon Side",
        "calories": 90,
        "protein": 10,
        "description": "Side of turkey bacon.",
        "customization": "Helpful protein add-on without too many calories.",
        "tags": [
          "breakfast",
          "side",
          "lower calorie"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Sirloin Steak Tips Dinner",
        "calories": 790,
        "protein": 56,
        "description": "Steak tips meal; sides can vary calories.",
        "customization": "Choose vegetables or fruit when available.",
        "tags": [
          "steak",
          "high protein"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Grilled Chicken Breast Dinner",
        "calories": 580,
        "protein": 52,
        "description": "Grilled chicken dinner with sides.",
        "customization": "Choose lighter sides to keep calories controlled.",
        "tags": [
          "chicken",
          "high protein"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Crispy Chicken Sandwich",
        "calories": 870,
        "protein": 39,
        "description": "Crispy chicken sandwich as served.",
        "customization": "High calorie; consider skipping fries.",
        "tags": [
          "chicken",
          "sandwich",
          "high calorie"
        ],
        "source": "IHOP official nutrition calculator"
      },
      {
        "name": "Classic Burger",
        "calories": 760,
        "protein": 37,
        "description": "Classic beef burger.",
        "customization": "Skip fries or split if keeping calories lower.",
        "tags": [
          "burger"
        ],
        "source": "IHOP official nutrition calculator"
      }
    ]
  },
  {
    "name": "Qdoba",
    "aliases": [
      "qdoba",
      "qdoba mexican eats"
    ],
    "note": "Search across bowls, burritos, tacos, salads, quesadillas, protein-heavy builds, and lighter low-carb options.",
    "items": [
      {
        "name": "Chicken Protein Bowl",
        "calories": 520,
        "protein": 42,
        "description": "Chicken bowl with beans, fajita veggies, salsa, lettuce, and light toppings.",
        "customization": "Skip queso and go light on rice for fewer calories.",
        "tags": [
          "chicken",
          "bowl",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Adobo Chicken Salad Bowl",
        "calories": 430,
        "protein": 36,
        "description": "Adobo chicken over greens with beans, fajita veggies, salsa, and light cheese.",
        "customization": "Use salsa as dressing; keep queso off.",
        "tags": [
          "chicken",
          "salad",
          "lower calorie",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Grilled Steak Salad Bowl",
        "calories": 470,
        "protein": 34,
        "description": "Grilled steak over greens with beans, fajita veggies, and salsa.",
        "customization": "Add rice only if the calorie slider allows it.",
        "tags": [
          "steak",
          "salad",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Chicken Bowl with Rice & Beans",
        "calories": 650,
        "protein": 44,
        "description": "Chicken, rice, beans, fajita veggies, salsa, cheese, and lettuce.",
        "customization": "Go light on rice and cheese to lower calories.",
        "tags": [
          "chicken",
          "bowl",
          "has rice",
          "has cheese",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Steak Bowl with Rice & Beans",
        "calories": 680,
        "protein": 41,
        "description": "Steak, rice, beans, fajita veggies, salsa, cheese, and lettuce.",
        "customization": "Skip queso and sour cream if cutting calories.",
        "tags": [
          "steak",
          "bowl",
          "has rice",
          "has cheese"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Chicken Burrito — Light Rice",
        "calories": 890,
        "protein": 50,
        "description": "Flour tortilla with chicken, light rice, beans, salsa, cheese, and lettuce.",
        "customization": "Burrito tortilla adds a lot of calories; bowl is leaner.",
        "tags": [
          "chicken",
          "burrito",
          "has rice",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Steak Burrito — Light Rice",
        "calories": 930,
        "protein": 47,
        "description": "Flour tortilla with steak, light rice, beans, salsa, cheese, and lettuce.",
        "customization": "Consider a bowl if you want the same vibe with fewer calories.",
        "tags": [
          "steak",
          "burrito",
          "has rice"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Chicken 3-Cheese Queso Bowl",
        "calories": 760,
        "protein": 45,
        "description": "Chicken bowl with queso, rice, beans, and toppings.",
        "customization": "Queso adds calories fast; good for higher calorie settings.",
        "tags": [
          "chicken",
          "bowl",
          "has cheese",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Chicken Tacos — 3 Count",
        "calories": 620,
        "protein": 38,
        "description": "Three chicken tacos with standard toppings.",
        "customization": "Choose corn tortillas and salsa-heavy toppings if available.",
        "tags": [
          "chicken",
          "tacos"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Steak Tacos — 3 Count",
        "calories": 650,
        "protein": 36,
        "description": "Three steak tacos with standard toppings.",
        "customization": "Go light on sour cream/queso.",
        "tags": [
          "steak",
          "tacos"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Chicken Quesadilla",
        "calories": 1080,
        "protein": 59,
        "description": "Chicken quesadilla with cheese in a flour tortilla.",
        "customization": "Very high calorie, but high protein. Split or save half.",
        "tags": [
          "chicken",
          "quesadilla",
          "has cheese",
          "high calorie",
          "high protein"
        ],
        "source": "QDOBA official nutrition information"
      },
      {
        "name": "Impossible Bowl",
        "calories": 620,
        "protein": 31,
        "description": "Plant-based protein bowl with rice, beans, and toppings.",
        "customization": "Useful vegetarian option; choose lighter toppings.",
        "tags": [
          "vegetarian",
          "bowl"
        ],
        "source": "QDOBA official nutrition information"
      }
    ]
  },
  {
    "name": "Popeyes",
    "aliases": [
      "popeyes",
      "popeyes louisiana kitchen"
    ],
    "note": "Search across blackened tenders, fried chicken, chicken sandwiches, nuggets, seafood, and sides.",
    "items": [
      {
        "name": "3 Piece Blackened Tenders",
        "calories": 170,
        "protein": 26,
        "description": "Three blackened chicken tenders without breading.",
        "customization": "One of the best protein-per-calorie Popeyes options.",
        "tags": [
          "chicken",
          "tenders",
          "lowest calorie",
          "high protein"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "5 Piece Blackened Tenders",
        "calories": 280,
        "protein": 43,
        "description": "Five blackened chicken tenders without breading.",
        "customization": "High protein and much lighter than fried options.",
        "tags": [
          "chicken",
          "tenders",
          "highest protein"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "3 Piece Classic Tenders",
        "calories": 450,
        "protein": 38,
        "description": "Three breaded classic chicken tenders.",
        "customization": "Good protein, but fried and higher calorie than blackened tenders.",
        "tags": [
          "chicken",
          "tenders",
          "fried",
          "high protein"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "5 Piece Classic Tenders",
        "calories": 740,
        "protein": 63,
        "description": "Five breaded classic chicken tenders.",
        "customization": "Very high protein; use a higher calorie setting and go light on sauces.",
        "tags": [
          "chicken",
          "tenders",
          "fried",
          "highest protein"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Chicken Sandwich Classic",
        "calories": 700,
        "protein": 28,
        "description": "Fried chicken sandwich with pickles and mayo on a brioche bun.",
        "customization": "Ask for light mayo if possible; skip fries.",
        "tags": [
          "chicken",
          "sandwich",
          "fried"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Chicken Sandwich Spicy",
        "calories": 700,
        "protein": 28,
        "description": "Spicy fried chicken sandwich with pickles and spicy mayo.",
        "customization": "Calorie-dense; sauces and sides add up fast.",
        "tags": [
          "chicken",
          "sandwich",
          "spicy",
          "fried"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "2 Piece Signature Chicken — Mixed",
        "calories": 560,
        "protein": 35,
        "description": "Two pieces of bone-in fried chicken; calories vary by pieces selected.",
        "customization": "Choose breast/leg combinations carefully; sides increase calories.",
        "tags": [
          "chicken",
          "fried"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Chicken Breast — Classic",
        "calories": 380,
        "protein": 35,
        "description": "Classic bone-in chicken breast.",
        "customization": "Strong protein, but fried.",
        "tags": [
          "chicken",
          "fried",
          "high protein"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Chicken Leg — Classic",
        "calories": 160,
        "protein": 14,
        "description": "Classic bone-in chicken leg.",
        "customization": "Smaller lower-calorie piece.",
        "tags": [
          "chicken",
          "fried",
          "lower calorie"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Chicken Nuggets — 8 Piece",
        "calories": 380,
        "protein": 19,
        "description": "Eight-piece chicken nuggets.",
        "customization": "Use sauces lightly.",
        "tags": [
          "chicken",
          "nuggets"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Popcorn Shrimp",
        "calories": 390,
        "protein": 14,
        "description": "Fried popcorn shrimp portion.",
        "customization": "Lower protein than chicken options.",
        "tags": [
          "shrimp",
          "fried"
        ],
        "source": "Popeyes official nutrition information"
      },
      {
        "name": "Red Beans & Rice — Regular",
        "calories": 250,
        "protein": 8,
        "description": "Classic side of red beans and rice.",
        "customization": "More filling than fries, but not high protein.",
        "tags": [
          "side",
          "has rice"
        ],
        "source": "Popeyes official nutrition information"
      }
    ]
  },
  {
    "name": "KFC",
    "aliases": [
      "kfc",
      "kentucky fried chicken"
    ],
    "note": "Search across grilled-style chicken where available, Original Recipe, Extra Crispy, nuggets, sandwiches, bowls, and sides.",
    "items": [
      {
        "name": "Kentucky Grilled Chicken Breast",
        "calories": 210,
        "protein": 38,
        "description": "Grilled chicken breast, where available.",
        "customization": "Best protein-per-calorie choice when your location has it.",
        "tags": [
          "chicken",
          "grilled",
          "highest protein"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Kentucky Grilled Chicken Drumstick",
        "calories": 90,
        "protein": 11,
        "description": "Grilled chicken drumstick, where available.",
        "customization": "Good smaller protein add-on.",
        "tags": [
          "chicken",
          "grilled",
          "lowest calorie"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Original Recipe Chicken Breast",
        "calories": 390,
        "protein": 39,
        "description": "Bone-in Original Recipe chicken breast.",
        "customization": "Strong protein, but fried/breaded.",
        "tags": [
          "chicken",
          "fried",
          "high protein"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Original Recipe Chicken Thigh",
        "calories": 280,
        "protein": 18,
        "description": "Original Recipe chicken thigh.",
        "customization": "Lower protein-per-calorie than breast.",
        "tags": [
          "chicken",
          "fried"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Original Recipe Chicken Drumstick",
        "calories": 130,
        "protein": 12,
        "description": "Original Recipe chicken drumstick.",
        "customization": "Smaller fried chicken option.",
        "tags": [
          "chicken",
          "fried",
          "lower calorie"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Extra Crispy Chicken Breast",
        "calories": 530,
        "protein": 35,
        "description": "Extra Crispy chicken breast.",
        "customization": "Higher calorie than Original Recipe breast.",
        "tags": [
          "chicken",
          "fried",
          "high protein"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Extra Crispy Chicken Drumstick",
        "calories": 170,
        "protein": 10,
        "description": "Extra Crispy chicken drumstick.",
        "customization": "Small but less efficient protein than grilled options.",
        "tags": [
          "chicken",
          "fried"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "5 Piece Chicken Nuggets",
        "calories": 270,
        "protein": 19,
        "description": "Five-piece KFC nuggets.",
        "customization": "Use sauces lightly.",
        "tags": [
          "chicken",
          "nuggets"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "8 Piece Chicken Nuggets",
        "calories": 430,
        "protein": 31,
        "description": "Eight-piece KFC nuggets.",
        "customization": "Decent protein if you control sauce calories.",
        "tags": [
          "chicken",
          "nuggets",
          "high protein"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "KFC Chicken Sandwich",
        "calories": 650,
        "protein": 34,
        "description": "Crispy chicken filet sandwich with pickles and mayo-style sauce.",
        "customization": "Ask for light sauce or skip fries.",
        "tags": [
          "chicken",
          "sandwich",
          "high protein"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Spicy Chicken Sandwich",
        "calories": 620,
        "protein": 33,
        "description": "Spicy crispy chicken sandwich.",
        "customization": "Good protein, but calorie-dense.",
        "tags": [
          "chicken",
          "sandwich",
          "spicy"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Famous Bowl",
        "calories": 740,
        "protein": 26,
        "description": "Mashed potatoes, corn, crispy chicken, gravy, and cheese.",
        "customization": "Filling but not the best protein-per-calorie option.",
        "tags": [
          "bowl",
          "chicken",
          "has cheese",
          "high calorie"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Pot Pie",
        "calories": 720,
        "protein": 26,
        "description": "Chicken pot pie with crust and filling.",
        "customization": "Calorie-dense comfort option; not protein-efficient.",
        "tags": [
          "chicken",
          "high calorie"
        ],
        "source": "KFC official nutrition guide"
      },
      {
        "name": "Mashed Potatoes with Gravy — Individual",
        "calories": 130,
        "protein": 3,
        "description": "Side of mashed potatoes with gravy.",
        "customization": "Low protein; side only.",
        "tags": [
          "side",
          "low protein"
        ],
        "source": "KFC official nutrition guide"
      }
    ]
  },
  {
    "name": "Wendy’s",
    "aliases": [
      "wendys",
      "wendy’s",
      "wendy's"
    ],
    "note": "Search across chili, burgers, wraps, sandwiches, salads, nuggets, and bigger combos.",
    "items": [
      {
        "name": "Jr. Hamburger",
        "calories": 250,
        "protein": 13,
        "description": "Small hamburger with beef patty, bun, pickles, onion, ketchup, and mustard.",
        "customization": "Simple lower-calorie burger option.",
        "tags": [
          "burger",
          "lower calorie"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Small Chili",
        "calories": 280,
        "protein": 19,
        "description": "Beef-and-bean chili that is filling, non-fried, and relatively low calorie.",
        "customization": "Pair with water or unsweetened tea. Skip fries.",
        "tags": [
          "chili",
          "lower calorie",
          "filling"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Jr. Cheeseburger",
        "calories": 290,
        "protein": 14,
        "description": "Small cheeseburger with beef patty and cheese.",
        "customization": "Good smaller burger option.",
        "tags": [
          "burger",
          "has cheese",
          "lower calorie"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Crispy Chicken Sandwich",
        "calories": 330,
        "protein": 14,
        "description": "Crispy chicken sandwich with lettuce and mayo.",
        "customization": "Ask for no mayo to reduce calories.",
        "tags": [
          "chicken",
          "sandwich",
          "lower calorie"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Large Chili",
        "calories": 370,
        "protein": 23,
        "description": "A larger portion of Wendy’s chili with more protein and still reasonable calories.",
        "customization": "Good as a full meal. Avoid adding cheese or crackers if cutting calories.",
        "tags": [
          "chili",
          "filling",
          "high protein"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Double Stack",
        "calories": 410,
        "protein": 26,
        "description": "Two beef patties with cheese on a smaller bun.",
        "customization": "Solid protein for the calories compared with larger burgers.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Grilled Chicken Wrap",
        "calories": 420,
        "protein": 27,
        "description": "Chicken wrap with cheese and sauce.",
        "customization": "Ask for light sauce if available.",
        "tags": [
          "chicken",
          "wrap",
          "has cheese"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "10 Piece Crispy Nuggets",
        "calories": 450,
        "protein": 23,
        "description": "Ten crispy chicken nuggets.",
        "customization": "Go light on sauces.",
        "tags": [
          "chicken",
          "nuggets"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Spicy Chicken Sandwich",
        "calories": 490,
        "protein": 28,
        "description": "Spicy breaded chicken filet sandwich.",
        "customization": "Skip fries and sugary drinks.",
        "tags": [
          "chicken",
          "sandwich",
          "spicy"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Dave’s Single",
        "calories": 590,
        "protein": 29,
        "description": "Single-patty cheeseburger with standard toppings.",
        "customization": "Skip mayo or fries if managing calories.",
        "tags": [
          "burger",
          "has cheese"
        ],
        "source": "Wendy’s official nutrition information"
      },
      {
        "name": "Dave’s Double",
        "calories": 850,
        "protein": 49,
        "description": "Double-patty cheeseburger.",
        "customization": "High protein but much higher calorie.",
        "tags": [
          "burger",
          "has cheese",
          "high protein"
        ],
        "source": "Wendy’s official nutrition information"
      }
    ]
  },
  {
    "name": "Chick-fil-A",
    "aliases": [
      "chickfila",
      "chick-fil-a",
      "chick fil a"
    ],
    "note": "Search across grilled nuggets, fried sandwiches, wraps, breakfast, and higher-calorie chicken items.",
    "items": [
      {
        "name": "5 Count Grilled Nuggets",
        "calories": 80,
        "protein": 16,
        "description": "Smaller serving of grilled chicken nuggets.",
        "customization": "Good snack-sized protein option.",
        "tags": [
          "chicken",
          "grilled",
          "snack",
          "lowest calorie"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "8 Count Grilled Nuggets",
        "calories": 130,
        "protein": 25,
        "description": "Grilled bite-sized chicken breast nuggets.",
        "customization": "Add fruit or a side salad if you need more volume. Go light on sauces.",
        "tags": [
          "chicken",
          "grilled",
          "lowest calorie",
          "high protein"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "12 Count Grilled Nuggets",
        "calories": 200,
        "protein": 38,
        "description": "Larger serving of grilled chicken nuggets.",
        "customization": "One of the best protein-per-calorie fast food options.",
        "tags": [
          "chicken",
          "grilled",
          "highest protein",
          "low carb"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "8 Count Chick-fil-A Nuggets",
        "calories": 250,
        "protein": 27,
        "description": "Classic breaded chicken nuggets.",
        "customization": "Still protein-forward. Sauces are where things get sneaky.",
        "tags": [
          "chicken",
          "nuggets",
          "lower calorie"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Egg White Grill",
        "calories": 300,
        "protein": 27,
        "description": "Grilled chicken, egg whites, and cheese on an English muffin.",
        "customization": "Breakfast that actually understood the assignment.",
        "tags": [
          "breakfast",
          "chicken",
          "has cheese"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "3 Count Chick-n-Strips",
        "calories": 310,
        "protein": 29,
        "description": "Three breaded chicken strips.",
        "customization": "Higher calorie than grilled nuggets, but the protein is very real.",
        "tags": [
          "chicken",
          "strips",
          "high protein"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Grilled Chicken Sandwich",
        "calories": 390,
        "protein": 28,
        "description": "Grilled chicken filet on a multigrain bun with lettuce and tomato.",
        "customization": "Use sauce lightly. Pair with fruit instead of fries.",
        "tags": [
          "chicken",
          "grilled",
          "sandwich"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Chick-fil-A Chicken Sandwich",
        "calories": 420,
        "protein": 29,
        "description": "Classic breaded chicken sandwich with pickles on a toasted bun.",
        "customization": "Still reasonable calories, but grilled is the leaner choice.",
        "tags": [
          "chicken",
          "sandwich"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Spicy Chicken Sandwich",
        "calories": 450,
        "protein": 28,
        "description": "Spicy breaded chicken filet on a toasted bun.",
        "customization": "Skip fries and sugary drinks to keep the meal balanced.",
        "tags": [
          "chicken",
          "sandwich",
          "spicy"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Grilled Chicken Club Sandwich",
        "calories": 520,
        "protein": 38,
        "description": "Grilled chicken sandwich with bacon and cheese.",
        "customization": "Higher calorie than the regular grilled sandwich, but more protein.",
        "tags": [
          "chicken",
          "grilled",
          "has cheese",
          "sandwich"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Market Salad with Grilled Filet",
        "calories": 550,
        "protein": 28,
        "description": "Greens, grilled chicken, fruit, blue cheese, and toppings.",
        "customization": "Use dressing lightly. The toppings are cute, but calories count.",
        "tags": [
          "salad",
          "chicken",
          "has cheese"
        ],
        "source": "Chick-fil-A official nutrition guide"
      },
      {
        "name": "Chick-fil-A Cool Wrap",
        "calories": 660,
        "protein": 43,
        "description": "Grilled chicken, lettuce, shredded cheese, and flaxseed flatbread.",
        "customization": "Use half the dressing or choose a lighter sauce.",
        "tags": [
          "chicken",
          "wrap",
          "has cheese",
          "high protein"
        ],
        "source": "Chick-fil-A official nutrition guide"
      }
    ]
  },
  {
    "name": "Panera",
    "aliases": [
      "panera",
      "panera bread"
    ],
    "note": "Search across salads, sandwiches, soups, bowls, breakfast, and higher-calorie bakery-style meals.",
    "items": [
      {
        "name": "Chicken Noodle Soup — Bowl",
        "calories": 180,
        "protein": 14,
        "description": "Bowl of chicken noodle soup.",
        "customization": "Light meal or side; not a full high-protein meal.",
        "tags": [
          "soup",
          "chicken",
          "lower calorie"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Turkey Chili",
        "calories": 300,
        "protein": 21,
        "description": "A hearty chili option with beans and turkey.",
        "customization": "Good when you want something warm and filling without a sandwich.",
        "tags": [
          "chili",
          "filling",
          "lower calorie"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Seasonal Greens with Chicken",
        "calories": 390,
        "protein": 24,
        "description": "Mixed greens with chicken and vinaigrette.",
        "customization": "Ask for dressing on the side. Very respectable, honestly.",
        "tags": [
          "salad",
          "chicken",
          "lower calorie"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Caesar Salad with Chicken",
        "calories": 440,
        "protein": 32,
        "description": "Romaine, chicken, parmesan, Caesar dressing, and croutons.",
        "customization": "Use light dressing and go easy on croutons.",
        "tags": [
          "salad",
          "chicken",
          "has cheese"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Greek Salad with Chicken",
        "calories": 490,
        "protein": 33,
        "description": "Chicken, romaine, tomatoes, cucumbers, red onions, feta, olives, and Greek dressing.",
        "customization": "Ask for dressing on the side and use half.",
        "tags": [
          "salad",
          "chicken",
          "has cheese"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Green Goddess Cobb Salad with Chicken",
        "calories": 530,
        "protein": 42,
        "description": "Chicken Cobb-style salad with egg, avocado, and Green Goddess dressing.",
        "customization": "Use dressing on the side.",
        "tags": [
          "salad",
          "chicken",
          "high protein"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Deli Turkey Sandwich",
        "calories": 560,
        "protein": 35,
        "description": "Turkey sandwich with standard bread and toppings.",
        "customization": "A cleaner sandwich pick when the bakery case is trying to flirt with you.",
        "tags": [
          "sandwich",
          "turkey",
          "high protein"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Mediterranean Bowl with Chicken",
        "calories": 650,
        "protein": 35,
        "description": "Chicken, grains, greens, hummus, feta, cucumbers, tomatoes, and sauce.",
        "customization": "Ask for light sauce or sauce on the side.",
        "tags": [
          "bowl",
          "has rice",
          "has cheese",
          "chicken"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Smokehouse BBQ Chicken Sandwich",
        "calories": 750,
        "protein": 45,
        "description": "Chicken sandwich with barbecue sauce, cheese, and crispy onions.",
        "customization": "Higher calorie, but strong protein. Half sandwich is the strategic move.",
        "tags": [
          "sandwich",
          "chicken",
          "has cheese",
          "high protein"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Turkey & Cheddar Sandwich",
        "calories": 880,
        "protein": 50,
        "description": "Turkey and cheddar sandwich.",
        "customization": "Half sandwich is a lighter option.",
        "tags": [
          "sandwich",
          "turkey",
          "has cheese",
          "high protein"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Chipotle Chicken Avo Melt",
        "calories": 930,
        "protein": 54,
        "description": "Chicken, avocado, cheese, peppers, and chipotle sauce.",
        "customization": "High protein and high calorie. Split it or order half if you want balance.",
        "tags": [
          "sandwich",
          "chicken",
          "has cheese",
          "high protein"
        ],
        "source": "Panera official nutrition guide"
      },
      {
        "name": "Bacon Turkey Bravo Sandwich",
        "calories": 1010,
        "protein": 54,
        "description": "Turkey, bacon, cheese, and signature sauce.",
        "customization": "High protein but high calorie.",
        "tags": [
          "sandwich",
          "turkey",
          "high protein",
          "high calorie"
        ],
        "source": "Panera official nutrition guide"
      }
    ]
  },
  {
    "name": "Starbucks",
    "aliases": [
      "starbucks",
      "sbux"
    ],
    "note": "Search across egg bites, breakfast sandwiches, wraps, protein boxes, and bakery items.",
    "items": [
      {
        "name": "Egg White & Roasted Red Pepper Egg Bites",
        "calories": 170,
        "protein": 12,
        "description": "Egg white bites with roasted red pepper and cheese.",
        "customization": "Pair with unsweetened coffee or tea.",
        "tags": [
          "breakfast",
          "lower calorie",
          "has cheese"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Rolled & Steel-Cut Oatmeal",
        "calories": 160,
        "protein": 5,
        "description": "Plain oatmeal with optional toppings.",
        "customization": "Good light side, but add protein elsewhere.",
        "tags": [
          "breakfast",
          "side",
          "lower calorie"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Potato, Cheddar & Chive Bakes",
        "calories": 210,
        "protein": 12,
        "description": "Egg-and-potato bakes with cheddar and chives.",
        "customization": "A lighter savory bite when the pastry case is being dramatic.",
        "tags": [
          "breakfast",
          "has cheese",
          "lower calorie"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Turkey Bacon, Cheddar & Egg White Sandwich",
        "calories": 230,
        "protein": 17,
        "description": "Turkey bacon, egg whites, and cheese on an English muffin.",
        "customization": "Good breakfast pick when you want protein without a pastry.",
        "tags": [
          "breakfast",
          "has cheese",
          "sandwich"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Kale & Mushroom Egg Bites",
        "calories": 230,
        "protein": 15,
        "description": "Egg bites with kale, mushroom, and cheese.",
        "customization": "Vegetarian, compact, and more filling than it looks.",
        "tags": [
          "breakfast",
          "vegetarian",
          "has cheese"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Spinach, Feta & Egg White Wrap",
        "calories": 290,
        "protein": 20,
        "description": "Egg whites, spinach, feta, and tomatoes in a wrap.",
        "customization": "Pair with black coffee or unsweetened iced coffee.",
        "tags": [
          "breakfast",
          "has cheese",
          "vegetarian"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Egg, Pesto & Mozzarella Sandwich",
        "calories": 390,
        "protein": 21,
        "description": "Egg, mozzarella, and pesto on bread.",
        "customization": "A little richer, but still a decent breakfast protein pick.",
        "tags": [
          "breakfast",
          "sandwich",
          "has cheese"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Bacon & Gruyère Egg Bites",
        "calories": 300,
        "protein": 19,
        "description": "Egg bites with bacon and Gruyère cheese.",
        "customization": "Higher calorie than egg white bites, but more protein and very filling.",
        "tags": [
          "breakfast",
          "has cheese",
          "filling"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Eggs & Cheddar Protein Box",
        "calories": 470,
        "protein": 23,
        "description": "Protein box with eggs, cheese, fruit, and bread/crackers.",
        "customization": "Check ingredients if avoiding nuts or fruit allergens.",
        "tags": [
          "protein box",
          "has cheese",
          "filling"
        ],
        "source": "Starbucks official nutrition information"
      },
      {
        "name": "Double-Smoked Bacon, Cheddar & Egg Sandwich",
        "calories": 500,
        "protein": 21,
        "description": "Breakfast sandwich with bacon, cheddar, and egg.",
        "customization": "High calorie compared with egg bites.",
        "tags": [
          "breakfast",
          "sandwich",
          "has cheese"
        ],
        "source": "Starbucks official nutrition information"
      }
    ]
  },
  {
    "name": "Dunkin’",
    "aliases": [
      "dunkin",
      "dunkin’",
      "dunkin'",
      "dunkin donuts"
    ],
    "note": "Search across Wake-Up Wraps, breakfast sandwiches, bagels, avocado toast, and coffee-pairing options.",
    "items": [
      {
        "name": "Hash Browns",
        "calories": 130,
        "protein": 1,
        "description": "Crispy potato hash browns.",
        "customization": "Low protein; treat as a side.",
        "tags": [
          "side",
          "lower calorie",
          "low protein"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Egg & Cheese Wake-Up Wrap",
        "calories": 180,
        "protein": 7,
        "description": "Egg and cheese in a small wrap.",
        "customization": "Order two if you need more protein while keeping calories reasonable.",
        "tags": [
          "breakfast",
          "has cheese",
          "lower calorie"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Bacon, Egg & Cheese Wake-Up Wrap",
        "calories": 220,
        "protein": 10,
        "description": "Bacon, egg, and cheese in a smaller wrap.",
        "customization": "A lighter way to get the breakfast sandwich vibe.",
        "tags": [
          "breakfast",
          "has cheese",
          "lower calorie"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Turkey Sausage, Egg & Cheese Wake-Up Wrap",
        "calories": 230,
        "protein": 11,
        "description": "Turkey sausage, egg, and cheese in a smaller wrap.",
        "customization": "A slightly leaner breakfast wrap with actual protein.",
        "tags": [
          "breakfast",
          "has cheese",
          "lower calorie"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Avocado Toast",
        "calories": 240,
        "protein": 6,
        "description": "Avocado spread on toast.",
        "customization": "Lower calorie, but not high protein.",
        "tags": [
          "breakfast",
          "lower calorie"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Sausage, Egg & Cheese Wake-Up Wrap",
        "calories": 290,
        "protein": 11,
        "description": "Sausage, egg, and cheese in a smaller wrap.",
        "customization": "More calorie-dense than the turkey version, but still portion-controlled.",
        "tags": [
          "breakfast",
          "has cheese"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Egg & Cheese Sandwich",
        "calories": 340,
        "protein": 14,
        "description": "Egg and cheese breakfast sandwich.",
        "customization": "Simpler than meatier sandwiches and easier to fit into the day.",
        "tags": [
          "breakfast",
          "sandwich",
          "has cheese"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Turkey Sausage, Egg & Cheese Sandwich",
        "calories": 470,
        "protein": 23,
        "description": "Turkey sausage, egg, and cheese on an English muffin or bread.",
        "customization": "Skip sweetened coffee drinks to keep the meal lighter.",
        "tags": [
          "breakfast",
          "has cheese",
          "filling"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Sourdough Breakfast Sandwich",
        "calories": 630,
        "protein": 30,
        "description": "Egg, cheese, and breakfast meat on sourdough.",
        "customization": "Filling and high protein, but definitely not tiny. Plan around it.",
        "tags": [
          "breakfast",
          "sandwich",
          "has cheese",
          "high protein"
        ],
        "source": "Dunkin’ official nutrition information"
      },
      {
        "name": "Bacon, Egg & Cheese Sandwich",
        "calories": 520,
        "protein": 24,
        "description": "Bacon, egg, and cheese breakfast sandwich.",
        "customization": "Higher calorie than a Wake-Up Wrap.",
        "tags": [
          "breakfast",
          "sandwich",
          "has cheese"
        ],
        "source": "Dunkin’ official nutrition information"
      }
    ]
  },
  {
    "name": "Subway",
    "aliases": [
      "subway"
    ],
    "note": "Search across 6-inch subs, wraps, protein bowls, steak, turkey, chicken, and higher-calorie builds.",
    "items": [
      {
        "name": "6-Inch Ham & Turkey Stacker",
        "calories": 290,
        "protein": 20,
        "description": "A lighter 6-inch sub with ham and turkey.",
        "customization": "Add vegetables and choose mustard for flavor.",
        "tags": [
          "sandwich",
          "lower calorie"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "6-Inch Oven-Roasted Turkey",
        "calories": 270,
        "protein": 20,
        "description": "Turkey 6-inch sub with standard vegetables.",
        "customization": "Add veggies and use mustard or vinegar for flavor.",
        "tags": [
          "sandwich",
          "turkey",
          "lower calorie"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "6-Inch Subway Club",
        "calories": 310,
        "protein": 26,
        "description": "Turkey, ham, roast beef, vegetables, and bread.",
        "customization": "A strong protein pick without needing a footlong situation.",
        "tags": [
          "sandwich",
          "high protein",
          "lower calorie"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "6-Inch Turkey & Ranch Delite",
        "calories": 380,
        "protein": 26,
        "description": "Turkey-based 6-inch sub with ranch-style flavor.",
        "customization": "Ask for light ranch if possible.",
        "tags": [
          "sandwich",
          "lower calorie"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "6-Inch Grilled Chicken",
        "calories": 300,
        "protein": 27,
        "description": "Grilled chicken 6-inch sub with standard vegetables.",
        "customization": "Keep sauces light and this is one of the cleaner Subway moves.",
        "tags": [
          "chicken",
          "sandwich",
          "high protein"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "Oven-Roasted Turkey Protein Bowl",
        "calories": 410,
        "protein": 21,
        "description": "Turkey and vegetables served as a bowl without bread.",
        "customization": "Good lower-carb option. Add extra turkey if available.",
        "tags": [
          "bowl",
          "lower calorie",
          "low carb"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "6-Inch Seasoned Steak & Fresh Avocado",
        "calories": 430,
        "protein": 35,
        "description": "Seasoned steak and avocado on a 6-inch sub.",
        "customization": "Good high-protein option. Keep sauces light.",
        "tags": [
          "steak",
          "sandwich",
          "high protein"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "6-Inch Grilled Chicken & Fresh Avocado",
        "calories": 450,
        "protein": 35,
        "description": "Grilled chicken, avocado, bread, and standard vegetables.",
        "customization": "Use mustard or vinegar instead of creamy sauce.",
        "tags": [
          "chicken",
          "sandwich",
          "high protein"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "Grilled Chicken Wrap",
        "calories": 680,
        "protein": 48,
        "description": "Grilled chicken wrap with vegetables and toppings.",
        "customization": "Good high-protein option when you have room for more calories.",
        "tags": [
          "chicken",
          "wrap",
          "high protein"
        ],
        "source": "Subway U.S. nutrition PDF"
      },
      {
        "name": "Chicken & Bacon Ranch Wrap",
        "calories": 830,
        "protein": 56,
        "description": "Chicken, bacon, ranch, cheese, and vegetables in a wrap.",
        "customization": "Very high protein, but higher calorie. Use light ranch if possible.",
        "tags": [
          "chicken",
          "wrap",
          "has cheese",
          "high protein"
        ],
        "source": "Subway U.S. nutrition PDF"
      }
    ]
  },
  {
    "name": "Chili’s",
    "aliases": [
      "chilis",
      "chili’s",
      "chili's"
    ],
    "note": "Search across lighter choices, steaks, fajitas, burgers, ribs, bowls, pasta, sandwiches, and salads.",
    "items": [
      {
        "name": "Fajita Grilled Chicken — Meat Only",
        "calories": 110,
        "protein": 20,
        "description": "Grilled chicken portion from fajitas, listed without tortillas and toppings.",
        "customization": "Add peppers/onions for volume. Tortillas and toppings increase calories.",
        "tags": [
          "chicken",
          "fajitas",
          "lowest calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Lighter Choice 6 oz Classic Sirloin",
        "calories": 240,
        "protein": 37,
        "description": "Lighter 6 oz sirloin option.",
        "customization": "Pair with steamed broccoli if available.",
        "tags": [
          "steak",
          "lowest calorie",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "6 oz Classic Sirloin — No Sides",
        "calories": 300,
        "protein": 34,
        "description": "6 oz classic sirloin listed without sides.",
        "customization": "Add vegetables instead of fries or loaded sides.",
        "tags": [
          "steak",
          "lower calorie",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Grilled Chicken Salad",
        "calories": 430,
        "protein": 39,
        "description": "Grilled chicken salad from Chili’s Lighter Choices.",
        "customization": "Ask for dressing on the side and use half.",
        "tags": [
          "chicken",
          "salad",
          "lower calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "10 oz Classic Sirloin — No Sides",
        "calories": 440,
        "protein": 56,
        "description": "10 oz classic sirloin listed without sides.",
        "customization": "High protein. Pair with a lighter side.",
        "tags": [
          "steak",
          "highest protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "6 oz Classic Sirloin with Grilled Avocado",
        "calories": 430,
        "protein": 34,
        "description": "Classic sirloin served with grilled avocado.",
        "customization": "A solid protein pick with a little fat for staying power.",
        "tags": [
          "steak",
          "avocado",
          "high protein",
          "lower calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Lighter Choice Salmon",
        "calories": 540,
        "protein": 47,
        "description": "Salmon from Chili’s Lighter Choices.",
        "customization": "Pair with vegetables. Skip extra sauces if possible.",
        "tags": [
          "salmon",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Mango-Chile Chicken",
        "calories": 510,
        "protein": 43,
        "description": "Grilled chicken entrée with mango-chile flavor.",
        "customization": "Good restaurant-food-that-still-behaves energy.",
        "tags": [
          "chicken",
          "high protein",
          "lower calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Margarita Grilled Chicken",
        "calories": 630,
        "protein": 52,
        "description": "Grilled chicken entrée with margarita-style seasoning.",
        "customization": "Strong protein. Keep sides simple if you want this to stay reasonable.",
        "tags": [
          "chicken",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Chicken Fajitas",
        "calories": 480,
        "protein": 60,
        "description": "Chicken fajitas listed without toppings, tortillas, or sides.",
        "customization": "Add toppings intentionally. Tortillas, queso, and sour cream change the math.",
        "tags": [
          "chicken",
          "fajitas",
          "highest protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Seared Shrimp Fajitas",
        "calories": 370,
        "protein": 30,
        "description": "Shrimp fajitas listed without toppings, tortillas, or sides.",
        "customization": "A lighter fajita base if shrimp is your thing.",
        "tags": [
          "shrimp",
          "fajitas",
          "lower calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Original Half Rack Ribs — No Sides",
        "calories": 470,
        "protein": 38,
        "description": "Half rack of original ribs listed without sides.",
        "customization": "Half rack is the saner ribs lane. Add vegetables if available.",
        "tags": [
          "ribs",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Bone-In Wings — Smoked",
        "calories": 560,
        "protein": 55,
        "description": "Smoked bone-in wings.",
        "customization": "High protein, but watch sauces and ranch.",
        "tags": [
          "chicken",
          "wings",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Margarita Chicken Bowl",
        "calories": 920,
        "protein": 57,
        "description": "Fresh Mex bowl with margarita chicken.",
        "customization": "High protein; skip appetizers and sugary drinks.",
        "tags": [
          "chicken",
          "bowl",
          "has rice",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Steamed Broccoli",
        "calories": 40,
        "protein": 3,
        "description": "Side of steamed broccoli.",
        "customization": "The side that quietly saves the whole order.",
        "tags": [
          "side",
          "vegetable",
          "lowest calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Black Beans",
        "calories": 130,
        "protein": 7,
        "description": "Side of black beans.",
        "customization": "A better side if you want fiber and a little protein.",
        "tags": [
          "side",
          "beans",
          "lower calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Homestyle Fries",
        "calories": 390,
        "protein": 5,
        "description": "Side of homestyle fries.",
        "customization": "Included because fries are real life. Better shared if calories matter.",
        "tags": [
          "side",
          "fries"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Cajun Pasta with Grilled Chicken",
        "calories": 1270,
        "protein": 71,
        "description": "Cajun pasta with grilled chicken.",
        "customization": "High calorie and high protein. Consider boxing half.",
        "tags": [
          "chicken",
          "pasta",
          "high protein",
          "high calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Original Ribs — Full Rack",
        "calories": 1580,
        "protein": 82,
        "description": "Full rack of original ribs.",
        "customization": "Very high calorie. Consider half rack.",
        "tags": [
          "ribs",
          "highest protein",
          "high calorie"
        ],
        "source": "Chili’s official nutrition PDF"
      },
      {
        "name": "Bacon Ranch Chicken Quesadilla",
        "calories": 1690,
        "protein": 74,
        "description": "Full-size bacon ranch chicken quesadilla.",
        "customization": "Very calorie-dense. Consider splitting.",
        "tags": [
          "chicken",
          "quesadilla",
          "high calorie",
          "high protein"
        ],
        "source": "Chili’s official nutrition PDF"
      }
    ]
  },
  {
    "name": "The Cheesecake Factory",
    "aliases": [
      "cheesecake factory",
      "the cheesecake factory",
      "cheesecake"
    ],
    "note": "Search across SkinnyLicious items plus regular burgers, pastas, chicken dishes, seafood, salads, tacos, and appetizers.",
    "items": [
      {
        "name": "SkinnyLicious Grilled Steak Medallions",
        "calories": 440,
        "protein": 45,
        "description": "Steak medallions from the SkinnyLicious menu.",
        "customization": "One of the better protein-per-calorie options here.",
        "tags": [
          "skinnylicious",
          "steak",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Ahi Poke — Serves 2",
        "calories": 470,
        "protein": 50,
        "description": "Ahi poke appetizer listed as serving 2.",
        "customization": "Strong protein for calories if you eat tuna.",
        "tags": [
          "tuna",
          "appetizer",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Chicken Soft Tacos",
        "calories": 520,
        "protein": 32,
        "description": "Chicken soft tacos from the SkinnyLicious menu.",
        "customization": "Reasonable compared with heavier entrées.",
        "tags": [
          "skinnylicious",
          "chicken",
          "tacos"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Asian Chicken Lettuce Wrap Tacos",
        "calories": 450,
        "protein": 29,
        "description": "SkinnyLicious lettuce wrap tacos with chicken.",
        "customization": "Light enough to feel intentional without feeling sad.",
        "tags": [
          "skinnylicious",
          "chicken",
          "lettuce wraps",
          "lower calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Hamburger",
        "calories": 570,
        "protein": 35,
        "description": "SkinnyLicious hamburger.",
        "customization": "A better burger lane than the full-size versions.",
        "tags": [
          "skinnylicious",
          "burger",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Grilled Turkey Burger",
        "calories": 560,
        "protein": 29,
        "description": "SkinnyLicious grilled turkey burger.",
        "customization": "Moderate calories for a sit-down burger situation.",
        "tags": [
          "skinnylicious",
          "turkey",
          "burger"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Turkey & Avocado Sandwich",
        "calories": 550,
        "protein": 38,
        "description": "SkinnyLicious turkey and avocado sandwich.",
        "customization": "Good protein and very normal-person orderable.",
        "tags": [
          "skinnylicious",
          "turkey",
          "sandwich",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Shrimp Soft Tacos",
        "calories": 520,
        "protein": 31,
        "description": "SkinnyLicious shrimp soft tacos.",
        "customization": "Comparable calories to the chicken tacos with a little seafood switch-up.",
        "tags": [
          "skinnylicious",
          "shrimp",
          "tacos"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Chicken Pasta",
        "calories": 590,
        "protein": 46,
        "description": "Chicken pasta from the SkinnyLicious specialties section.",
        "customization": "Box half if portions feel large. Skip bread if cutting calories.",
        "tags": [
          "skinnylicious",
          "chicken",
          "pasta",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Grilled Salmon",
        "calories": 590,
        "protein": 45,
        "description": "SkinnyLicious grilled salmon entrée.",
        "customization": "A strong seafood pick if you want protein without going pasta mode.",
        "tags": [
          "skinnylicious",
          "salmon",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "SkinnyLicious Lemon-Garlic Shrimp",
        "calories": 550,
        "protein": 32,
        "description": "SkinnyLicious lemon-garlic shrimp entrée.",
        "customization": "Seafood, reasonable calories, and not pretending lettuce is dinner.",
        "tags": [
          "skinnylicious",
          "shrimp",
          "lower calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Tuscan Chicken",
        "calories": 590,
        "protein": 81,
        "description": "Tuscan chicken from the SkinnyLicious/specialties section.",
        "customization": "Very strong protein for the calories.",
        "tags": [
          "chicken",
          "highest protein",
          "skinnylicious"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Kids' Grilled Chicken",
        "calories": 460,
        "protein": 33,
        "description": "Kids' menu grilled chicken.",
        "customization": "Honestly, kids' menu portions can be the move.",
        "tags": [
          "kids menu",
          "chicken",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Kids' Grilled Salmon",
        "calories": 540,
        "protein": 32,
        "description": "Kids' menu grilled salmon.",
        "customization": "Smaller portion, solid protein, still feels like real food.",
        "tags": [
          "kids menu",
          "salmon",
          "high protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Buffalo Wings — Serves 2–4",
        "calories": 1120,
        "protein": 109,
        "description": "Buffalo wings appetizer listed as serving 2–4.",
        "customization": "High protein but meant to share; calories are for the listed serving.",
        "tags": [
          "chicken",
          "appetizer",
          "highest protein",
          "shareable"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Factory Turkey Burger",
        "calories": 940,
        "protein": 49,
        "description": "Full-size Factory Turkey Burger.",
        "customization": "Higher calorie than SkinnyLicious, but useful for comparison.",
        "tags": [
          "turkey",
          "burger",
          "high protein",
          "high calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Classic Burger",
        "calories": 1280,
        "protein": 61,
        "description": "Classic Burger.",
        "customization": "High calorie. Consider splitting or skipping sides.",
        "tags": [
          "burger",
          "high protein",
          "high calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Filet Mignon",
        "calories": 840,
        "protein": 67,
        "description": "Filet mignon entrée.",
        "customization": "High protein. Keep sides simple if you want the total to behave.",
        "tags": [
          "steak",
          "highest protein"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Chicken Madeira",
        "calories": 1300,
        "protein": 89,
        "description": "Chicken Madeira entrée.",
        "customization": "Very high protein, but over 1,000 calories.",
        "tags": [
          "chicken",
          "highest protein",
          "high calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Green Beans",
        "calories": 140,
        "protein": 3,
        "description": "Side of green beans.",
        "customization": "The side dish doing quiet hero work.",
        "tags": [
          "side",
          "vegetable",
          "lower calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Fresh Broccoli",
        "calories": 260,
        "protein": 8,
        "description": "Side of fresh broccoli.",
        "customization": "A higher-calorie veggie side than expected, but still useful.",
        "tags": [
          "side",
          "vegetable"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "French Fries",
        "calories": 1060,
        "protein": 11,
        "description": "Side of French fries.",
        "customization": "Listed because fries happen. Definitely a share-it situation.",
        "tags": [
          "side",
          "fries",
          "high calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Crusted Chicken Romano",
        "calories": 1800,
        "protein": 107,
        "description": "Crusted Chicken Romano entrée.",
        "customization": "Huge protein, huge calories. Box half.",
        "tags": [
          "chicken",
          "highest protein",
          "high calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      },
      {
        "name": "Louisiana Chicken Pasta",
        "calories": 2270,
        "protein": 98,
        "description": "Louisiana Chicken Pasta.",
        "customization": "Very calorie-dense. Split or box half.",
        "tags": [
          "chicken",
          "pasta",
          "high protein",
          "high calorie"
        ],
        "source": "The Cheesecake Factory official nutritional guide"
      }
    ]
  }
];
