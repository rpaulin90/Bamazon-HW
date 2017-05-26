/**
 * Created by rpaulin on 5/19/17.
 */

var inquirer = require("inquirer");

var mysql = require("mysql");

require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    start();
});

var start = function() {

        var optionsArray = ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"];

        inquirer.prompt([

            {
                type: "list",
                message: "what would you like to do?",
                choices: optionsArray,
                name: "option"
            }

        ]).then(function (answer) {
            if (answer.option === "View Products for Sale") {
                productsForSale();
            }
            else if (answer.option === "View Low Inventory") {
                lowInventory();
            }
            else if (answer.option === "Add to Inventory") {

                addToInventory();
            }
            else if (answer.option === "Add New Product") {

                addNewProduct();
            }

        });
};

var productsForSale = function(){
    connection.query("SELECT * FROM products", function(err, res) {
        // for (var i = 0; i < res.length; i++) {
        //     console.log(res[i].id + " | " + res[i].product_name + " | " + "Price: $" + res[i].price + " | " + "Units in Stock: " + res[i].stock_quantity + " | " + "\n" + "-----------------------------------" + "\n");
        // }

        console.table(res);

        start();
    });
};

var lowInventory = function(){

    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {


        if(res.length > 0) {
            // console.log(res[i].id + " | " + res[i].product_name + " | " + "Price: $" + res[i].price + " | " + "Units in Stock: " + res[i].stock_quantity + " | " + "\n" + "-----------------------------------" + "\n");
            console.table(res);
        }

        else{

            console.log("Good news, boss, there are no items with less than 5 units in stock.");

        }
        start();
    });

};

var addToInventory = function(){
    connection.query("SELECT id,product_name,stock_quantity FROM products", function(err, res) {

        console.table(res);

        // for (var i = 0; i < res.length; i++) {
        //     console.log(res[i].id + " | " + res[i].product_name + " | " + "Units in Stock: " + res[i].stock_quantity + " | " + "\n" + "-----------------------------------" + "\n");
        // }

        inquirer.prompt([

            {
                type: "input",
                message: "Enter the id of the product you would like to modify: ",
                name: "product_id"
            },
            {
                type: "input",
                message: "Enter the quantity that you would like to add to the inventory: ",
                name: "additional_units"
            }


        ]).then(function(response) {
            var index;
            var id = response.product_id;
            var unitsToadd = parseInt(response.additional_units);
            for(var x = 0; x < res.length; x++){

                if(res[x].id == id){
                    index = x;
                }

            }

            var product = res[index];
            var newTotal = parseInt(product.stock_quantity) + unitsToadd;
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newTotal
            }, {
                id: id
            }], function (err, res) {
                console.log(unitsToadd + " units have been added to " + product.name + "\n" + "Updated total units: " + newTotal);

                start();
            });

        });
    });

};

var addNewProduct = function(){
    inquirer.prompt([

        {
            type: "input",
            message: "Enter name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Enter department: ",
            name: "department"
        },
        {
            type: "input",
            message: "Enter price: ",
            name: "new_price"
        },
        {
            type: "input",
            message: "Enter stock quantity: ",
            name: "quantity"
        }


    ]).then(function(response) {

        connection.query("INSERT INTO products SET ?", {
            product_name: response.name,
            department_name: response.department,
            price: response.new_price,
            stock_quantity: response.quantity
        }, function(err, res) {
            console.log(response.name + " has been added to the database");
            start();
        });

    });

};

