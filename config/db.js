import mongoose from 'mongoose'

export const connect_DB = async(req, res)=>{
        const conn= await mongoose.connect(process.env.MONGODB_URI)
}