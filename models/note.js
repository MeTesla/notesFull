import mongoose from "mongoose";
// string : S majuscule
const noteSchema = new mongoose.Schema({
    userId:
        {
            type: String, 
            required : true
        },
    title:
    {
        type: String, 
        required: [true, 'Veuillez entrer un titre']
    },
    description:
    {
        type: String,
        required: [true, 'Veuillez entrer un titre']
    },
    color: 
    {
        type: String, 
        default : "#ffffff"
    },
    createdAt: 
    {
        type: Date, 
        default : Date.now
    }
})
export default mongoose.model("note", noteSchema)