import express, { Router } from 'express'
import notes from './routes/notes.js'
import dotenv from 'dotenv'
import {connect_DB} from './config/db.js'
dotenv.config({
    path:"./config/config.env"
})
const app = express()

// Middleware to parse JSON bodies
// This is necessary to handle JSON requests
app.use(express.json())

// use routes
app.use("/api/v1/notes", notes )



app.listen(3000, () => {
    try {
        connect_DB()
        console.log("connected to DB");    
        console.log('Server is running on http://localhost:3000')
        
    } catch (error) {
        console.log(error.msg);
        process.exit(1)
        
    }
})