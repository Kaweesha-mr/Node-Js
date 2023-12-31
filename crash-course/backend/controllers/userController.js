const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
//to use model here we have to import the created model
const User = require("../models/userModel")



const jwt = require("jsonwebtoken")

//@desc register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body;

    //check if the fields are empty
    if(!username || !email || !password){
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    //check if the user already exists
    const userAvailable = await User.findOne({email});
    //if user already exists then throw an error
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed Password",hashedPassword);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });

    console.log(`user Created ${user}`);

    //if data is valied this will be printed
    if(user) {
        res.status(201).json({
            _id:user.id,
            email: user.email
        });
    }
    //else this will be printed
    else{
        res.status(400);
        throw new Error("User Data is not validated")
    }
    res.json({
        message:"Register Route"
    })
})

//@desc login user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async (req,res) => {

    const {email,password} = req.body;

    if(!email || !password){
        req.status(400);
        throw new Error("All Fields are mandatory");
    }

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            //payload which will embed in token
            user:{
                username : user.username,
                email: user.email,
                id: user.id,
            },
        },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "15m"}
        )
        res.status(200).json({accessToken});
    }else {
        res.status(401)
        throw new Error("Email or password is not valid")
    }
})

//@desc current user
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json(
        req.user
    )
} )

module.exports = {
    registerUser,
    currentUser,
    loginUser
}