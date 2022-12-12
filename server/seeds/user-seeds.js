const { User } = require('../models');

const seedUser = async () => {

    await User.deleteMany({});

const data = await User.insertMany(
      [
        { username: 'Bob', email: 'bob@bob.com', password: 'password12345' }, //, thoughts: [1,5], friends: [2,3,4]
        { username: 'Dan', email: 'Dan@Dan.com', password: 'password12345' }, //, thoughts: [2, 6], friends: [1,3,4]
        { username: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password: 'password12345' }, //, thoughts: 3, friends: [1,2,4]
        { username: 'Scott', email: 'Scott@Scott.com', password: 'password12345' }, //, thoughts: 4, friends: [1,2,3] 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = {seedUser};
