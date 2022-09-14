const db = require("./connection.js");
function viewAllDepartments() {
  console.log("Working until here");
  console.log(`\n\n\n----------------------\n\n\n`);

  db.query("SELECT * FROM department", function (error, results) {
    console.log(`Yessir we workin \n\n\n\n`);
    console.log(results);
  });
}
module.exports = viewAllDepartments;
