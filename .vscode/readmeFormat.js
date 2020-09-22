function generateReadme(data){
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

