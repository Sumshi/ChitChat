import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        // fetch all users from the database that is not the logged in user
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } });

        // send the filtered users to the client
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}