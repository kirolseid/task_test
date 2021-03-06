const { check } = require("express-validator")

module.exports = [ 
    check('fname').matches(/[a-zA-Z]/),
    check('lname').matches(/[a-zA-Z]/),
    check('userName').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
    check('email').isEmail(),
    check('password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
    check('confirmPassword').custom((value,{req})=>{
       if(value!==req.body.password){
           return false
       }else{
           return true
       }
    })
]