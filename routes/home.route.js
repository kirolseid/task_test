const app = require('express').Router();
const auth =require('../middleware/auth');


app.get('/home',auth ,async (req, res) => {
    const userID = req.session.userID
    // console.log(userID);
  
      res.render('home.ejs',{ Name:req.session.Name})
      
});



app.get('/logOut',(req, res) => {
    req.session.destroy()
    res.redirect('/login')
    
});

module.exports=app