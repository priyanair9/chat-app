const mongoose = require("mongoose")

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const userSchema = new mongoose.Schema ({
    email: String,
    username: {
        type: String
    },
    password: {
        type: String
    },
    profileColor: { 
        type: String,
        default: getRandomColor
    }
})

//Converts userSchema to json when retrieved and changes properties.
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = document._id.toString()
      // delete returnedObject._id
      delete returnedObject.__v
    }
  })

const User = mongoose.model('User', userSchema)

module.exports = User