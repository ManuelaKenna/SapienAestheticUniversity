const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        index: { unique: true } 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Must match an email address!'],
    },
    password: { 
        type: String, 
        required: true 
    }
},
// {
//   toJSON: {
//     virtuals: true,
//   },
//   id: false,
// }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

// // Create a virtual property `friendCount` that gets the amount of friends per post
// userSchema.virtual('friendCount').get(function () {
//   return this.friends.length;
// });

const User = model('user', userSchema);

module.exports = User;