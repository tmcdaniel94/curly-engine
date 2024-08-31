// TODO: Include packages needed for this application
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
        name: 'questions',
    },
];

// const [desc, tableOC, install, usage, license, contr, tests, Qs] = questionsArray;
const questionHeadings = questions.map(question => question.message);
console.log(questionHeadings);

//Write file
inquirer
.prompt(titleQuestion)
.then((answers) => {
    const headings = `# ${answers.title} \n \n ## ${questionHeadings.join(' \n \n ## ')}`;
    console.log(typeof headings);

    fs.writeFile('README.md', headings, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    });
})

//Write answers to questions
// Inquirer is used to call questions in 'questions' array. Use node index.js to trigger prompts.
// inquirer
// .prompt(questions)
// .then((answers) => {
//     const answersTitle = `${answer.title}`
//     const answersForFile = `${answers.desc} | ${answers.tableOC} | ${answers.install} | ${answers.usage} | ${answers.license} | ${answers.contr} | ${answers.tests} | ${answers.questions} |`;

//     fs.writeFile('README.md', answersForFile, (err) => {
//         if (err) throw err;
//         console.log('README.md has been created!');
//     });
// })

// TODO: Create a function to write README file
// function writeToFile('README.md', answersForFile) {


// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
