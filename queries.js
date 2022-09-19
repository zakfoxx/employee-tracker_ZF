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
module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
};
