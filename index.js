const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

function inquireManager() {
  return inquirer.prompt(Manager.promptQuestions());
}

function inquireEngineer() {
  return inquirer.prompt(Engineer.promptQuestions());
}

function inquireIntern() {
  return inquirer.prompt(Intern.promptQuestions());
}

function init() {
  inquireManager().then((result) => console.log(result));
}

init();
