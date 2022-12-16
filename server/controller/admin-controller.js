const { Admin } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  async getSingleAdmin({ admin = null, params }, res) {
    const foundAdmin = await Admin.findOne({
      $or: [{ _id: admin ? admin._id : params.id }, { username: params.username }],
    });

    if (!foundAdmin) {
      return res.status(400).json({ message: 'Cannot find a admin with this id!' });
    }
    res.json(foundAdmin);
  },
  
  async createAdmin({ body }, res) {
    const admin = await Admin.create(body);
    if (!admin) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(admin);
    res.json({ token, admin });
  },

  async login({ body }, res) {
    const admin = await Admin.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!admin) {
      return res.status(400).json({ message: "Can't find this admin" });
    }

    const correctPw = await admin.isCorrectPassword(body.password);


    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }

    const token = signToken(admin);
    res.json({ token, admin });
  },

  async saveBook({ admin, body }, res) {
    console.log(admin);
    try {
      const updatedAdmin = await Admin.findOneAndUpdate(
        { _id: admin._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedAdmin);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async deleteBook({ admin, params }, res) {
    const updatedAdmin = await Admin.findOneAndUpdate(
      { _id: admin._id },

      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    if (!updatedAdmin) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedAdmin);
  },
};