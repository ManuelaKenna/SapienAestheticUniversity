const { Creator } = require('../models');

const seedCreator = async () => {

    await Creator.deleteMany({});

const data =  await Creator.insertMany(
      [
        { creatorname: 'Bob', email: 'bob@bob.com', password: 'password12345' }, //, thoughts: [1,5], friends: [2,3,4]
        { creatorname: 'Dan', email: 'Dan@Dan.com', password: 'password12345' }, //, thoughts: [2, 6], friends: [1,3,4]
        { creatorname: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password: 'password12345' }, //, thoughts: 3, friends: [1,2,4]
        { creatorname: 'Scott', email: 'Scott@Scott.com', password: 'password12345' }, //, thoughts: 4, friends: [1,2,3] 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));

}

module.exports = {seedCreator};
