import express from 'express'
import movieController from '../controllers/movieController.js'

// Create a dedicated router for user-related endpoints
const routes = express.Router()

// Assign controller functions to routes
routes.get('/search', movieController.searchMovies)
routes.get('/movies/:id', movieController.getMovieDetails)

export default routes