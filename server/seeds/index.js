const connection = require('../config/connection');
const { seedContent } = require('./content-seeds');
const { seedUser } = require('./user-seeds');

const seedAll = async () => {
  connection.on('error', (err) => console.log(err));

  connection.once('open', async () => {
    console.log('connected');

    await seedContent();
    console.log('\n----- CONTENT SEEDED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    process.exit(0);
  });
};

seedAll();
