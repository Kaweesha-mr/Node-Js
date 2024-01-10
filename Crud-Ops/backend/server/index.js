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
// !database connection ended

app.post('/createUser', (req, res) => {  
    
      UserModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });





  app.get('/',(req,res) => {
    UserModel.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
  })

  app.get('/getUser/:id',(req,res) => {
    const id = req.params.id;
    UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
    })

    app.put('/updateUser/:id', (req, res) => {
        const id = req.params.id;
        UserModel.findByIdAndUpdate(
            {_id: id},
            {name: req.body.name,
            email: req.body.email,
            age: req.body.age}
    
        )
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
        });
  

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

