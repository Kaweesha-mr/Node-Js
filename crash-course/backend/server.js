const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const port = process.env.PORT;
const errorHandler = require('../backend/middleware/errorHandler')


//!this helps to get the data from the body
//todo: when ever need to use middleware have to app.use it main program file
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})
