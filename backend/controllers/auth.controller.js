import User from "../models/user.model.js";

export const signup = async(req, res) => {
    try {
        const {fullName, username, password, confirmPassword} = req.body;

        // check if the password and confirmPassword are the same
        if(password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        // check if the user already exists
        const User = await User.findOne({username});
        // if the user exists, return an error
        if(User) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // HASHED PASSWORD


        // profile pics
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // if the user does not exist, create a new user

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        // save the user to the database
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",// to be commented later
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const login = (req, res) => {
    console.log("loginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
};