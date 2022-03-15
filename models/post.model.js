const mongoose =require ('mongoose')

postSchema=mongoose.Schema({
    title:String,
    text:String,
    currentData:Date,
    userID:{type:mongoose.Schema.Types.ObjectId , ref:'user'}
 
})

module.exports = mongoose.model('post',postSchema)