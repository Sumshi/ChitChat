// conversation mdodel schema
/*members(participants): an array of user IDs that are part of the conversation
messages: an array of message IDs that are part of the conversation */

import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
}, { timestamps: true });

// create a model from the schema and export it
const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;