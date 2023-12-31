# template-mysql-backend-boilerplate


# Node Server for API - Orders

This Node.js server exposes an API endpoint for retrieving orders from a MySQL database table named `orders`.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Running the Server](#running-the-server)

## Features

- Retrieves orders from the `orders` table.
- Supports optional query parameters `offset` and `limit`.
- Validates parameters and provides default values if invalid.

## Setup

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/your-repo.git

    cd your-repo

    npm install

    npm i swagger-jsdoc
    
    npm i swagger-ui-express
    
    node createdatabase.js

    node index.js



The given problem statement was to create a Backend API to get Zomato orders data for a Mysql database,

as per the problem statement we have to create a backend api which will send the response in form of JSON, by using modular coding approach which contains having different files for the api connection, the database should be handled by another file & all the route should be on index.js file


 ✅GET [http://localhost:8080/api/orders] - Response with an all array of orders(an Object)

 ✅GET [http://localhost:3000//api/orders?limit=4&offset=3] - Response with an array of orders(an Object using two condition limit and offset)

 ✅& Response with status code 500 and Error message come Ex. (Internal server error)

 Swagger API Documentation-
 
 http://localhost:8080/api/orders

 Response 1-
  ```shell
  
  [
  {
    "_id": "d0975326-7b43-479e-a109-cb818abec62d",
    "title": "Chocolate Mousse Torte Cake",
    "description": "Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!"
  },
  {
    "_id": "ebemysql -u root -pd34eb-7533-49f5-91cb-37c12f20d4b1",
    "title": "Triple Chocolate Enrobed Brownie Cake",
    "description": "This is the perfect cake for the true chocolate lover. Our dense, moist brownie cake is covered in not one, but three layers of decadent chocolate. The cake is coated with a rich chocolate fondant icing, showered with dark chocolate shavings and then finally drizzled with milk and dark chocolate glazes. This triple-chocolate delight is sure to satisfy any sweet tooth. Each cake is delivered in an elegant gift box with a chocolate occasion plaque and personalized greeting card to celebrate any occasion."
  },
  {
    "_id": "fb79562d-e470-4445-990b-06aa875d3e97",
    "title": "Reddi Wip Dairy Whipped Topping Extra Creamy Aerosol Refrigerated",
    "description": "Reddi Wip® Extra Creamy Sweetened Dairy Whipped Topping. Milk from cows. Not treated with artificial growth hormone*. Made with real cream. No artificial flavors or sweeteners. 15 calories per 2 tbsp. Ultra-pasteurized."
  },
  {
    "_id": "61c79187-76f6-4747-a5cf-d7e26dcea535",
    "title": "Red Velvet Chocolate Cake",
    "description": "A truly decadent southern classic: two rich layers of red chocolate cake, fill and covered with the finest, pure cream cheese frosting, and then garnished with white chocolate sprinkles around the sides. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!"
  },
  {
    "_id": "b72f5d8e-e586-47cd-aba7-202814ca6609",
    "title": "Rice Dream Original Non-Dairy Beverage Organic",
    "description": "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium & vitamin D. Easy to digest. USDA Organic. Non GMO project."
  },
  {
    "_id": "5ffd3e0b-2a31-4d97-aced-e242b5061b24",
    "title": "Member's Mark Mini Plain Sliced Bagels",
    "description": "Kettle boiled like they do in the Big Apple, these heat-and-serve mini bagels are made with premium ingredients like real yeast and triple-filtered water."
  },
  {
    "_id": "b7399b85-6860-4b86-b169-3dc068d444ae",
    "title": "Daiya Dairy Free Greek Yogurt Black Cherry",
    "description": "Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich & creamy & lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12."
  },
  {
    "_id": "c8d5c1c3-15e8-4112-a043-a0d33a8de28d",
    "title": "Daily Chef Mini Candy Cookies",
    "description": "Delicious mini candy cookies baked fresh in Club."
  },
  {
    "_id": "74835a8d-b17b-4653-b1b1-fc58b4df19b9",
    "title": "So Delicious Cultured Coconut Milk Yogurt Vanilla Dairy & Soy Free Organic",
    "description": "So Delicious® Dairy Free Coconut Milk Yogurt Alternative Vanilla. Made with organic coconut. Net Wt. 5.3 oz (150 g). Certified Vegan. Certified Gluten-Free®."
  },
  {
    "_id": "92de4c84-2f09-43c3-88e2-c0a000b93037",
    "title": "Gaston’s Bakery Small Puff Pastry Squares",
    "description": "Easily create delicious pies, savory hors d’oeuvres, tarts, baklava and more with these ready-to-use puff pastry squares. Puff pastry bakes up light and flaky and pairs perfectly with a wide range of toppings and fillings."
  }
]
 
 Response 2-
 http://localhost:8080/api/orders?limit=4&offset=3
  
  ```shell
  
  [
  {
    "_id": "61c79187-76f6-4747-a5cf-d7e26dcea535",
    "title": "Red Velvet Chocolate Cake",
    "description": "A truly decadent southern classic: two rich layers of red chocolate cake, fill and covered with the finest, pure cream cheese frosting, and then garnished with white chocolate sprinkles around the sides. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!"
  },
  {
    "_id": "b72f5d8e-e586-47cd-aba7-202814ca6609",
    "title": "Rice Dream Original Non-Dairy Beverage Organic",
    "description": "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium & vitamin D. Easy to digest. USDA Organic. Non GMO project."
  },
  {
    "_id": "5ffd3e0b-2a31-4d97-aced-e242b5061b24",
    "title": "Member's Mark Mini Plain Sliced Bagels",
    "description": "Kettle boiled like they do in the Big Apple, these heat-and-serve mini bagels are made with premium ingredients like real yeast and triple-filtered water."
  },
  {
    "_id": "b7399b85-6860-4b86-b169-3dc068d444ae",
    "title": "Daiya Dairy Free Greek Yogurt Black Cherry",
    "description": "Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich & creamy & lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12."
  }
]
 
 
