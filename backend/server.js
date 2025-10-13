import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/connection.db.js'
import connectCloudinary from './config/cloudinary.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'

const app = express()
const port = process.env.PORT || 8080
connectDB()
connectCloudinary();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//api endpoints
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)
app.use('/api/cart',cartRoutes)

app.get('/',(req,res)=>{
    res.send("Api is Working");
})

app.listen(port, ()=> console.log("The server is running at port :"+port)
)