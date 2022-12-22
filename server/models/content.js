const { Schema, model } = require('mongoose');

var contentSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    }
 },
);

const Content = model('content', contentSchema);

module.exports = Content;