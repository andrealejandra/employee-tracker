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
                    startTracker();
                    break;
                default:
                    console.log("Signing out of Employee Tracker.");
                    connection.end();
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
            name: "managerId",
            type: "input",
            message: "Enter their manager's ID number.",
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
                    role_id: answer.roleId,
                    manager_id: answer.managerId
                }
            );
            connection.query("INSERT INTO role SET ?",
                {
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
        console.log("Successfully added " +(answer.firstName)+ ".");
        startTracker();
    });
};

function viewDirectory() {
    //have choices correspond to USING columns
    connection.query("SELECT * FROM employee", (err, results) => {
        if (err) throw err;
        console.log("Current Employees:");
        console.table(results);
        startTracker();
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
                }
            ])   
            .then (answer => {
                connection.query ("SELECT * FROM employee WHERE ?", {})
            })
            },
            inquirer.prompt([
                {
                    name: "role",
                    type: "input",
                    message: "What is their new role?",
                },
                {
                    name: "roleId",
                    type: "input",
                    message: "What is their new role ID number?",
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is their new salary?",
                },
                {
                    name: "department",
                    type: "input",
                    message: "What is their new department?",
                },
                {
                    name: "departmentId",
                    type: "input",
                    message: "What is their new department ID number?",
                },
                {
                    name: "managerId",
                    type: "input",
                    message: "What is their new manager's ID number?",
                },
            ])
                .then(answer => {
                    connection.query(
                        "UPDATE employee SET ? WHERE ?",
                        [
                            {
                            role_id: answer.roleId
                            },
                            {
                            manager_id: answer.manager_id
                            },
                        ],
                    connection.query("UPDATE role SET ? WHERE ?",
                        [
                            {
                            title: answer.role
                            },
                            {
                            salary: answer.salary
                            },
                            {
                            department_id:answer.departmentId
                            },
                        ]),
                        connection.query("UPDATE department SET ? WHERE ?",
                            {
                            name: answer.department
                            }
                            ),
                        function (error) {
                            if (error) throw err;
                            console.log("Employee profile is updated.");
                        }
                    );
                })
        )};