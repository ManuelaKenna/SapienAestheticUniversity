const router = require('express').Router();
const { Admin } = require('../../models');

router.get('/test', (reg, res) => res.send(`API express routes working for admin.`))

router.get('/', async (req, res) => {
  Admin.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

router.get('/:id', async (req, res) => {

  Admin.findOne({ _id: req.params.id })
    .select('-__v')
    .then((admin) =>
      !admin
        ? res.status(404).json({ message: 'No admin with that ID' })
        : res.json(admin)
    )
    .catch((err) => res.status(500).json(err));

});

router.post('/', async (req, res) => {
  Admin.create(req.body)
  .then((dbAdminData) => res.json(dbAdminData))
  .catch((err) => res.status(500).json(err));
});

router.put('/:id', async (req, res) => {

  Admin.findOneAndUpdate(
    { _id: req.params.id },
    { adminname: req.body.adminname,
      email: req.body.email,
      password: req.body.password, 
      // $push: { friends: req.body.friends }
    },
    { runValidators: true, new: true },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});

router.delete('/:id', async (req, res) => {
  Admin.findOneAndDelete(
    { _id: req.params.id },
    (err, result) => {
      if (result) {
        res.status(200).json({ message: `${result.adminname} deleted!`});
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});

module.exports = router;