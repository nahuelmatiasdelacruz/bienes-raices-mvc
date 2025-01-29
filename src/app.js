const express = require('express');
const path = require('path');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = 3000;

app.use('/auth',userRoutes);

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));

app.listen(port,()=>{console.log('Server running on PORT: ', port)});