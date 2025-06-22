import express from 'express'
import dotenv from 'dotenv'
dotenv.config({
    path:"./config/config.env"
})
const app = express()

// Middleware to parse JSON bodies
// This is necessary to handle JSON requests
app.use(express.json())

app.get('/salam', (req, res) => {
  res.send('Salam 3alikom!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})