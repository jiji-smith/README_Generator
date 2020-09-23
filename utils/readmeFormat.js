
function readmeFormat(data){
return `
![Language](https://img.shields.io/github/languages/top/jiji-smith/README_Generator)
## Title
${data.title}
## Description
${data.description}
## Table of Contents
* [Title](#title)
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Video](#video)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Please check ${data.repository}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.author}
## Video
[https://drive.google.com/file/d/1g9L5A09xaEkrs5QDofysMZwndC9OxR_j/view](https://drive.google.com/file/d/1g9L5A09xaEkrs5QDofysMZwndC9OxR_j/view)
## Tests

## Questions
${data.questions}

`
}

module.exports = readmeFormat