const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Must match an email address!'],
    },
    password: { 
        type: String, 
        required: true 
    },
    studentcontent: [{
      type: Schema.Types.ObjectId,
      ref: 'content',
  }],
    //orders: [Order.schema]
    
},

);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

const User = model('user', userSchema);

module.exports = User;