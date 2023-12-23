const asyncHandler = require("express-async-handler")

//@desc register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    res.json({
        message:"Register Route"
    })
})

//@desc login user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({
        message:"user successfully login"
    });
})

//@desc current user
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json({
        message:"current user details exposed"
    })
} )

module.exports = {
    registerUser,
    currentUser,
    loginUser
}