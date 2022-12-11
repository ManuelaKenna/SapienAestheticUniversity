const { Schema, model } = require('mongoose');

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
  }
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

// custom method to compare and validate password for logging in
adminSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

const Admin = model('admin', adminSchema);

module.exports = Admin;