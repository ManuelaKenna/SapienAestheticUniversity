const { Admin } = require('../models');

const seedAdmin = async () => {

    await Admin.deleteMany({});

    const data = await Admin.create(
      { adminname: 'Dan', email: 'Dan@Dan.com', password: 'password12345' },
  
    ).then((err) =>
      err ? console.log(err) : console.log('Inserted'));
  }

module.exports = {seedAdmin};
