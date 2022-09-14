const db = require("/connection");
const inquirer = require("inquirer");
const Connection = require("mysql2/typings/mysql/lib/Connection");
const viewAllDepartments = require("./queries");
// const viewAllDepartments = require("./queries.js");

// view all departments - view all roles - view all employees - add a department - add a role - add an employee - update an employee

function actionChoice() {
  console.log("enter function");
  inquirer
    .prompt([
      {
        type: "list",
        name: "chosenValue",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Role",
          "Add An Employee",
          "Update An Employee",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.chosenValue) {
        case "View All Departments":
          viewAllDepartments();
          break;
        default:
          console.log("Nothing chosen");
          break;
      }
    });
}

actionChoice();
