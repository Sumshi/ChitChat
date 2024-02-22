// this file contains the functionality for sending messages to the server
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;// get the message from user input
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

    // find the conversation between the sender and receiver
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
    })

    // if the conversation does not exist, create a new conversation
    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        });
    }

    // create a new message
    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    // push the new message to the conversation
    if (newMessage) {
        conversation.messages.push(newMessage._id);
    }

    // SOCKET IO REALTIME CONVERSATION


    
    // save the conversation and the new message, this way it is inefficient
    // await conversation.save();
    // await newMessage.save();

    // run both processes in parallel, this way it is efficient
    await Promise.all([conversation.save(), newMessage.save()]);

    // return the new message
    res.status(201).json({newMessage});

    } catch (error) {
        console.log("error in sendMessage controller: ", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
};
