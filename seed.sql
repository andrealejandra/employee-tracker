DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

-- role codes--
-- mgmt - 11
-- sales - 22
-- dev engineer - 33
-- customer support - 44
-- hr - 55

-- creating a starting set of employee data--

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Amber", "Stein", 44, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Silas", "Davie", 55, 1);

---
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tasha", "Martin", 11, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rumaysa","Ramsay", 11, NULL);
---
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Suhail", "Alford", 22, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jamal", "England", 22, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alessia", "Campos", 33, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maude", "Byers", 33, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jaeden", "Farrell", 44, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ellis", "Hart", 44, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oliver", "Pacheco", 55, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sadie", "Trey", 22, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gwendolyn", "Viada", 33, 1);

-- role data --

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Support", 35000, 200);

INSERT INTO role (title, salary, department_id)
VALUES ("HR", 70000, 100);

---
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 65000, 110);

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 95000, 110);
---
INSERT INTO role (title, salary, department_id)
VALUES ("Sales", 45000, 220);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales", 55000, 220);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 80000, 300);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 80000, 300);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Support", 35000, 200);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Support", 35000, 200);

INSERT INTO role (title, salary, department_id)
VALUES ("HR", 70000, 100);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales", 60000, 220);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 80000, 300);

-- department data --


INSERT INTO department (name)
VALUES ("Customer Experience");

INSERT INTO department (name)
VALUES ("Internal Support");

---
INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("Management");
---
INSERT INTO department (name)
VALUES ("Customer Experience");

INSERT INTO department (name)
VALUES ("Customer Experience");

INSERT INTO department (name)
VALUES ("Internal Support");

INSERT INTO department (name)
VALUES ("Internal Support");

INSERT INTO department (name)
VALUES ("Customer Experience");

INSERT INTO department (name)
VALUES ("Customer Experience");

INSERT INTO department (name)
VALUES ("Internal Support");

INSERT INTO department (name)
VALUES ("Customer Experience");

INSERT INTO department (name)
VALUES ("Internal Support");