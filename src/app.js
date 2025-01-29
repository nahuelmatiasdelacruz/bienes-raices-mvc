require('dotenv').config();
const express = require('express');
const path = require('path');
const userRoutes = require('./routes/user.routes');
const db = require('./config/db');

const app = express();
const port = 3000;

app.use('/auth',userRoutes);

db.authenticate()
  .then(()=>{
    console.log('DB connection was succeful');
  }).catch(()=>{
    console.log(e);
  })

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));

app.listen(port,()=>{console.log('Server running on PORT: ', port)});