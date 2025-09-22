import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

//api endpoints

app.get('/',(req,res)=>{
    res.send("Api is Working");
})

app.listen(port, ()=> console.log("The server is running at port :"+port)
)