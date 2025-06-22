import express, { Router } from 'express'
import notes from './routes/notes.js'
import dotenv from 'dotenv'
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
  console.log('Server is running on http://localhost:3000')
})