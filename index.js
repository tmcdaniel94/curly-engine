// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./develop/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const titleQuestion = {
    type: 'input',
    message: 'Project title',
    name: 'title',
};

const questions = [
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
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'LGPL', 'MPL', 'none'],
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
        name: 'question1',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'question2',
    },
];

const questionHeadings = questions.map(question => question.message);
const allQuestions = [titleQuestion, ...questions];

//Write file
inquirer
.prompt(allQuestions)
.then((answers) => {

    const markdown = generateMarkdown(answers)
    fs.writeFile('README.md', markdown, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    })

})



// TODO: Create a function to write README file
// function writeToFile('README.md', answersForFile) {
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

