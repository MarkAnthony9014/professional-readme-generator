// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  //is there a more efficient way to write this code? 
  
  if (data['license'] === 'Apache-2.0') {
     return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (data['license'] === 'BSD-3') {
     return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  else if (data['license'] === 'GPL-3') {
     return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (data['license'] === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else {
    badge = ''
  }
  return badge
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ${renderLicenseBadge(data)}


  ## Table Of Contents

  -[Description](#Description)

  -[Installation](#Installation)

  -[Usage](#Usage)

  -[License](#License)

  -[Contributing](#Contributing)

  -[Tests](#Tests)

  -[Questions](#Questions)



  ## Description
  ${data['description']}

  ## Installation
  ${data['installation']}

  ## Usage
  ${data['usage']}

  ## License
  ${data['license']}

  ## Contributing
  ${data['contributing']}

  ## Tests
  ${data['tests']}

  ## Questions
  ${data['questions']}

  ## GitHub Username: ${data['githubUsername']}

  ## Email Address: ${data['email']}

`;
}

module.exports = generateMarkdown;
