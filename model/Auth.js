const mongoose = require('mongoose');

const authSchema = new mongoose.Schema(
    {        
        name:{
            type: String,
            required: true,
        },
        username:{
            type: String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type: String,
            required: true,
            
        },
        students:{
            type:mongoose.Types.ObjectId,
            ref:"students",
            required: true,
        },
    },{timestamps:true}
)
const Auth = mongoose.model('Auth',authSchema);
module.exports = Auth;