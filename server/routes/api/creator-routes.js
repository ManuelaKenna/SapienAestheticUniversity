const router = require('express').Router();
const { Creator } = require('../../models');

router.get('/test', (reg, res) => res.send(`API express routes working for creator.`))

router.get('/', async (req, res) => {
  Creator.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

router.get('/:id', async (req, res) => {

  Creator.findOne({ _id: req.params.id })
    .select('-__v')
    .then((creator) =>
      !creator
        ? res.status(404).json({ message: 'No creator with that ID' })
        : res.json(creator)
    )
    .catch((err) => res.status(500).json(err));

});

router.post('/', async (req, res) => {
  Creator.create(req.body)
  .then((dbCreatorData) => res.json(dbCreatorData))
  .catch((err) => res.status(500).json(err));
});

router.put('/:id', async (req, res) => {

  Creator.findOneAndUpdate(
    { _id: req.params.id },
    { creatorname: req.body.creatorname,
      email: req.body.email, 
      $push: { friends: req.body.friends } },
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
  Creator.findOneAndDelete(
    { _id: req.params.id },
    (err, result) => {
      if (result) {
        res.status(200).json({ message: `${result.creatorname} deleted!`});
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});

module.exports = router;