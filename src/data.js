

function data() {

    return {
        "Ingredients":[
            {
                Name: "Garlic",
                Type: "Spice",
                Variety:"" ,
                Quantity: 6,
                Measure: "Unit"
            },
            {
                Name: "Potatoes",
                Type: "Vegetable",
                Variety:"Red" ,
                Quantity: 12,
                Measure: "Unit"
            },
            {
                Name: "Salt", 
                Type: "Spice",
                Variety:"Coarse Salt",
                Quantity: 1,
                Measure: "Kilograms"
            },
        ],
        "Recipes":[
            {
                Name: "Mac and Cheese",
                Ingredients:[
                    "⅓ cup dried elbow macaroni",
                    "½ cup water",
                    "2 tablespoons whole milk",
                    "½ teaspoon cornstarch",
                    "¼ teaspoon kosher salt",
                    "¼ teaspoon freshly ground black pepper",
                    "¼ cup grated sharp cheddar cheese"
                ],
                Recipe: [
                    "In a microwave-safe mug or bowl, combine the macaroni and water. Microwave for 1 minute, stir the pasta, then microwave for another minute. Stir the pasta again and taste for doneness. If not al dente, continue microwaving in 1-minute intervals until the water is absorbed and the pasta is cooked.",
                    "In a small bowl, whisk together cornstarch, milk, salt, and pepper until well combined. Add the cheese, then pour over the macaroni. Microwave for 1 minute, stirring halfway through, until the cheese is melted and the sauce is creamy. ",
                ],
                Calories: 500,
                Tags: 
                ["Vegetarian", "Lactose", "Pasta", ],
                Meal: "Lunch or Dinner",
                Serving: 1,
                Duration: 8,
                Difficulty: "Easy",
                Image:"https://pinchofyum.com/wp-content/uploads/2014/02/healthy-mac-and-cheese-51.jpg"
            },
            {
                Name: "Meatballs and Rice",
                Ingredients:[
                    "2 tsp olive oil",
                    "1 onion, peeled and chopped",
                    "500 g beef mince",
                    "800 g pack basics chopped tomatoes",
                    "350 g frozen chopped spinach",
                    "black pepper, to season",
                    "400 g easy-cook rice",
                    "1 tbsp fresh parsley, washed and chopped (optional)"

                ],
                Recipe: [
                    "In a large, lidded frying pan, heat 1 teaspoon of the olive oil, then add the onion. Soften for 5 minutes and remove from the pan.",
                    "In a large bowl, combine the beef mince with half the cooked onion and mix well. Shape the mince mixture into approximately 20 meatballs. Using the same frying pan, heat the remaining oil and fry the meatballs in batches, until browned. Remove from the pan and set aside.",
                    "Carefully wipe the pan with kitchen towel to remove any excess liquid, then add the remaining onion along with the chopped tomatoes and spinach. Season well, cover and simmer for 5 minutes, until the spinach has defrosted. Remove the lid from the pan, then add the meatballs and cook for a further 10 minutes, until piping hot throughout and no pink colour remains in the meatballs.",
                    "Meanwhile, cook the rice following pack instructions. Serve the meatballs on a bed of rice. Garnish with parsley.",
                ],
                Calories: 700,
                Tags:
                ["Meat",],
                Meal: "Lunch or Dinner",
                Serving: 4,
                Duration: 65,
                Difficulty: "Medium",
                Image:"https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2335/letterbox_Saucy-meatballs-with-rice-593.jpg"
            },
            {
                Name: "Pancakes",
                Ingredients:[
                    "100g plain flour",
                    "2 large eggs",
                    "300ml milk",
                    "1 tbsp sunflower or vegetable oil, plus a little extra for frying",
                    "lemon wedges to serve (optional)",
                    "caster sugar to serve (optional)"
                ],
                Recipe: [
                    "Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.",
                    "Set aside for 30 mins to rest if you have time, or start cooking straight away.",
                    "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.",
                    "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.",
                    "Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
                ],
                Calories: 200,
                Tags:
                ["Vegetarian", "Lactose"],
                Meal: "Breakfast or Brunch",
                Serving: 2,
                Duration: 15,
                Difficulty: "Medium",
                Image:"https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg"
            }
        ]
    }
}

export default data;