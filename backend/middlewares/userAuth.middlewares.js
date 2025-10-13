import jwt from 'jsonwebtoken'

const userAuth = (req,res,next)=>{

    const {token} = req.headers;
    if(!token) {
      return res.json({success:false, message: 'Not authorized login again.'})
    }

    try {
        
        const token_decoded = jwt.verify(token,process.env.ACCESS_SECRET_KEY)
        req.body.userId = token_decoded.userId
        next()


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export  {userAuth};