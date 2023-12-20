const Client = require('./model/Client');

let client = [
  {
    firstname: 'Carl',
    lastname: 'Smith',
    email: 'carl.s33@gmail.com',
    number: 440888888,
    project: 'Front-end landpage development',
  },
  {
    firstname: 'Sarah',
    lastname: 'Company',
    email: 'shcompany@gmail.com',
    number: 4408777776,
    project: 'Conection back-end to front-end',
  },
  {
    firstname: 'Josh',
    lastname: 'Martin',
    email: 'josh.martin@outlook.com',
    number: 34677778877,
    project: 'Import data from database to front',
  },
];

async function seedDB() {
  await Client.insertMany(client);
  console.log('DB Seeded please comment seedDB line from index.js to avoid repeat');
}

module.exports=seedDB;
