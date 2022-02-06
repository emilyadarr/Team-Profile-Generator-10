const generateManagerCards = (managerData) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${managerData.name}
    ${managerData.role}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managerData.id}</li>
    <li class="list-group-item">Email: ${managerData.email}</li>
    <li class="list-group-item">Office Number: ${managerData.officeNumber}</li>
  </ul>
</div>
`;
}

const generateEngineerCards = (engineerData) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${engineerData.name}
    ${engineerData.role}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineerData.id}</li>
    <li class="list-group-item">Email: ${engineerData.email}</li>
    <li class="list-group-item">GitHub: ${engineerData.github}</li>
  </ul>
</div>
`;
}

const generateInternCards = (internData) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${internData.name}
    ${internData.role}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${internData.id}</li>
    <li class="list-group-item">Email: ${internData.email}</li>
    <li class="list-group-item">School: ${internData.school}</li>
  </ul>
</div>
`;
}

module.exports = templateData => {
  return `
  <!DOCTYPE html>
  <html lang="en"> 

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateManagerCards(managerData)}
      ${generateEngineerCards(engineerData)}
      ${generateInternCards(internData)}
    </main>

    <footer>
      <h3></h3>
    </footer>
  </body>
  </html>
  `;
}; 