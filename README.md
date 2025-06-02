Documentation: Product Display & Cart Functions
===============================================

Global Variable
---------------

`products`: An array containing all product objects used throughout the project.

1\. `DisplayProducts(category = "all")`
---------------------------------------

Displays product cards in the HTML container with the ID `ProductList`. It filters products based on the specified `category` or shows all products if `category` is "all".

*   Clears the current product list container.
*   Filters `products` by category.
*   Creates and appends product cards dynamically with image, name, price, and "Add to Cart" button.

2\. `filterByCategory(category)`
--------------------------------

A helper function that calls `DisplayProducts` with the provided category, effectively filtering the displayed products.

3\. `AddCart(productId)`
------------------------

Adds a product to the cart stored in `localStorage`. If the product already exists in the cart, it increments its quantity by 1.

*   Retrieves the current cart or initializes an empty array.
*   Checks if product is already in the cart; updates quantity or adds new product object.
*   Saves updated cart back to `localStorage`.
*   Shows a success alert.

4\. Cart Modal Initialization & Open Event
------------------------------------------

Initializes a Bootstrap 5 modal with the ID `cartModal`, and binds the button with ID `openCartBtn` to open the cart modal and render cart items.

5\. `renderCartItems()`
-----------------------

Renders the list of products currently in the cart inside the container with ID `cartItemsContainer`.

*   If the cart is empty, shows a message "Your cart is empty."
*   For each cart item, creates a list group item showing product image, name, total price, quantity controls, and remove button.
*   Quantity controls allow incrementing or decrementing product quantity.

6\. `RemoveOne(ProductId)`
--------------------------

Decreases the quantity of the specified product in the cart by 1. If quantity reaches zero, removes the product from the cart.

*   Updates the cart in `localStorage`.
*   Re-renders the cart items.

7\. `UpdateOne(ProductId)`
--------------------------

Increases the quantity of the specified product in the cart by 1.

*   Updates the cart in `localStorage`.
*   Re-renders the cart items.

8\. `removeFromCart(productId)`
-------------------------------

Removes the specified product completely from the cart regardless of quantity.

*   Updates the cart in `localStorage`.
*   Re-renders the cart items.

9\. `showAlert(message, type = "success")`
------------------------------------------

Displays a Bootstrap alert message at the top of the page inside the container with ID `alert-container`.

*   `message`: The text to display.
*   `type`: Bootstrap alert type like "success" or "danger" (default is "success").
*   The alert auto-hides after 3 seconds.

10\. `window.onload = DisplayProducts("all")`
---------------------------------------------

Calls `DisplayProducts` with the default category "all" when the window loads, so all products are displayed initially.
