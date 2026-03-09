import 'dotenv/config'
import express from 'express'
import movieRoutes from './routes/movieRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000;

// Mount the router on a specific path
app.use('/api', movieRoutes)

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT)
})