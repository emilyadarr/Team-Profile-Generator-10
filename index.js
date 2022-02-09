const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const fs = require('fs');

// Manager questions 
const promptManager = () => {
  console.log(`Please build your team`);
  
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's id?",
      validate: idNumber => {
        if (!isNaN(idNumber)) {
          return true;
        } else {
          console.log("Please enter a valid id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
      validate: officeNumberInput => {
        if (!isNaN(officeNumberInput)) {
          return true;
        } else {
          console.log("Please enter a valid office number!");
          return false;
        }
      }
    }
  ])
  .then(({ name, id, email, officeNumber }) => {
    managerData = new Manager(name, id, email, officeNumber);
  })
  .then(nextMemberPrompt)
};

// Engineer questions
const promptEngineer = () => {
  if (!this.Engineer) {
    this.Engineer = [];
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your engineer's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your engineer's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your engineer's id?",
      validate: idNumber => {
        if (!isNaN(idNumber)) {
          return true;
        } else {
          console.log("Please enter a valid id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your engineer's email?",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your engineer's GitHub username?",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your engineer's username!");
          return false;
        }
      }
    }
  ])
  .then(({ name, id, email, github }) => {
    this.Engineer.push(new Engineer(name, id, email, github));
  })
  .then(nextMemberPrompt)
};

// Intern questions
const promptIntern = () => {
  if (!this.Intern) {
    this.Intern = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your intern's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your intern's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your intern's id?",
      validate: idNumber => {
        if (!isNaN(idNumber)) {
          return true;
        } else {
          console.log("Please enter a valid id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your intern's email?",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is your intern's school?",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter your intern's school!");
          return false;
        }
      }
    }
  ])
  .then(({ name, id, email, school }) => {
    this.Intern.push(new Intern(name, id, email, school));
  })
  .then(nextMemberPrompt)
};

// Next Member prompt to determine which prompt to circle back to
const nextMemberPrompt = () => {
  return inquirer.prompt({
    type: 'list',
    name: 'teamMember',
    message: "Which type of team member would you like to add?",
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
  })
  .then(data => {
    if (data.teamMember === 'Engineer') {
      return promptEngineer();
    } 
    else if (data.teamMember === 'Intern') {
      return promptIntern();
    }
    else {
      const teamDataArr =[];
      // console.log('data collected');
      const engineerData = this.Engineer;
      const internData = this.Intern;
      teamDataArr.push(managerData, engineerData, internData);
      return teamDataArr;
    }
  })
};

// Take pageHTML and write the index.html file into the dist folder
const writeFile = (pageHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', pageHTML, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't  accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message:'File created!'
      });
    });
  });
};

// copy the style.css file into the dist folder
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message:'Stylesheet copied!'
      });
    });
  });
};

// intial prompt 
promptManager()
.then(teamDataArr => {
  return generatePage(teamDataArr);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse.message);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse.message);
})
.catch(err => {
  console.log(err);
});