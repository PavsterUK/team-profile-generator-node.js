const validator = require("validator");
const pattern = /^[a-zA-Z\s]+$/; // Check for only alphabetical characters (uppercase or lowercase) and spaces.

class Employee {
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
      console.log("test")
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

  static promptQuestions(employeeType, specificPrompt) {
    const employeePromptQuestions = [
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

    return [...employeePromptQuestions, ...specificPrompt];
  }
}

module.exports = Employee;
