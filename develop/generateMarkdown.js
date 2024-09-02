// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

// const MITBadge = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)];
// const apacheBadge = [![License]('https://img.shields.io/badge/License-Apache_2.0-blue.svg')];
// const BSDBadge = [![License]('https://img.shields.io/badge/License-BSD_3--Clause-blue.svg')];
// const GPLBadge = [![License: GPL v3]('https://img.shields.io/badge/License-GPLv3-blue.svg')];
// const LGPLBadge = [![License: LGPL v3]('https://img.shields.io/badge/License-LGPL_v3-blue.svg')];
// const MPLBadge = [![License: MPL 2.0]('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg')];
// const noBadge = ('');
// const licenseBadges = [MITBadge, apacheBadge, BSDBadge, GPLBadge, LGPLBadge, MPLBadge, noBadge];

function renderLicenseBadge(license) {

    if (license === 'MIT') {
      return ('https://img.shields.io/badge/License-MIT-yellow.svg');
    } else if (license === 'Apache') {
      return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg');
    } else if (license === 'BSD') {
      return ('https://img.shields.io/badge/License-BSD_3--Clause-blue.svg');
    } else if (license === 'GPL') {
      return ('https://img.shields.io/badge/License-GPLv3-blue.svg');
    } else if (license === 'LGPL') {
      return ('https://img.shields.io/badge/License-LGPL_v3-blue.svg');
    } else if (license === 'MPL') {
      return ('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg');
    } else if (license === 'none') {
      return (' ');
    };

};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function RenderLicenseLink(license) {
//   this.license = license;
// }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // call renderlicenseBadge with license, return line 63
  // renderLicenseBadge(license)
  const Apache = (`https://opensource.org/licenses/Apache-2.0`)
  const BSD = (`https://opensource.org/licenses/BSD-3-Clause`)
  const GPL = (`https://www.gnu.org/licenses/gpl-3.0`)
  const LGPL = (`https://www.gnu.org/licenses/lgpl-3.0`)
  const MIT = (`https://opensource.org/licenses/MIT`)
  const MPL = (`https://opensource.org/licenses/MPL-2.0`)

  if (license === 'MIT') {
    return (MIT);
  } else if (license === 'Apache') {
    return (Apache);
  } else if (license === 'BSD') {
    return (BSD);
  } else if (license === 'GPL') {
    return (GPL);
  } else if (license === 'LGPL') {
    return (LGPL);
  } else if (license === 'MPL') {
    return (MPL);
  } else if (license === 'none') {
    return (' ');
  };


  // ![${data.license}](${renderLicenseBadge(data.license)})
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
![${data.license}](${renderLicenseBadge(data.license)})

## Description
${data.desc}
  
## Table of Contents
${data.tableOC}  
  
## Installation
${data.install}
  
## Usage
${data.usage}
  
## License
${data.license} 
${renderLicenseSection(data.license)}
  
## Contribution
${data.contr}
  
## Tests
${data.tests}
  
## Questions
https://github.com/${data.question1}  
Want to reach out? Email me at ${data.question2}`

}

module.exports = generateMarkdown;
