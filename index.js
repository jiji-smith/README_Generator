const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

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

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">This is my project "${answers.title}"</h1>
    <p class="lead">It is about ${answers.description}.</p>
    <p class="lead">You can check the website here: <a href = ${answers.homepage}>${answers.homepage}</a>.</p>
    <p class="lead">License: ${answers.license}.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">Author name is ${answers.author}</li>
      <li class="list-group-item">LinkedIn: <a href = ${answers.repository}>${answers.repository}</a></li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
