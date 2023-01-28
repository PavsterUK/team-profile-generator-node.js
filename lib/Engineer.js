const validator = require("validator");
const Employee = require("./Employee");
const pattern = /^[a-zA-Z0-9-]+$/; //Usernames for user accounts on GitHub.com can only contain alphanumeric characters and dashes ( - )

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    if (validator.matches(github, pattern)) {
      this.github = github;
    } else {
      throw new Error(
        "Usernames for user accounts on GitHub.com can only contain alphanumeric characters and dashes ( - )"
      );
    }
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  static promptQuestions() {
    const engineerPromptQuestions = [
      {
        type: "input",
        name: "github",
        message: `Enter Engineer's GitHub username.`,
      },
    ];
    return Employee.prompt("Engineer", engineerPromptQuestions);
  }
}

module.exports = Engineer;
