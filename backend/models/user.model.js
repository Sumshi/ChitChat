// fields for users
import mongoose from "mongoose";

// create a schema and put our fields in it
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePic: {
        type: String,
        default: ""
    },
});

// create a model from the  above schema
const User = mongoose.model("User", userSchema);

export default User;