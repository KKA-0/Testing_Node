const userModel = require('./../models/auth.schema')



exports.user = async (req, res) => {
    const { email, username, password } = req.body
    console.log(req.body)
    const user = await userModel.findOne({ email })
    if(user){
        res.status(200).json({msg: "email already exist"})
    }else{
        await userModel.create({email, username, password })
        res.status(201).json({
            msg: "User Created"
        })
    }
}