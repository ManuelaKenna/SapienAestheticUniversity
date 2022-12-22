const { User, Content } = require(`../models`);
const { signToken } = require(`../utils/auth`);
const { AuthenticationError } = require(`apollo-server-express`);

const resolvers = {
    Query: {
        getUser: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select(`-_v -password`)
                return userData;
            }
            throw new AuthenticationError(`The user is not logged in`);
        },

        // Content: async(parent, { title }) => {
        //     const params = {};
        //     if (title) {
        //         params.title = title;
        //     }
        //     return await Content.findById(params).populate('title');
        // },
        
        AllContent: async () => {
            return Content.find();
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            console.log(token)
            return { user, token };
        },
        login: async (parent, { email, password }) => {
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

    // saveContent: async (parent, { content } , context) => {
    //     if (context.user) {
    //         const updatedContent = await User.findOneAndUpdate(
    //             { _id: context.user_id },
    //             { $addToSet: { savedContents: content }},
    //             { new: true }
    //         )
    //         return updatedUser;
    //     }
    //     throw new AuthenticationError('You need to be logged in!')
    // },
        
    // removeContent: async (parent, { contentId }, context) => {
    //     if (context.user) {
    //         const updatedUser = await User.findOneAndUpdate(
    //             { _id: context.user_id },
    //             { $pull: { savedContents: {contentId: contentId} }},
    //             { new: true }                 
    //         );
    //         return updatedUser;
    //     }
    //     }
    }
};

module.exports = resolvers
