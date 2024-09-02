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
  if (answers.license === MIT) {
    fs.appendFileSysc('README.md, https://img.shields.io/badge/License-MIT-yellow.svg, (err) => err ? err && console.error(err)');
  } 
  // else (answers.license === Apache) {
  //   fs.appendFileSysc("README.md", ${licenseBadges.apacheBadge}, (err) => err ? err && console.error(err));
  // } else (answers.license === BSD) {
  //   fs.appendFileSysc("README.md", ${licenseBadges.BSDBadge}, (err) => err ? err && console.error(err));
  // } else (answers.license === GPL) {
  //   fs.appendFileSysc("README.md", ${licenseBadges.GPLBadge}, (err) => err ? err && console.error(err));
  // } else (answers.license === LGPL) {
  //   fs.appendFileSysc("README.md", ${licenseBadges.LGPLBadge}, (err) => err ? err && console.error(err));
  // } else (answers.license === MPL) {
  //   fs.appendFileSysc("README.md", ${licenseBadges.MPLBadge}, (err) => err ? err && console.error(err));
  // } else (answers.license === none) {
  //   return noBadge;
  // }

  // fs.appendFileSysc("README.md, "${RENDER LINK}", (err) => err ? err && console.error(err));
  //   ${answers.license}

  //   [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] //apache
  //   [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)] //BSD
  //   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)] //GPL
  //   [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)] //LGPL
  //   [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)] //MPL
  //   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] //MIT

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function RenderLicenseLink(license) {
  this.license = license;
}
const apache = new RenderLicenseLink(`https://opensource.org/licenses/Apache-2.0`)
const BSD = new RenderLicenseLink(`https://opensource.org/licenses/BSD-3-Clause`)
const GPL = new RenderLicenseLink(`https://www.gnu.org/licenses/gpl-3.0`)
const LGPL = new RenderLicenseLink(`https://www.gnu.org/licenses/lgpl-3.0`)
const MIT = new RenderLicenseLink(`https://opensource.org/licenses/MIT`)
const MPL = new RenderLicenseLink(`https://opensource.org/licenses/MPL-2.0`)
const none = new RenderLicenseLink('');


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(answers.license)}

`;
}

module.exports = generateMarkdown;
