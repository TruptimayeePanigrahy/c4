const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    title:String,
    body:String,
    device:{
        type:String,
        required:true,
        enum:["Laptop","Tablet","Mobile"]
    },
    no_of_comments:Number,
    userid:String
},{
    versionkey:false
})

const postmodel=mongoose.model("front",postSchema)

module.exports={postmodel}