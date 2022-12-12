const connection = require('../config/connection');
const { seedAdmin } = require('./admin-seeds');
const { seedCreator } = require('./creator-seeds');
const { seedUser } = require('./user-seeds');

const seedAll = async () => {
  connection.on('error', (err) => console.log(err));

  connection.once('open', async () => {
    console.log('connected');

    await seedAdmin();
    console.log('\n----- ADMIN SEEDED -----\n');

    await seedCreator();
    console.log('\n----- CREATOR SEEDED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    process.exit(0);
  });
};

seedAll();
