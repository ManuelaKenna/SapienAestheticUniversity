const { User } = require('../models');

const seedUser = async () => {

  await User.deleteMany({});

<<<<<<< HEAD
const data =  await User.insertMany(
      [
        { username: 'Bob', email: 'bob@bob.com', password:'123456' }, 
        { username: 'Dan', email: 'Dan@Dan.com', password:'123456' }, 
        { username: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password:'123456' }, 
        { username: 'Scott', email: 'Scott@Scott.com', password:'123456' }, 
      ],
    ).then((err) =>
=======
  const data = await User.create(
    { username: 'Dan', email: 'Dan@Dan.com', password: 'password12345' },

  ).then((err) =>
>>>>>>> main
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = { seedUser };
