const validator = require("validator");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    //Check if numeric or alphanumeric like: 22 or 22B
    if (
      validator.isNumeric(officeNumber) ||
      validator.isAlphanumeric(officeNumber)
    ) {
      this.officeNumber = officeNumber;
    } else {
      throw new Error(
        "Office number must be either numeric or alphanumeric string."
      );
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
