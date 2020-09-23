// ![Language](https://img.shields.io/github/languages/top/jiji-smith/README_Generator)

function readmeFormat(data){
return `
# Title ${data.title} :clipboard:
## Description
${data.description}
## Table of Contents
* [Title]()
* [Description]()
* [Table of Contents]()
* [Usage]()
* [License]()
* [Contributing]()
* [Tests]()
* [Questions]()

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