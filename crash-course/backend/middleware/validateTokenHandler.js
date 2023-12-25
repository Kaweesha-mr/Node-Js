const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const {verify} = require("jsonwebtoken");


const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            //this will add the values to req objects user property
            req.user = decoded.user;

            //this code line tell the program to run the next thing it has to do
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("user is not authorized or missing token")
        }
    }
})


module.exports = validateToken