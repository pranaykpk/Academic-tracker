import mongoose from "mongoose"

const syllabus= mongoose.Schema({
    name:String
},
)

export default mongoose.model("syllabus",syllabus)