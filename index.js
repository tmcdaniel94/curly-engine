// TODO: Include packages needed for this application
generateMarkdown = require(`./develop/generateMarkdown.js`);
const inquirer = require('inquirer');
const fs = require('fs');

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
    const headings = `#$ {answers.title}

## Description
${answers.desc}

## Table of Contents
${answers.tableOC}

## Installation
${answers.install}

## Usage
${answers.usage}

## License
${answers.license}

## Contribution
${answers.contr}

## Tests
${answers.tests}

## Questions
https://github.com/${answers.question1}
Want to reach out? Email me at ${answers.question2}`


    
    fs.writeFile('README.md', headings, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    })

    // const answersForFile = `${answers.desc} | ${answers.tableOC} | ${answers.install} | ${answers.usage} | ${answers.license} | ${answers.contr} | ${answers.tests} | ${answers.questions} |`;


})

//Write answers to questions
// Inquirer is used to call questions in 'questions' array. Use node index.js to trigger prompts.
//     inquirer
//     .prompt(questions)
//     .then((answers) => {
//     const answersForFile = `${answers.desc} | ${answers.tableOC} | ${answers.install} | ${answers.usage} | ${answers.license} | ${answers.contr} | ${answers.tests} | ${answers.questions} |`;

//     fs.appendFile('README.md', answersForFile, (err) => {
//         if (err) throw err;
//         console.log('README.md content has been created!');
//     });
// })


// TODO: Create a function to write README file
// function writeToFile('README.md', answersForFile) {


// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// description
// This project was created as a tool to generate a README.md file in a more efficient manner using Node. This project was a great learning experience that took a deeper dive into the ins and outs of Node, in addition to Javascript. One skill I had to focus on was the use of Inquirer to create prompts in the command line, which I found I enjoyed using. I can see the time-saving benefits of being able to fully create and edit files simply by answering prompts in the command line once the code is written. 

// table of contents
// [Description](#description)\[Installation](#installation)\[Usage](#usage)\[License](#license)\[Contributions](#contributions)\[Tests](#tests)\[Questions](#questions)
// This code was created using starter code from UT's Full Stack Bootcamp.