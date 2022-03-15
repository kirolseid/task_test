module.exports=(req,res,next)=>{
    if(req.session.isLoggin){
        next()
    }else{
        res.redirect('/login')
    }
}