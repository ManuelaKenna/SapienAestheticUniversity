const { Admin } = require('../models');

const seedAdmin = async () => {

    await Admin.deleteMany({});

const data =  await Admin.insertMany(
      [
        { adminname: 'Bob', email: 'bob@bob.com', password: 'password12345' }, //, thoughts: [1,5], friends: [2,3,4]
        { adminname: 'Dan', email: 'Dan@Dan.com', password: 'password12345' }, //, thoughts: [2, 6], friends: [1,3,4]
        { adminname: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password: 'password12345' }, //, thoughts: 3, friends: [1,2,4]
        { adminname: 'Scott', email: 'Scott@Scott.com', password: 'password12345' }, //, thoughts: 4, friends: [1,2,3] 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));

}

module.exports = {seedAdmin};
