// generate jwt(json web token) token
import jwt from 'jsonwebtoken'; 

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, "" + process.env.JWT_KEY, {
        expiresIn: '15d',
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // to prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development" // cookie will only be set on a secure connection
    });
}

export default generateTokenAndSetCookie;