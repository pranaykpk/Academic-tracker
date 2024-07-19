import mongoose from "mongoose"

const user = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},
{Collection:"user-data"}
)

export default mongoose.model("user",user)