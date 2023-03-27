const express=require("express")
const mongoose=require("mongoose")
const {postmodel}=require("../models/post")
const Router=express.Router()

Router.get("/",async(req,res)=>{
try {
const {userid}=req.body
const {device=["Laptop","Tablet","Mobile"]}=req.query
const posts=await postmodel.find({$and:[{userid},{device:{$in:device}}]})

res.json({posts,msg:"Your posts"})

    } catch (error) {
    res.send("something is wrong")
}
})


Router.get("/",async(req,res)=>{
    const token=req.header.authorization
    const decoded=jwt.verify(token,"trupti")

    try {
        if(decoded){
            let user=await postmodel.find({"userid":decoded.userid})
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).send({"msg":"wrong"})
    }
})

Router.post("/add",async(req,res)=>{
    try {
        const data=req.body
        const newpost=new postmodel(data)
        await newpost.save()
        res.status(200).send({msg:"post added successfully"})

    } catch (error) {
        res.status(400).send({msg:"failed"})
    }
})

Router.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    let newuser=req.body
    try {
        await postmodel.findByIdAndUpdate({_id:id},newuser)
        res.status(200).send({msg:"user updated successfully!!"})
    } catch (error) {
        res.status(400).send({msg:"failed"})
    }
    
})

Router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await postmodel.findByIdAndDelete({_id:id})
        res.status(200).send({msg:"user deleted successfully!!"})
    } catch (error) {
        res.status(400).send({msg:"failed"})
    }
})








module.exports={Router}