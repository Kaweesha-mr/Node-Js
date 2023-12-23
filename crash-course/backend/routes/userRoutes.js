const express = require("express")

const router = express.Router();



router.post("/register",(req,res) => {
    res.json({
        message:"Register Route"
    })
})

router.post("/login",(req,res) => {
    res.json({
        message:"user successfully login"
    });
});

router.get("/current",(req,res) => {
    res.json({
        message:"current user details exposed"
    })
})


module.exports = router;