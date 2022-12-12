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

userSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})

// // Create a virtual property `friendCount` that gets the amount of friends per post
// userSchema.virtual('friendCount').get(function () {
//   return this.friends.length;
// });

const User = model('user', userSchema);

module.exports = User;