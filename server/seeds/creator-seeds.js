const { Creator } = require('../models');

const seedCreator = async () => {

  await Creator.deleteMany({});

<<<<<<< HEAD
const data =  await Creator.insertMany(
      [
        { creatorname: 'Bob', email: 'bob@bob.com', password:'123456' }, 
        { creatorname: 'Dan', email: 'Dan@Dan.com', password:'123456'  }, 
        { creatorname: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password:'123456'}, 
        { creatorname: 'Scott', email: 'Scott@Scott.com', password:'123456'}, 
      ],
    ).then((err) =>
=======
  const data = await Creator.create(
    { creatorname: 'Dan', email: 'Dan@Dan.com', password: 'password12345' },

  ).then((err) =>
>>>>>>> main
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = { seedCreator };
