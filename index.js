const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      message: 'Where are you from?',
      name: 'location',
    },
    {
      message: 'Short bio of yourself',
      name: 'bio',
    },
    {
        message: 'GitHub user',
        name: 'githubUrl'
    },
    {
        message: 'LinkedIn name',
        name: 'linkedinUrl',
    },
  ])
  .then((response) => {
    console.log(response)
    const responseStr = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <title>Portfolio Generator</title>
    </head>
    
    <body>
        <div class="container">
            <div class="card align-items-center text-center" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${response.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${response.location}</h6>
                <p class="card-text">${response.bio}</p>
                <a href="${response.githubUrl}"><button type="button" class="btn btn-primary">GitHub</button></a>
                <a href="${response.linkedinUrl}"><button type="button" class="btn btn-primary">LinkedIn</button></a>
                </div>
            </div>
        </div>
    </body>
    
    </html>`
     fs.writeFile('index.html', responseStr, function(err) {
    if (err) {
        throw err;
    }
  })
  }
  );
