const app = require('express').Router();
const validatin = require('../validation/register.validation')
const { validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');


app.get('/',(req, res) => {
    if(req.session.isLoggin){
        res.redirect('/home')
    }else{
    res.render('registration.ejs',{errors:req.flash('errors'),oldInputs:req.flash('oldinput')[0],isexsit:req.flash('isExist')})

    }
    
});

app.post('/handelSignUp',validatin,async(req, res) => {
    // console.log(req.body);
     const errors = validationResult(req)
    const{fname,lname,userName,email,password}=req.body

     if(errors.isEmpty()){
         //insert to db
        const user =await userModel.findOne({email})
        if(user){
            req.flash("isExist",true)
            req.flash('oldinput',{fname,lname,userName,email,password})

           res.redirect('/')
        }else{
            bcrypt.hash(password, 7, async function(err, hash) {
                await userModel.insertMany({fname,lname,userName,email,password:hash})
            });
           res.redirect('/login')

        }

     }else{
         //feedback error

         req.flash('errors',errors.array())
         req.flash('oldinput',{fname,lname,userName,email,password})
         res.redirect('/')

     }
    

   
    
});

module.exports=app