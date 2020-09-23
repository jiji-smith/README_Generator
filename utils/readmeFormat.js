
function readmeFormat(data){
return `
![Language](https://img.shields.io/github/languages/top/jiji-smith/README_Generator)
# Title ${data.title}
## Description
${data.description}
## Table of Contents
* [Title](#title)
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.repository}
## Usage
${data.usage}
## License
${data.license}
## Contributing

## Tests
## Questions

`
}

module.exports = readmeFormat