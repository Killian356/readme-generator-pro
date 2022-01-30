
// Generates README.md from answers solicited in index.js via inquirer questions
// Output formatted for markdown
function createReadMe(answers) {
    return `

# ${answers.projectName} 🏆 

## Table of Contents ![badge](https://img.shields.io/badge/license-${answers.licensing}-blue)

- [Description](#description)
- [Installation](#installation)
- [Toolkit](#toolkit)
- [Licensing](#licensing)
- [Usage](#usage)
- [Licensing](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

### Description 🔮 <a name="description"></a>

${answers.description} 

### Installation 💾 <a name="installation"></a>

Here's how you setup this project:<br />

${answers.installation}  

### Toolkit 🧰 <a name="toolkit"></a>

${answers.composition}  

### Licensing ✨ <a name="licensing"></a> 

This application is covered by the ${answers.licensing} license. 

### Usage 🌱 <a name="usage"></a> 

${answers.usage} 

### Tests 💎  <a name="tests"></a> 

${answers.tests} 

### Contributing 🧿 <a name="contributing"></a> 

Resources and contributions: ${answers.credits} 
<br />

If you would like to contribute to this project, then please: ${answers.contributing} 

### Questions 🎯 <a name="questions"></a> 

Follow my projects on Github: [${answers.username}](https://github.com/${answers.username})
<br />

If you have any additional questions, please contact me at: ${answers.email}
`;
}

module.exports = createReadMe;


