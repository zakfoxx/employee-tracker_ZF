const inquirer = require("inquirer");
const db = require("./config/connection.js");

function viewAllDepartments(next) {
  db.query("SELECT * FROM department", function (error, results) {
    console.table(results);
    next();
  });
}
function viewAllRoles(next) {
  db.query("SELECT * FROM role", function (error, results) {
    console.table(results);
    next();
  });
}

function viewAllEmployees(next) {
  db.query("SELECT * FROM employee", function (error, results) {
    console.table(results);
    next();
  });
}

function addDepartment(next) {
  inquirer
    .prompt([
      {
        name: "newDept",
        message: "What is the name of the new department?",
      },
    ])
    .then((answer) => {
      var sql = "INSERT INTO department SET ?";
      var values = answer.newDept;
      console.log("here", answer);
      db.query(sql, { name: values }, function (err, result) {
        if (err) throw err;
        console.log(
          answer.newDept +
            " has been successfully added to the list of departments."
        );
        next();
      });
    });
}

function addRole(next) {
  inquirer
    .prompt([
      {
        name: "title",
        message: "What is the title of the new role?",
      },
      {
        name: "salary",
        message: "What is the salary of the new role?",
      },
      {
        name: "department_id",
        message: "What is the department ID?",
      },
    ])
    .then((answer) => {
      var sql = "INSERT INTO role SET ?";
      db.query(sql, answer, function (err, result) {
        if (err) throw err;
        console.log(
          answer.title + " has been successfully added to the list of roles."
        );
        next();
      });
    });
}

function addEmployee(next) {
  inquirer
    .prompt([
      {
        name: "first_name",
        message: "What is the first name of the new employee",
      },
      {
        name: "last_name",
        message: "What is the last name of the new employee?",
      },
      {
        name: "role_id",
        message: "What is the role ID of the new employee?",
      },
      {
        name: "manager_id",
        message: "What is the manager ID of the new employee?",
      },
    ])
    .then((answer) => {
      var sql = "INSERT INTO employee SET ?";
      db.query(sql, answer, function (err, result) {
        if (err) throw err;
        console.log(
          answer.first_name +
            " has been successfully added to the list of employees."
        );
        next();
      });
    });
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
};
