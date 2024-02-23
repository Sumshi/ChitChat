import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

//eg: http://localhost:5000/api/messages/65d718c43c1f065b37d67c6a
router.get("/:id", protectRoute, getMessage);//get all messages of a user

// eg: http://localhost:5000/api/messages/send/65d718c43c1f065b37d67c6a
router.post("/send/:id", protectRoute, sendMessage);// send a message to a user

export default router;
