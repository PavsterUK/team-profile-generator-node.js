const validator = require("validator");
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

  constructor(
    name = "employee",
    id = 0,
    email = "test@test.com",
    officeNumber = 0
  ) {
    super(name, id, email);

    //Check if numeric or alphanumeric like: 22 or 22B
    if (
      validator.isNumeric(officeNumber.toString()) ||
      validator.isAlphanumeric(officeNumber.toString())
    ) {
      this.officeNumber = officeNumber.toString();
    } else {
      throw new Error(
        "Manager's office number must be either numeric or alphanumeric."
      );
    }
  }

  getOfficeNumber() {
    return parseInt(this.officeNumber);
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
