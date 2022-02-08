const generateManagerCards = managerData => {
  return `
  <div class="card" style="width: 18rem;">
      <div class="card-header header-card">
        <h3>${managerData.name}</h3>
        <h4><i class ="fa-solid fa-mug-saucer"></i> ${managerData.role}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${managerData.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${managerData.email}">${managerData.email}</a></li>
        <li class="list-group-item">Office Number: ${managerData.officeNumber}</li>
      </ul>
  </div>
  `;
}

const generateEngineerCards = engineerData => {
  if (!engineerData) {
    return ``
  }
  return `
  ${engineerData.map(({ name, id, email, role, github }) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header header-card">
    <h3>${name}</h3>
    <h4><i class="fa-solid fa-laptop-code"></i> ${role}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
      <li class="list-group-item">GitHub: <a href = "https://www.github.com/${github}">${github}</a></li>
    </ul>
    </div>
    `;
  })
  .join('')}
  `;
};

const generateInternCards = internData => {
  if (!internData) {
    return ``
  }
  return `
  ${internData.map(({ name, id, email, role, school }) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header header-card">
    <h3>${name}</h3>
    <h4><i class="fa-solid fa-graduation-cap"></i> ${role}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
      <li class="list-group-item">School: ${school}</li>
    </ul>
    </div>
    `;
  })
  .join('')}
  `;
};

module.exports = (teamDataArr) => {
  const manager = teamDataArr[0];
  const engineer = teamDataArr[1];
  const intern = teamDataArr[2];
  return `
  <!DOCTYPE html>
  <html lang="en"> 

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="text-white text-center header-bg p-3">My Team</h1>
      </div>
    </header>
    <main class="container d-flex flex-wrap justify-content-center">
      ${generateManagerCards(manager)}
      ${generateEngineerCards(engineer)}
      ${generateInternCards(intern)}
      
    </main>

    <footer>
      <h3></h3>
    </footer>
  </body>
  </html>
  `;
}; 