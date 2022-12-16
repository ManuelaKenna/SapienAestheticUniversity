const { Admin } = require('../../models');

const seedAdmin = async () => {

    await Admin.deleteMany({});

const data =  await Admin.insertMany(
      [
        { adminname: 'Bob', email: 'bob@bob.com', password:'123456'}, 
        { adminname: 'Dan', email: 'Dan@Dan.com', password:'123456'  }, 
        { adminname: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password:'123456' }, 
        { adminname: 'Scott', email: 'Scott@Scott.com', password:'123456'}, 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));

}

module.exports = {seedAdmin};
