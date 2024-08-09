const models = require('../models')
const User = require('../models/User')
const bcrypt = require('bcrypt')

// With the provided username and password in the request, try to log the user in
const loginUser = async (request, response) => {
    const username = request.body.username
    const password = request.body.password

    try {
        const match = await User.findOne({username: username})
        if (match) {
            if (await bcrypt.compare(password, match.password)) {
                match.points += 5;
                await match.save();
                response.json({
                    status: "success",
                    username: match.username,
                    profilePicColour: match.profilePicColour,
                    points: match.points,
                    token: match._id
                })
                return
            } else {
                console.log('password wrong')
                response.json({
                    status: "unsuccessful",
                    message: "Incorrect Password"
                })
                return
            }
        } else {
            console.log('account not found')
            response.json({
                status: "unsuccessful",
                message: "User not found"
            })
            return
        }
    } catch(err) {
        console.log(err)
    }

    response.json({status: "unsuccessful"})
}

// Get the username information based on the provided Authorization token. 
const getUser = async (request, response) => {
    const authHeader = request.get('Authorization')
    if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
        const token = authHeader.substring(6)
        try {
            // this will throw an error if token isn't of the right format
            const match = await models.User.findById(token)  
            if (match) {
                response.json({
                    status: "success",
                    username: match.username,
                    token: match._id
                })
                return
            }
        } catch(err) { }

    }
    response.json({status: "unregistered"}) 
    return
}

const validUser = async (request, reponse) => {
    try {
        var authHeader = request.get('Authorization')
        if (!authHeader) {
            authHeader = request.body.Authorization
        }
        if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
            const token = authHeader.substring(6)        
            const match = await models.User.findOne({_id: token})  

            if (match) {
                return match
            }
        }
    } catch {}
    return false
}

const getUserProfile = async (request, response) => {
    const authHeader = request.get('Authorization')
    const profile = request.params.id
    if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
        const match = await models.User.findOne({username: profile})  
        if (match) {
            response.json({
                username: match.username,
                email: match.email
            })
            return
        }
    }
    return false
}

// const registerUser = async (request, response) => {
//     let newUser
//     await bcrypt.hash(request.body.password,10).then(passwordHash => {
//         newUser = new User({
//             username: request.body.username,
//             password: passwordHash,
//             email: request.body.email,
//             colour: request.body.colour
//         })
//     })
//     const returned = await newUser.save()
//         .catch((err) => {
//             console.log(err)
//             response.json({
//                 status: "username taken",
//                 error: err})
//             })
//     if (returned) {
//         if (newUser._id) {
//             response.json({
//                 status: "success",
//                 username: returned.username,
//                 token: returned._id
//             })
//             return
//         }
//     }
// }

const registerUser = async (request, response) => {
    try {
      const { username, password, email } = request.body;
  
      // Check if the username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        console.log("Username taken")
        response.json({
          status: "username taken",
          message: "Username is already taken",
        });
        return;
      }
  
      // Hash the password so that it's saved as a hash in the database
      const passwordHash = await bcrypt.hash(password, 10);
  
      // Generate random color
      const profileColor = getRandomColor();

      // Create a new user
      const newUser = new User({
        username,
        password: passwordHash,
        email,
        profileColor,
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      response.json({
        status: "success",
        username: savedUser.username,
        token: savedUser._id,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "An error occurred" });
    }
  };


module.exports = { validUser, getUser, loginUser, getUserProfile, registerUser }