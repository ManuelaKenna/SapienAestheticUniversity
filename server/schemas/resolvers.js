const { User } = require(`../models`);
const { Content } = require(`../models`);
const { signToken } = require(`../utils/auth`);
const { AuthenticationError } = require(`apollo-server-express`);
const stripe = require('stripe'); 

const resolvers = {
    Query: {
        User: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select(`-_v -password`)
                return userData;
            }
            throw new AuthenticationError(`The user is not logged in`);
        },
        allContent: async(parent, { title }) => {
            const params = {};
            if (title) {
                params.title = title;
            }
            return await Content.findById(params).populate('title');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError(`Email or password was incorrect, please try again`)
            }
            const correctPass = await user.isCorrectPassword(password);
            if(!correctPass) {
                throw new AuthenticationError(`Email or password was incorrect, please try again`)
            }
            const token = signToken(user);
            return { token, user };
        },
        addContent: async (parent, args , context) => {
            if (context.content) {
                const updatedContent = await Content.findOneAndUpdate(
                    { _id: context.user_id },
                    { $push: { savedContent: args.input }},
                    { new: true }
                )
                return updatedContent;
            }
        },
        saveContent: async (parent, args , context) => {
            if (context.content) {
                const updatedContent = await Content.findOneAndUpdate(
                    { _id: context.user_id },
                    { $addToSet: { savedContent: args.input }},
                    { new: true }
                )
                return updatedContent;
            }
        },
        removeContent: async (parent, args, context) => {
            if (context.content) {
                const updatedContent = await Content.findOneAndUpdate(
                    { _id: context.user_id },
                    { $addToSet: { savedContent: args.contentId }},
                    { new: true }                    
                );
                return updatedContent;
            }
            throw new AuthenticationError(`The user must log in`)
        }
    }
}

module.exports = resolvers;