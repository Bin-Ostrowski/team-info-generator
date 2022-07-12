const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/Team');
const fs = require('fs');
const path = require('path');

const teamArr = [];

function start() {

    inquirer.prompt(
            [{
                    //run manager prompt function ? managerPrompts();
                    type: 'text',
                    name: 'name',
                    message: "Enter the team manager's name."
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter the team manager's ID."
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Enter the team manager's email."
                },
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: "Enter the team manager's office number."
                }
            ])
        //then return responses into an object. 
        //descructure the inputs from prompt object
        .then((res) => {
            const manager = new Manager(res.name, res.id, res.email, res.officeNumber)
            teamArr.push(manager)
            menu()
        });
}

//nextEmployee = function() {
function menu() {
    inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'Would you like to add an engineer, add an intern or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building your team']
        })
        .then((choice) => {
            if (choice.menu === 'Add Engineer') {
                //run prompts to add engineer
                newEngineer();
            } else if (choice.menu === 'Add Intern') {
                //run prompts to add intern
                newIntern();
            } else {
                buildEmployee();
            };
        });
};

//engineer prompts
function newEngineer() {
    inquirer.prompt([{
            type: 'text',
            name: 'name',
            message: "Enter the engineer's name."
        }, {
            type: 'text',
            name: 'id',
            message: "Enter the engineer's ID."
        }, {
            type: 'text',
            name: 'email',
            message: "Enter the engineer's email."
        }, {
            type: 'text',
            name: 'github',
            message: "Enter the engineer's GitHub username."
        }])
        .then(({name, id,email, github}) => {
            const engineer = new Engineer(name, id, email, github)
            teamArr.push(engineer)
            //prompt next employee
            menu();
        });
};

function newIntern() {
    inquirer.prompt([{
            type: 'text',
            name: 'name',
            message: "Enter the intern's name."
        }, {
            type: 'text',
            name: 'id',
            message: "Enter the intern's ID."
        }, {
            type: 'text',
            name: 'email',
            message: "Enter the intern's email."
        }, {
            type: 'text',
            name: 'school',
            message: "Enter the intern's school."
        }])
        .then(({name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);
            teamArr.push(intern);
            //prompt menue
           menu();
        });
};

function buildEmployee(){
    fs.writeFileSync(path.join(path.resolve(__dirname, 'dist'), 'index.html'), generateHTML(teamArr));
};

start();