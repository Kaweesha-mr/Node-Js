const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());



// !database connection started
mongoose.connect('mongodb+srv://admin:admin@crudnodejs.lnhklt5.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// !database connection ended