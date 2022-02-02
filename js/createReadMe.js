
// Generates README.md from answers solicited in index.js via inquirer questions
// Output formatted for markdown
function createReadMe(answers) {
    return `

# ${answers.projectName} 

## Table of Contents ![badge](https://img.shields.io/badge/license-${answers.licensing}-gold)

- [Description](#description)
- [Installation](#installation)
- [Languages and Technologies Used](#languages)
- [Licensing](#licensing)
- [Usage](#usage)
- [Testing](#testing)
- [Contributions](#contributions)
- [Questions and Concerns](#questions)

### Description <a name="description"></a>

${answers.description} 

### Installation <a name="installation"></a>

Here's how you setup this project:<br />

${answers.installation}  

### Languages and Technologies Used <a name="languages"></a>

${answers.languages}  

### Licensing <a name="licensing"></a> 

This application is covered by ${answers.license} license(s). 

### Usage <a name="usage"></a> 

${answers.usage} 

### Testing <a name="testing"></a>

${answers.tests} 

### Contribution <a name="contributution"></a> 

Resources and contributions: ${answers.contributors} 
<br />

If you would like to contribute to this project, then please: ${answers.contributing}  

Follow my projects on Github: [${answers.username}](https://github.com/${answers.username})
<br />

### Questions and Concerns <a name="questions"></a>
If you have any additional questions, please contact me at: ${answers.email}
`;
}

module.exports = createReadMe;


