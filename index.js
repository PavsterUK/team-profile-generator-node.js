const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];

const employeeTypes = {
  Manager,
  Engineer,
  Intern,
};

function addEmployee(role) {
  const employeeClass = employeeTypes[role];
  return employeeClass.init();
}

function createTeam() {
  let nonManagerRoles = [...Object.keys(employeeTypes)];
  nonManagerRoles.shift(); //Remove Manager from the list.

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What employee would you like to add?",
        choices: [...nonManagerRoles, "Exit prompt"],
      },
    ])
    .then((answer) => {
      if (answer.role !== "Exit prompt") {
        addEmployee(answer.role).then((employee) => {
          team.push(employee);
          createTeam();
        });
      } else {
        saveHTML(outputPath, render(team));
      }
    });
}

function saveHTML(outputPath, html) {
  fs.mkdir(OUTPUT_DIR, { recursive: true }, (error) => {
    if (error) {
      console.error(`Failed to create directory: ${error}`);
      return;
    }
    fs.writeFile(outputPath, html, (error) => {
      if (error) {
        console.error(`Failed to write to file: ${error}`);
        return;
      }
      console.log(`File saved successfully: ${outputPath}`);
    });
  });
}

function init() {
  addEmployee("Manager").then((manager) => {
    team.push(manager);
    createTeam();
  });
}

init();
