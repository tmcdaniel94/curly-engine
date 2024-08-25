// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'tableOC',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contr',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'questions',
    },
];


// Inquirer is used to call questions in 'questions' array. Use node index.js to trigger prompts.
inquirer
.prompt(questions)
.then((answers) => {
    const answersForFile = `title: ${answers.title} | description: ${answers.desc} | tableOfContents: ${answers.tableOC} | installation: ${answers.install} | usage: ${answers.usage} | license: ${answers.license} | contributing: ${answers.contr} | tests: ${answers.tests} | questions: ${answers.questions} |`;
    fs.writeFile('README.md', answersForFile, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    });
})

// TODO: Create a function to write README file
// function writeToFile('README.md', answersForFile) {


// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
