// const db = require("./config/connection");
const inquirer = require("inquirer");
// const Connection = require("mysql2/typings/mysql/lib/Connection");
const queries = require("./queries");
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
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.chosenValue) {
        case "View All Departments":
          queries.viewAllDepartments(actionChoice);
          break;

        case "View All Roles":
          queries.viewAllRoles(actionChoice);
          break;

        case "View All Employees":
          queries.viewAllEmployees(actionChoice);
          break;

        case "Add A Department":
          queries.addDepartment(actionChoice);
          break;

        case "Add A Role":
          queries.addRole(actionChoice);
          break;

        case "Add An Employee":
          queries.addEmployee(actionChoice);
          break;

        default:
          console.log("Nothing chosen");
          break;
      }
    });
}

actionChoice();
