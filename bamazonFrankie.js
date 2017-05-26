/**
 * Created by rpaulin on 5/22/17.
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
        //customerPrompt();
    });


});

