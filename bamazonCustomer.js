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

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT id,product_name,price FROM products", function(err, res) {
    console.table(res);
        customerPrompt();
    });

});

var customerPrompt = function(){

    connection.query("SELECT * FROM products", function(err, res) {

        if(err){
            console.log(err);
        }

        inquirer.prompt([

            {
                type: "input",
                message: "Enter the id of the product you would like to buy: ",
                name: "product_id"
            },
            {
                type: "input",
                message: "Enter the quantity: ",
                name: "product_quantity"
            }

        ]).then(function(purchase) {
            var index;
            var id = purchase.product_id;
            for(var x = 0; x < res.length; x++){

                if(res[x].id == id){
                    index = x;
                }
            }
            var product = res[index];

            if(product.stock_quantity < purchase.product_quantity){
                console.log("Aaaw snap! Insufficient quantity in stock! You could try purchasing less items maybe?");
                customerPrompt();
            }
            else{
                var totalCost = product.price * purchase.product_quantity;
                var newQuantity = product.stock_quantity - purchase.product_quantity;
                var newTotalSales = parseFloat(product.product_sales) + parseFloat(totalCost);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: newQuantity,
                    product_sales: newTotalSales
                }, {
                    id: id
                }], function(err, res) {
                    if(err){
                        return console.log(err);
                    }
                    console.log("Your total cost is: " + totalCost);
                    connection.query("SELECT * FROM departments", function(error, response) {
                        if(error){
                            console.log(error);
                        }
                        var indexDepartment;
                        for(var z = 0; z < response.length; z++){

                            if(response[z].department_name == product.department_name){
                                indexDepartment = z;
                            }
                        }
                        var department = response[indexDepartment];
                        connection.query("UPDATE departments SET ? WHERE ?", [{
                            total_sales: parseFloat(department.total_sales) + parseFloat(totalCost)
                        }, {
                            department_name: product.department_name
                        }], function (err, res) {
                            if (err) {
                                return console.log(err);
                            }
                            console.log("updated department sales...");
                            customerPrompt();
                        });
                    });

                });
            }

        });

    });


};