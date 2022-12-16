const { Schema, model } = require('mongoose');

var contentSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: Number,
    },
    video: {
        type: String,
    },
    creator: [{
        type: Schema.Types.ObjectId,
        ref: 'creator',
    }],
},
    // {
    //   toJSON: {
    //     virtuals: true,
    //   },
    //   id: false,
    // }
);

// // Create a virtual property `friendCount` that gets the amount of friends per post
// userSchema.virtual('friendCount').get(function () {
//   return this.friends.length;
// });

const Content = model('content', contentSchema);

module.exports = Content;