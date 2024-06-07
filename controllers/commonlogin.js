const User = require('../models/usersignup')
const saltRounds = 10
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY;

const Signup =async (req, res) =>{
   try {
        const {username,email,password} =req.body
        const user = await User.findOne({email})
        if(user){
            res.json({
                success:false,
                message:"User already exists"
            })
        } else {

            const hashedpass = await bcrypt.hash(password,saltRounds)
            const newUser = new User({
                username,
                email,
                password :hashedpass
            })
            const saved= await newUser.save()
            
            const token = jwt.sign(
                {
                    username,
                    email,
                    id:saved._id,
                    isAdmin:saved.isAdmin
                },
                secretKey,
                { expiresIn: '1h' }
            );

            if(saved){
                res.json({
                    success:true,
                    message:"User created successfully",
                    user:newUser,
                    token 
            })
            } else {
                res.json({
                    success:false,
                    message:"Failed to create user"
                    })
            }
        }
   }
    catch (err) {
        console.log(err)
        res.json({
            success:false,
            message:"Failed to create user"
        })
    } 
}

const Login = async (req, res) =>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if(isMatch){
                const token = jwt.sign(
                    {
                        email,
                        id:user._id,
                        isAdmin:user.isAdmin
                    },
                    secretKey,
                    { expiresIn: '1h' }
                );
                res.json({
                    success:true,
                    message:"Logged in successfully",
                    token,
                    user
                    })
            } else {
                res.json({
                    success:false,
                    message:"Incorrect password"
                    })
            }
        } else {
            res.json({
                success:false,
                message:"User not found"
            })
        } 
        
    } 
    catch (err) {
        console.log(err)
        res.json({
            success:false,
            message:"Failed to login"
            })
    }
}





module.exports ={Signup,Login}