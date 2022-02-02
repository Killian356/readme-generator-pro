// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createReadMe = require("./js/createReadMe")
const writeAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function askUser(){
  return inquirer.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
    default: 'Another day in the matrix.',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your github username/handle?',
    default: 'Killian356',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    default: 'Killian7195@gmail.com',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Are there any rules, laws, or usage restrictions for using this project code?',
    default: 'This project code is open source, but not for comercializaion.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What was used to test this application?',
    default: 'I wish I actually got around to testing it.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief project description.',
  },
  {   // select from list
    type: 'list',
    name: 'licensing',
    message: 'What License(s) did you use for this project?',
    choices: [
        'BSD 3-Clause "New" or "Revised" license',
        'BSD 2-Clause "Simplified" or "FreeBSD" license',
        'CGNU General Public License (GPL)',
        'GNU Library or "Lesser" General Public License (LGPL)',
        'MIT license',
        'Mozilla Public License 2.0',
        'Common Development and Distribution License',
        'Eclipse Public License version 2.0',
        'Apache License 2.0']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
    default: 'Please reach out on Github or sned me an email.',
  },
  {   // check multiple options
    type: 'checkbox',
    name: 'composition',
    message: 'What language(s) and technologies did you use to create your project?',
    choices: [
        'HTML', 'CSS', 'JavaScript', 'Ruby', 'React', 'Python', 'C++', 'C#', 'TypeScript', 'Other', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'MySQL', 'NoSQL', 'OOP', 'PWA', 'Java'
    ],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions on how to get started with your project.',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please list additional contributors to this project.',
  }
])
}

async function init() {
  try {
      const answers = await askUser();
      const buildContent = createReadMe(answers);
      writeAsync('./generated/README.md', buildContent);
      // overwrites last version - no new document
      console.log('README.md successfully created in the generated folder.');
  } catch (err) {
      console.log(err);
  }
}

init();