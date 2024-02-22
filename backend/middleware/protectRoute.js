// this file protects the routes from unauthorized access
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

        // if no token is provided, return an error
		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

        // verify the token
		const decoded = jwt.verify(token, "" + process.env.JWT_SECRET);

        // if the token is invalid, return an error
		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

        // if the token is valid, find the user and attach the user object to the request object
		const user = await User.findById(decoded.userId).select("-password");

        // if the user is not found, return an error
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

        // attach the user object to the request object
		req.user = user;

		next();// call the next middleware that is sendMessage
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;