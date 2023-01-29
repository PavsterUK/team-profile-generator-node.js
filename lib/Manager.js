const validator = require("validator");
const inquirer = require("inquirer");
const Employee = require("./Employee");
const managersQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: `Enter Manager's office number.`,
  },
];

class Manager extends Employee {
  static init() {
    return super.init("Manager", managersQuestions, Manager);
  }

  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    //Check if numeric or alphanumeric like: 22 or 22B
    if (
      validator.isNumeric(officeNumber) ||
      validator.isAlphanumeric(officeNumber)
    ) {
      this.officeNumber = officeNumber;
    } else {
      throw new Error("Manager's office number must be either numeric or alphanumeric.");
    }
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
