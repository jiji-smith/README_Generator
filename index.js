const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readmeFormat = require("./utils/readmeFormat");

const writeFileAsync = util.promisify(fs.writeFile);



function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project name?"
    },
    {
      type: "input",
      name: "description",
      message: "please describe your project"
    },
    {
      type: "input",
      name: "usage",
      message: "how to use the project?"
    },
    {
      type: "input",
      name: "homepage",
      message: "Please type the homepage URL?"
    },
    {
      type: "input",
      name: "repository",
      message: "Please type the repository URL"
    },
    {
      type: "input",
      name: "author",
      message: "Author name?"
    },
    {
      type: "list",
      name: "license",
      message: "Choose your license",
      choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'simplified' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Pblic License 2.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNE Affero General Public Licese v3.0",
        "GEN General Public License v2.0",
        "CNU Lesser Gneeral Public License v2.1",
      ]
    }
  ]);
}


promptUser()
  .then(function(answers) {
    const markdown = readmeFormat(answers);

    return writeFileAsync("README.md", markdown);
  })
  .then(function() {
    console.log("Successfully!");
  })
  .catch(function(err) {
    console.log(err);
  });
