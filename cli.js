var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    password: "HOSA2013!",
    database: "employee_trackerDB"
});


connection.connect(err => {
    if (err) throw err;
    startTracker();
});

function startTracker() {
    inquirer.prompt([
        {
            name: "start",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add to company directory", "View company directory", "Update company directory", "EXIT"]
        }
    ])
        .then(answer => {
            switch (answer.start) {
                case "Add to company directory":
                    addNew();
                    break;
                case "View company directory":
                    viewDirectory();
                    break;
                case "Update company directory":
                    updateDirectory();
                    break;
                case "EXIT":
                    connection.end();
                default:
                    startTracker();

            }
        })
};

function addNew() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Enter the employee's first name."
        },
        {
            name: "lastName",
            type: "input",
            message: "Enter the employee's last name.",
        },
        {
            name: "role",
            type: "input",
            message: "What is their role?",
        },
        {
            name: "roleId",
            type: "input",
            message: "Enter a role ID number.",
        },
        {
            name: "salary",
            type: "input",
            message: "Enter their salary.",
        },
        {
            name: "manager",
            type: "input",
            message: "Who is their manager?",
        },
        {
            name: "department",
            type: "input",
            message: "What is their department?",
        },
        {
            name: "departmentId",
            type: "input",
            message: "Enter a department ID number.",
        }
    ])
        .then(answer => {
            connection.query("INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    title: answer.role,
                    manager_id: answer.manager
                }
            );
            connection.query("INSERT INTO role SET ?",
                {
                    department: answer.department,
                    title: answer.role,
                    salary: answer.salary,
                    department_id: answer.departmentId
                }
            );
            connection.query("INSERT INTO department SET ?",
                {
                    name: answer.department,
                }
            );
        });
};

function viewDirectory() {
    //have choices correspond to USING columns
    connection.query("SELECT * FROM employees", (err, results) => {
        if (err) throw err;
        console.table(results);
    });
};

    function updateDirectory() {

        connection.query("SELECT * FROM employee WHERE ?", [first_name, last_name, id], (err, results) => {
            if (err) throw err;
            inquirer.prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: () => {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].item_name);
                        }
                        return choiceArray;
                    }
                },
                {
                    name: "lastName",
                    type: "input",
                    message: "Enter the employee's last name.",
                },
                {
                    name: "role",
                    type: "input",
                    message: "What is their role?",
                },
                {
                    name: "department",
                    type: "input",
                    message: "What is their department?",
                }
            ])
                .then(answer => {
                    connection.query(
                        "UPDATE employee SET ? WHERE ?",
                        [
                            {
                            department: answer.department
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Added new employee profile.");
                            startTracker();
                        }
                    );
                })
        }
        )};