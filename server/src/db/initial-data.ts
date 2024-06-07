const users = [
    {
        "_id": "6660580d5fa858712df8081b",
        "name": {
            "first": "John",
            "last": "Doe"
        },
        "email": "john.doe@gmail.com",
        "phone": "+972541234567",
        "password": "John1234!",
        "role": 0,
        "favorites": []
    },
    {
        "_id": "6660580d5fa858712df8082b",
        "name": {
            "first": "Jane",
            "last": "Smith"
        },
        "email": "jane.smith@gmail.com",
        "phone": "+972541234568",
        "password": "Jane1234!",
        "role": 0,
        "favorites": []
    },
    {
        "_id": "6660580d5fa858712df8083b",
        "name": {
            "first": "Alice",
            "last": "Johnson"
        },
        "email": "alice.johnson@gmail.com",
        "phone": "+972541234569",
        "password": "Alice1234!",
        "role": 0,
        "favorites": []
    }
]

const recipe = [
    {
        "title": "Neapolitan Pizza Dough",
        "description": "A classic Neapolitan pizza dough recipe that yields a light and airy crust.",
        "user": {
            "firstName": "John",
            "lastName": "Doe",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "4 hours",
            "level": "medium",
            "portions": 4,
            "category": "dough"
        },
        "ingredients": [
            "4 cups '00' flour",
            "1 1/2 cups water",
            "1 tsp salt",
            "1/2 tsp active dry yeast",
            "1 tbsp olive oil"
        ],
        "method": "1. In a large bowl, dissolve the yeast in warm water. Let it sit for about 5 minutes until it becomes frothy. \n2. Add the flour and salt to the yeast mixture. Mix until a rough dough forms. \n3. Transfer the dough to a floured surface and knead for about 10 minutes until it becomes smooth and elastic. \n4. Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise for 2 hours or until it doubles in size. \n5. Punch down the dough to release the air, and divide it into four equal portions. \n6. Shape each portion into a ball, cover with a damp cloth, and let them rest for another 2 hours. \n7. Preheat your oven to its highest setting. \n8. Roll out each dough ball on a floured surface to your desired thickness. \n9. Transfer the dough to a pizza stone or baking sheet, add your favorite toppings, and bake in the preheated oven for 8-10 minutes or until the crust is golden and the toppings are cooked. \n10. Serve hot and enjoy your homemade Neapolitan pizza!",
        "userId": "6660580d5fa858712df8081b"
    },
    {
        "title": "Sourdough Pizza Dough",
        "description": "A tangy and flavorful sourdough pizza dough for a unique twist on the classic.",
        "user": {
            "firstName": "Jane",
            "lastName": "Smith",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "24 hours",
            "level": "hard",
            "portions": 4,
            "category": "dough"
        },
        "ingredients": [
            "4 cups bread flour",
            "1 1/2 cups water",
            "1 cup sourdough starter",
            "2 tsp salt"
        ],
        "method": "1. In a large bowl, mix the sourdough starter and water until combined. \n2. Add the flour and salt to the mixture and stir until a dough forms. \n3. Transfer the dough to a floured surface and knead for 10-15 minutes until smooth and elastic. \n4. Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise for 18-24 hours in a cool place. \n5. Punch down the dough and divide it into four equal portions. \n6. Shape each portion into a ball, cover with a damp cloth, and let them rest for another 2-4 hours. \n7. Preheat your oven to its highest setting. \n8. Roll out each dough ball on a floured surface to your desired thickness. \n9. Transfer the dough to a pizza stone or baking sheet, add your favorite toppings, and bake in the preheated oven for 10-12 minutes or until the crust is golden and the toppings are cooked. \n10. Serve hot and enjoy your tangy sourdough pizza!",
        "userId": "6660580d5fa858712df8081c"
    },
    {
        "title": "Whole Wheat Pizza Dough",
        "description": "A healthier alternative using whole wheat flour for a more nutritious pizza crust.",
        "user": {
            "firstName": "Alice",
            "lastName": "Johnson",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "2 hours",
            "level": "easy",
            "portions": 4,
            "category": "dough"
        },
        "ingredients": [
            "2 cups whole wheat flour",
            "2 cups all-purpose flour",
            "1 1/2 cups water",
            "1 tsp salt",
            "1 tsp active dry yeast",
            "1 tbsp olive oil"
        ],
        "method": "1. In a large bowl, dissolve the yeast in warm water. Let it sit for about 5 minutes until it becomes frothy. \n2. Add the whole wheat flour, all-purpose flour, and salt to the yeast mixture. Mix until a rough dough forms. \n3. Transfer the dough to a floured surface and knead for about 10 minutes until it becomes smooth and elastic. \n4. Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise for 1-2 hours or until it doubles in size. \n5. Punch down the dough to release the air, and divide it into four equal portions. \n6. Shape each portion into a ball, cover with a damp cloth, and let them rest for another 30 minutes. \n7. Preheat your oven to its highest setting. \n8. Roll out each dough ball on a floured surface to your desired thickness. \n9. Transfer the dough to a pizza stone or baking sheet, add your favorite toppings, and bake in the preheated oven for 8-10 minutes or until the crust is golden and the toppings are cooked. \n10. Serve hot and enjoy your whole wheat pizza!",
        "userId": "6660580d5fa858712df8081d"
    },
    {
        "title": "Classic Tomato Sauce",
        "description": "A simple and flavorful tomato sauce perfect for any pizza.",
        "user": {
            "firstName": "John",
            "lastName": "Doe",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "30 minutes",
            "level": "easy",
            "portions": 4,
            "category": "sauce"
        },
        "ingredients": [
            "2 cups canned tomatoes",
            "2 cloves garlic, minced",
            "1 tbsp olive oil",
            "1 tsp salt",
            "1 tsp sugar",
            "1 tsp dried oregano",
            "1 tsp dried basil"
        ],
        "method": "1. In a medium saucepan, heat the olive oil over medium heat. \n2. Add the minced garlic and sauté until fragrant. \n3. Add the canned tomatoes, salt, sugar, oregano, and basil. \n4. Simmer the sauce for 20-30 minutes, stirring occasionally, until it thickens. \n5. Use an immersion blender to puree the sauce to your desired consistency. \n6. Allow the sauce to cool before spreading it on your pizza dough. \n7. Enjoy your homemade tomato sauce on your favorite pizza!",
        "userId": "6660580d5fa858712df8081b"
    },
    {
        "title": "Garlic Parmesan White Sauce",
        "description": "A creamy and rich white sauce made with garlic and Parmesan cheese.",
        "user": {
            "firstName": "Jane",
            "lastName": "Smith",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "20 minutes",
            "level": "medium",
            "portions": 4,
            "category": "sauce"
        },
        "ingredients": [
            "1 cup heavy cream",
            "1/2 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "1 tbsp butter",
            "1 tsp salt",
            "1/2 tsp black pepper",
            "1/4 tsp nutmeg"
        ],
        "method": "1. In a medium saucepan, melt the butter over medium heat. \n2. Add the minced garlic and sauté until fragrant. \n3. Pour in the heavy cream and bring it to a simmer. \n4. Add the grated Parmesan cheese, salt, pepper, and nutmeg. \n5. Stir continuously until the sauce thickens and the cheese is melted. \n6. Remove from heat and allow the sauce to cool slightly before spreading it on your pizza dough. \n7. Enjoy your rich and creamy garlic Parmesan white sauce on your favorite pizza!",
        "userId": "6660580d5fa858712df8081c"
    },
    {
        "title": "Pesto Sauce",
        "description": "A fresh and vibrant pesto sauce made with basil, garlic, and pine nuts.",
        "user": {
            "firstName": "Alice",
            "lastName": "Johnson",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "15 minutes",
            "level": "easy",
            "portions": 4,
            "category": "sauce"
        },
        "ingredients": [
            "2 cups fresh basil leaves",
            "1/2 cup grated Parmesan cheese",
            "1/2 cup olive oil",
            "1/4 cup pine nuts",
            "2 cloves garlic",
            "1 tsp salt",
            "1/2 tsp black pepper"
        ],
        "method": "1. In a food processor, combine the basil leaves, Parmesan cheese, pine nuts, garlic, salt, and pepper. \n2. Pulse until the ingredients are finely chopped. \n3. With the processor running, slowly add the olive oil until the mixture is smooth and creamy. \n4. Adjust seasoning to taste. \n5. Use immediately or store in an airtight container in the refrigerator for up to a week. \n6. Spread the pesto sauce on your pizza dough and enjoy a fresh and flavorful pizza!",
        "userId": "6660580d5fa858712df8081d"
    },
    {
        "title": "Classic Margherita Topping",
        "description": "A traditional Margherita pizza topping with fresh mozzarella, tomatoes, and basil.",
        "user": {
            "firstName": "John",
            "lastName": "Doe",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "10 minutes",
            "level": "easy",
            "portions": 4,
            "category": "topping"
        },
        "ingredients": [
            "1 ball fresh mozzarella, sliced",
            "2-3 ripe tomatoes, sliced",
            "Fresh basil leaves",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        "method": "1. Preheat your oven to its highest setting. \n2. Roll out your pizza dough and spread a thin layer of tomato sauce. \n3. Arrange the sliced mozzarella and tomatoes on top. \n4. Drizzle with olive oil and season with salt and pepper. \n5. Bake in the preheated oven for 8-10 minutes or until the crust is golden and the cheese is melted. \n6. Remove from the oven and garnish with fresh basil leaves. \n7. Serve hot and enjoy your classic Margherita pizza!",
        "userId": "6660580d5fa858712df8081b"
    },
    {
        "title": "Pepperoni and Mushroom Topping",
        "description": "A delicious combination of pepperoni and mushrooms for a savory pizza topping.",
        "user": {
            "firstName": "Jane",
            "lastName": "Smith",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "15 minutes",
            "level": "easy",
            "portions": 4,
            "category": "topping"
        },
        "ingredients": [
            "1 cup sliced pepperoni",
            "1 cup sliced mushrooms",
            "1 ball fresh mozzarella, sliced",
            "1/2 cup tomato sauce",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        "method": "1. Preheat your oven to its highest setting. \n2. Roll out your pizza dough and spread a thin layer of tomato sauce. \n3. Arrange the sliced mozzarella, pepperoni, and mushrooms on top. \n4. Drizzle with olive oil and season with salt and pepper. \n5. Bake in the preheated oven for 10-12 minutes or until the crust is golden and the cheese is melted. \n6. Serve hot and enjoy your pepperoni and mushroom pizza!",
        "userId": "6660580d5fa858712df8081c"
    },
    {
        "title": "Vegetarian Delight Topping",
        "description": "A colorful and healthy vegetarian pizza topping with bell peppers, olives, and onions.",
        "user": {
            "firstName": "Alice",
            "lastName": "Johnson",
            "image": "/profile/placeholder-profile.jpeg"
        },
        "info": {
            "amount": 10,
            "time": "15 minutes",
            "level": "easy",
            "portions": 4,
            "category": "topping"
        },
        "ingredients": [
            "1 cup sliced bell peppers",
            "1/2 cup sliced black olives",
            "1/2 cup sliced red onions",
            "1 ball fresh mozzarella, sliced",
            "1/2 cup tomato sauce",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        "method": "1. Preheat your oven to its highest setting. \n2. Roll out your pizza dough and spread a thin layer of tomato sauce. \n3. Arrange the sliced mozzarella, bell peppers, olives, and red onions on top. \n4. Drizzle with olive oil and season with salt and pepper. \n5. Bake in the preheated oven for 10-12 minutes or until the crust is golden and the cheese is melted. \n6. Serve hot and enjoy your vegetarian delight pizza!",
        "userId": "6660580d5fa858712df8081d"
    }
]


export { users, recipe }