const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization; 


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401);
        throw new Error("Token is missing or malformed");
    }

    const token = authHeader.split(" ")[1];

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //     if (err) {
    //         console.log("❌ JWT verify error:", err.message);
    //         res.status(401);
    //         return next(new Error("User is not authorized"));
    //     }

    //     console.log("✅ Decoded JWT:", decoded); // 打印 decoded，调试用
    //     req.user = decoded.user;
    //     next();
    // });
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401);
        throw new Error("User is not authorized");
    }
});

module.exports = validateToken;
