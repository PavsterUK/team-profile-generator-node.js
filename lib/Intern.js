const Employee = require("./Employee");

class Intern extends Employee {
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

  static promptQuestions() {
    const internPromptQuestions = [
      {
        type: "input",
        name: "school",
        message: `Enter Intern's school name.`,
      },
    ];
    return Employee.prompt("Intern", internPromptQuestions);
  }
}

module.exports = Intern;
