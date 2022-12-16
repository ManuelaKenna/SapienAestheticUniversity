
const { Creator } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  async getSingleCreator({ creator = null, params }, res) {
    const foundCreator = await Creator.findOne({
      $or: [{ _id: creator ? creator._id : params.id }, { username: params.username }],
    });

    if (!foundCreator) {
      return res.status(400).json({ message: 'Cannot find a creator with this id!' });

    }

    res.json(foundCreator);
  },

  async createCreator({ body }, res) {
    const creator = await Creator.create(body);

    if (!creator) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(creator);
    res.json({ token, creator });
  },

  async login({ body }, res) {
    const creator = await Creator.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!creator) {
      return res.status(400).json({ message: "Can't find this creator" });
    }

    const correctPw = await creator.isCorrectPassword(body.password);


    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }

    const token = signToken(creator);
    res.json({ token, creator });
  },

  async saveBook({ creator, body }, res) {
    console.log(creator);
    try {
      const updatedCreator = await Creator.findOneAndUpdate(
        { _id: creator._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedCreator);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async deleteBook({ creator, params }, res) {
    const updatedCreator = await Creator.findOneAndUpdate(
      { _id: creator._id },

      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    if (!updatedCreator) {
      return res.status(404).json({ message: "Couldn't find creator with this id!" });
    }
    return res.json(updatedCreator);
  },
};