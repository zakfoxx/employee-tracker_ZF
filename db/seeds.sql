INSERT INTO department (name)
VALUES
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");

  INSERT INTO role (title, salary, department_id)
VALUES
  ("Sales Manager", 125000, 1),
  ("Sales Representative", 100000, 1), 
  ("Account Manager", 125000, 3),
  ("Accountant", 100000, 3),
  ("Senior Engineer", 125000, 2),
  ("Junior Engineer", 100000, 2),
  ("Legal Team Lead", 150000, 4),
  ("Lawyer", 125000, 4);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("John","Doe", 1, null),
  ("Bob","Smith", 2, 1), 
  ("Lisa","Simpson", 3, null),
  ("Tony","Hawk", 4, 3),
  ("George","Washington", 5, null),
  ("Tommy","Pickles", 6, 5),
  ("Saul","Goodman", 7, null),
  ("Jesse","Pinkman", 8, 7);