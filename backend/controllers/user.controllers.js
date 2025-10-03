import validator from 'validator'
import bcrypt from "bcrypt"
import userModel from "../models/user.models.js"
import jwt from 'jsonwebtoken'

const createToken = (id) =>{
    return jwt.sign({id},process.env.ACCESS_SECRET_KEY)
}

const userLogin = async(req,res)=>{

   try {
     const {email, password} = req.body;
     const user = await userModel.findOne({email});
 
     if(!user){
         return res.json({success:false, message:"User doesn't exists"})
     }
 
     const isMatch = await bcrypt.compare(password,user.password)
 
     if(isMatch){
         const token = createToken(user._id)
         res.json({success:true, token})
     }else{
         res.json({success:false, message: 'Invalid credentials'})
     }
   } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
   }

}


const userRegister = async(req,res)=>{
    try {
        
        const { name, email, password } = req.body;

        const userExists = await userModel.findOne({email});
        if(userExists){
            return res.json({success: false, message: "User already exists."})
        }

        if(!validator.isEmail(email)){
            return res.json({ success: false , message: "Please enter a valid Email."})
        }

        if(password.length< 8){
            return res.json({ success: false , message: "Please enter a strong password. "})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true, user,token})

    } catch (error) {
        console.log(error)
        res.json({success: false , message:error.messageq})
    }

}


const adminLogin = async(req,res)=>{

}

export { userLogin, userRegister, adminLogin}
