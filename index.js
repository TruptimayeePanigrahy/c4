const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const cors=require("cors")
const {connection}=require("./db")
const {postrote}=require("./routes/user")
const {Router}=require("./routes/post")
const { auth } = require("./middleware/auth")
const app=express()

app.use(express.json())
app.use(cors())
app.use("/users",postrote)
app.use(auth)
app.use("/posts",Router)





app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("connect DB")
} catch (error) {
    console.log(error)
}
console.log("app is running...")
})