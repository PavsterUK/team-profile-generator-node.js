const validator = require("validator");
const pattern = /^[a-zA-Z\s]+$/; // Check for only alphabetical characters (uppercase or lowercase) and spaces.
const inquirer = require("inquirer");

class Employee {

  //Returns inquirer.prompt object questions for a specified employee type,
  //merged together with any additional questions passed as a
  //second argument
  static questions(employeeType, specificQuestions) {
    const employeeQuestions = [
      {
        type: "input",
        name: "name",
        message: `Enter ${employeeType}'s name.`,
      },
      {
        type: "input",
        name: "id",
        message: `Enter ${employeeType}'s id.`,
      },
      {
        type: "input",
        name: "email",
        message: `Enter ${employeeType}'s email.`,
      },
    ];

    return [...employeeQuestions, ...specificQuestions];
  }

  //Private method, returns promise of inquirer.promtps user answers.
  static _prompt(employeeType, questions) {
    return inquirer.prompt(Employee.questions(employeeType, questions));
  }

  //Returns a promise of an object, must be a child of Empoyee class,
  //First parameter takes employee type name, eg. "Manager", "Cleaner"
  //Second parameter takes inquirer.prompt question object, questions 
  //that are relevant to specific employee type.
  //Third parameter specifies what object type is to be returned.
  static init(employeeType, questions, Constructor) {
    return Employee._prompt(employeeType, questions).then((answers) => {
      return new Constructor(...Object.values(answers));
    });
  }

  constructor(name, id, email) {
    if (validator.matches(name, pattern)) {
      this.name = name;
    } else {
      throw new Error("Name should only contain alphabetical characters");
    }

    if (validator.isNumeric(id)) {
      this.id = id;
    } else {
      throw new Error("Id should only contain numeric characters");
    }

    if (validator.isEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Email should be a valid email address");
    }
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
