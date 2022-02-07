const inquirer = require('inquirer');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const Employee = require('./lib/Employee');
const generatePage = require('./src/page-template');
const fs = require('fs');

const promptManager = () => {
  console.log(`Please build your team`);
  
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?"
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?"
    }
  ])
  .then(({ name, id, email, officeNumber }) => {
    managerData = new Manager(name, id, email, officeNumber);
  })
  .then(nextMemberPrompt)
};

const promptEngineer = () => {
  // engineerData = this.Engineer
  if (!this.Engineer) {
    this.Engineer = [];
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your engineer's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your engineer's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your engineer's email?"
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your engineer's GitHub username?"
    }
  ])
  .then(({ name, id, email, github }) => {
    this.Engineer.push(new Engineer(name, id, email, github));
  })
  .then(nextMemberPrompt)
};

const promptIntern = () => {
  //internData = this.Engineer
  if (!this.Intern) {
    this.Intern = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your intern's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your intern's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your intern's email?"
    },
    {
      type: 'input',
      name: 'school',
      message: "What is your intern's school?"
    }
  ])
  .then(({ name, id, email, school }) => {
    this.Intern.push(new Intern(name, id, email, school));
  })
  .then(nextMemberPrompt)
};

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
      console.log('data collected');
      //console.log(this.Manager);
      //console.log(managerData);
      //console.log(managerData.name);
      //console.log(managerData.id);
      //console.log(this.Engineer);
      const engineerData = this.Engineer;
      //console.log(engineerData);
      const internData = this.Intern;
      //console.log(internData);
      // TODO: create data array and push variables into it??
      teamDataArr.push(managerData, engineerData, internData);
      //console.log(teamDataArr);
      return teamDataArr;
      //return managerData, engineerData, internData;
    }
  })
};

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

promptManager()
.then(teamDataArr => {
  return generatePage(teamDataArr);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
})
.catch(err => {
  console.log(err);
});
