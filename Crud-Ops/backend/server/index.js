const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserModel = require('./models/users')

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

app.post('/createUser', (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// !database connection ended