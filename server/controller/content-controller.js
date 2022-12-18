const { User, Content } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {

    async saveContent({ user, body }, res) {
        console.log(`${body} made it here!`)
        // console.log(user);
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { studentcontent: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async removeContent({ user, params }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedContent: { contentId: params.contentId } } },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
    },
};