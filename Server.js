const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const server = express();
let port = process.env.PORT || 5000;

// database connection
mongoose.connect('mongodb://localhost/friends')
  .then(() => {
    console.log('connected to database!');
  })
  .catch(err => {
    console.log(err);
  })

// mount middleware
server.use(cors())
server.use(helmet());
server.use(express.json());

// sanitation check
server.get('/', (req, res) => {
  res.json({status: 'connected'})
})

// server routes
// server.use('/user', );
// server.use('/poem', );

//port listener
server.listen(port , () => {
  console.log(`server listening on port ${port}`);
})
