import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/connection.db.js'
import connectCloudinary from './config/cloudinary.js'

const app = express()
const port = process.env.PORT || 8080
connectDB()
connectCloudinary();

app.use(express.json())
app.use(cors())

//api endpoints

app.get('/',(req,res)=>{
    res.send("Api is Working");
})

app.listen(port, ()=> console.log("The server is running at port :"+port)
)