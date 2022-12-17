const { Creator } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleCreator({ user = null, params }, res) {
        const foundCreator = await Creator.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundCreator) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundCreator);
    },
  
    async createCreator({ body }, res) {
        const user = await Creator.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
  
    async login({ body }, res) {
        const user = await Creator.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async addContent({ user, body }, res) { 
        console.log(user);
        try {
            const updatedContent = await Creator.findOneAndUpdate(
                { _id: user._id },
                { $push: { savedContent: body } },
                { new: true }
            );
            return res.json(updatedContent);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async saveContent({ user, body }, res) {
        console.log(user);
        try {
            const updatedCreator = await Creator.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedContent: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedCreator);
        } catch (err) {
        console.log(err);
        return res.status(400).json(err);
        }
    },
  
    async removeContent({ user, params }, res) {
        const updatedCreator = await Creator.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedContent: { contentId: params.contentId } } },
            { new: true }
        );
        if (!updatedCreator) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedCreator);
    },

};