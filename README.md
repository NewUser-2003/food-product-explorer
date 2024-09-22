         *******************************************   Food Product Explorer   *********************************************

         

Food Product Explorer is a React web application that integrates with the OpenFoodFacts API to explore and search for food products. Users can search by category, product name, or barcode, view detailed information about food products, and manage a shopping cart.



-------FEATURES--------

 Homepage:

  -Displays a list of food products fetched from the OpenFoodFacts API.
  -Shows product name, image, category, ingredients (if available), and nutrition grade.
  -Implements pagination (infinite scroll or load more functionality).

 Search Functionality:

  -A search bar filters products by name.
  -Barcode search functionality allows users to find products using the barcode.

 Category Filter:

  -A dropdown or sidebar filter lets users filter products by category (e.g., beverages, dairy, snacks).
  -Categories are fetched dynamically from the OpenFoodFacts API.

 Sort Functionality:

   Allows sorting of the product list by:
    -Product name (A-Z, Z-A).
    -Nutrition grade (ascending/descending).

 Product Detail Page:

   Shows the full details of the selected product, including:
    -Product image.
    -Full list of ingredients.
    -Nutritional values (energy, fat, carbs, proteins).
    -Labels (vegan, gluten-free).

 Cart Functionality:

  -Users can add products to a cart and manage quantities.
  -Items can be removed from the cart.
  -The cart is available on a dedicated cart page.




---------TECHNOLOGIES USED---------

 Frontend:

  -React.js (functional components, hooks).
  -React Router for navigation.
  -Tailwind CSS for styling and responsiveness.

 Backend:

  -Integration with the OpenFoodFacts API to fetch product data.




---------FOLDER STRUCTURE----------

  .
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Cart.js
│   │   └── ...
│   ├── context
│   │   ├── CartContext.js
│   │   └── ProductContext.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── ProductPage.js
│   │   └── ...
│   ├── utils
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md




-------------   Steps Followed in Development   -------------

1. React Project Setup

  -Set up the project using Create React App.
  -Organized the project structure with components, context, pages, and utils directories.

2. Integrated the OpenFoodFacts API

  -Used fetch API to retrieve product data from OpenFoodFacts in api.js.
  -Created functions for:
      -Fetching products by category.
      -Searching products by name.
      -Fetching product details by barcode.

3. Context API for State Management

  -Created a ProductContext for managing product state:
      -Holds products and filters (category, search) in the state.
      -setProducts and setFilters were used to update the state.

  -Created a CartContext for managing cart state:
      -Holds cart items and manages adding/removing products.
      -addToCart increases product quantity if it's already in the cart, otherwise adds the product.
      -removeFromCart removes items from the cart by barcode.

4. Component Development

  -Home Page:
      -Displays a list of products.
      -Allows filtering by category and searching by name.
      -Fetches products using API calls and displays them dynamically.

  -Product Page:
      -Displays detailed information for a product using the barcode.
      -Fetches data from the OpenFoodFacts API.

  -Cart Component:
      -Displays items in the cart with options to remove products.

5. Routing with React Router

  -Set up React Router to handle page navigation:
      -Home page (/).
      -Product detail page (/product/:barcode).
      -Cart page (/cart).
    
6. State Management

  -We created two contexts using React Context API:
       -ProductContext: To manage the product list, search filters, and sort functionality.
       -CartContext: To manage cart items, including adding and removing products from the cart.

7. Styling with Tailwind CSS

      -Added Tailwind CSS for fast and responsive styling.
      -Ensured mobile-first design and responsiveness across various screen sizes.

8. Error Handling

  -Added error handling for network/API failures using try/catch in fetch functions.
  -Provided user-friendly error messages if API calls fail.

9. Debugging

  -Resolved issues with fetching product data by barcode.
  -Fixed state management issues, including ensuring setProducts was properly defined and used.
  -Debugged React Router path issues to ensure correct navigation.




-----------Time Taken-----------

 Total Time Taken: ~7 hours

   -Initial setup and folder structure: 1 hour.
   -API integration and context setup: 3.5 hours.
   -UI/UX implementation and styling: 1 hour.
   -Testing, debugging, and final touches: 1.5 hour.
