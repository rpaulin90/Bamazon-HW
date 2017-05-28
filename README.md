# Bamazon

This application tries to mimic an Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory. The app can also track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.

The app has three modes of operation: Customer, Manager, Supervisor.

## Bamazon Customer

This mode will let the user view all the products for sale including:

 - Item ID
 - Product Name
 - Department Name
 - Price

The program will then ask the user to enter the ID and the quantity of the product that they want to purchase. If there are enough items to satisfy the user's request. 
The app will show the total cost and update the database by subtracting the ordered quantity from the corresponding item in the database. The user will then be taken back to the beginning and asked what product they want to buy.

<img width="429" alt="customer_mode" src="https://cloud.githubusercontent.com/assets/23643322/26529419/2c2d4488-4385-11e7-8783-fabb66a29626.png">

<img width="625" alt="updated_table_customer_mode" src="https://cloud.githubusercontent.com/assets/23643322/26529422/3055339a-4385-11e7-8fa5-f3aa338d56f7.png">

## Bamazon Manager

This mode will give a list of options to the user:

- View Products for Sale
- View Low Inventory
- Add to Inventory
- Add New Product

Depending on what option is selected, the app will display products or modify the database accordingly.

<img width="446" alt="manager_mode" src="https://cloud.githubusercontent.com/assets/23643322/26529487/30852630-4386-11e7-81fb-1533098946ca.png">

### View Products for Sale

<img width="676" alt="view_products_managerMode" src="https://cloud.githubusercontent.com/assets/23643322/26529548/62cd01de-4387-11e7-91cc-eaf911f81d18.png">

### View Low Inventory

<img width="652" alt="view_low_inventory" src="https://cloud.githubusercontent.com/assets/23643322/26529567/b3452830-4387-11e7-9c8b-38cc75e6e513.png">

### Add to Inventory

<img width="591" alt="add_to_inventory" src="https://cloud.githubusercontent.com/assets/23643322/26529574/d36c2a46-4387-11e7-9c26-1d69203e5f54.png">

<img width="641" alt="add_to_inventory_table" src="https://cloud.githubusercontent.com/assets/23643322/26529583/eb08b62e-4387-11e7-9ea7-d957a1db7ef3.png">

### Add New Product

<img width="596" alt="add_new_product" src="https://cloud.githubusercontent.com/assets/23643322/26529603/595f3710-4388-11e7-9a18-30e527dce50f.png">

<img width="629" alt="add_new_product_table" src="https://cloud.githubusercontent.com/assets/23643322/26529605/7213ff7a-4388-11e7-945e-d5ac6bac3a0c.png">

## Bamazon Superviser

This mode will let the user look at another table called "departments", which includes information about the different departments in the store, like:

- department ID
- department name
- overhead costs
- total sales

From this mode, the user is given two options:

- View Product Sales by Department
- Create New Department

As the names of the options imply, the user can either look at how each product is doing in terms of sales and profit or add a new department to the store.

### View Product Sales by Department
<img width="577" alt="product_sales" src="https://cloud.githubusercontent.com/assets/23643322/26529636/2cf781ae-4389-11e7-95b5-e9852710f8b0.png">

### Create New Department
<img width="561" alt="create_new_department" src="https://cloud.githubusercontent.com/assets/23643322/26529641/397a83fe-4389-11e7-84e8-5cdbf4af97f8.png">

The new department "clothing" has been added.
<img width="374" alt="departments_table" src="https://cloud.githubusercontent.com/assets/23643322/26529642/418758ec-4389-11e7-9eac-4f04242a293d.png">
