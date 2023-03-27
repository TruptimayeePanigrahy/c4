const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String,
    age:Number,
    city:String,
    is_married:Boolean
},{
    versionkey:false
})

const usermodel=mongoose.model("posts",userSchema)

module.exports={usermodel}