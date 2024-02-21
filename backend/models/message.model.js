import mongoose from "mongoose";

// create and define the message schema with the following fields:

/*senderId: the user ID of the sender, receiverId: the user ID of the receiver
message: the message content */

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,// the user ID of the sender
        ref: "User",
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });// include timestamps for createdAt and updatedAt


// create a model from the schema and export it
const Message = mongoose.model("Message", messageSchema);

export default Message;