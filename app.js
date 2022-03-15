const express = require('express')
const app = express()
const port = 3000
const path = require ('path')
const mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: 'mongodb+srv://admin:admin@cluster0.9aoqp.mongodb.net/task',
    collection: 'mySessions'
  });
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))
  app.use(flash())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use(express.static(path.join(__dirname,'public')))

app.use(require('./routes/registration.route'))
app.use(require('./routes/login.route'))
app.use(require('./routes/home.route'))



mongoose.connect('mongodb+srv://admin:admin@cluster0.9aoqp.mongodb.net/task', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(process.env.PORT || port, () => console.log(`server running ......`))