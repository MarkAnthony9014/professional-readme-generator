// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');


// const questionValidation = async (answers) => {
//   if (answers === "") {
//     console.log("An answer is required!");
//     return;
//   }
// }


// TODO: Create an array of questions for user input
const questionArr = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your application/project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can your application be installed?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'If any, please provide instructions on how to use your application'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license (if any) did you utilize?',
    choices: ['MIT', 'BSD-3', 'GPL-3', 'Apache-2.0', 'No License']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who are the contributors to this project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Have there been any tests run for this application?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Contact information for further questions:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },]
// ].then(answers => {
//     //console.info('Answers', answers);
//    const response = generateMarkdown(answers);
//    console.log(answers);
//    writeToFile('generateREADME.md', response)
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            throw err;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questionArr).then(answers => {
    const response = generateMarkdown(answers);
    console.log(answers);
    writeToFile('generateREADME.md', response)
  })
  
}

// Function call to initialize app
init();
