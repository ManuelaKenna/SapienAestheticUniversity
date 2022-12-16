const { Content } = require('../models');

const seedContent = async () => {

    await Content.deleteMany({});

const data =  await Content.insertMany(
      [
        { title: '', description: '', cost: '', video: '', creator: '' }, 
        { title: '', description: '', cost: '', video: '', creator: '' }, 
        { title: '', description: '', cost: '', video: '', creator: '' }, 
        { title: '', description: '', cost: '', video: '', creator: '' }, 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));

}

module.exports = {seedContent};
