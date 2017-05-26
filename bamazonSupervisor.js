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
    start();

});

var start = function(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Product Sales by Department",
            "Create New Department"
        ]
    }).then(function(answer) {

        if(answer.action == "View Product Sales by Department"){

            salesByDepartment();

        }
        else if(answer.action == "Create New Department"){

            newDepartment();

        }

    });
};

var salesByDepartment = function(){
    connection.query("SELECT department_id,department_name,over_head_costs,total_sales as product_sales,(total_sales-over_head_costs) as total_profit FROM departments",function(err,res){

        console.table(res);

        start();

    });
};


var newDepartment = function(){

    inquirer.prompt([

        {
            type: "input",
            message: "Enter department name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Enter department over head costs: ",
            name: "over_head"
        }

    ]).then(function(new_department) {

        connection.query("INSERT INTO departments SET ?", {
            department_name: new_department.name,
            over_head_costs: new_department.over_head,
            total_sales: 0
        }, function (err, res) {
            console.log(new_department.name + " has been added to the departments table");
            start();
        });
    });

};

