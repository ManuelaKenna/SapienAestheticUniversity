const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new Schema({
  adminname: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    bcrypt: true,
  }
},
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
);

adminSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

adminSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

// // Create a virtual property `friendCount` that gets the amount of friends per post
// adminSchema.virtual('friendCount').get(function () {
//   return this.friends.length;
// });

const Admin = model('admin', adminSchema);

module.exports = Admin;