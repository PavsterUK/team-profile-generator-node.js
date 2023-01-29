const Employee = require("./Employee");
const internQuestions = [
  {
    type: "input",
    name: "school",
    message: `Enter Intern's school name.`,
  },
];

class Intern extends Employee {
  static init() {
    return super.init("Intern", internQuestions, Intern);
  }

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getschool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  static prompt() {
    return Employee.prompt("Intern", internQuestions);
  }
}

module.exports = Intern;
