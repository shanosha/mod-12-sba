import axios from 'axios'

// Add your API key inside a .env file in the root directory
const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Create an axios configuration instance and interceptors for logging
const movieClient = axios.create({
    baseURL: `http://www.omdbapi.com/`
})
movieClient.interceptors.request.use(request => {
    console.log(`OMDB API - Requested URL: ${request.baseURL}${request.url}`)
    return request
})
movieClient.interceptors.response.use(response => {
    console.log(`OMDB API - Response Status: ${response.status}`)
    return response
})

// Use the OMDB API to find a specified movie title
const searchMovies = async (req, res) => {
    console.log(`${req.method} ${req.url}`)
    try {

        // If the user did not specify a title query parameter, return an error
        if(!req.query.title) {
            return res.status(400).json({ error: 'Title query parameter is required' })
        }

        // Await the axios get request
        const response = await movieClient.get(`?apikey=${OMDB_API_KEY}&s=${req.query.title}`)
        
        // If the response does not include a movie, return an error
        if(response.data.Response == "False") {
            return res.status(404).json({ error: response.data.Error })
        }

        res.status(200).json(response.data.Search)
    }
    catch (err) {
        res.status(502).json({ error: 'A network error occurred' })
    }
}

// Use the OMDB API to find a specified movie ID
const getMovieDetails = async (req, res) => {
    console.log(`${req.method} ${req.url}`)
    try {

        // Await the axios get request
        const response = await movieClient.get(`?apikey=${OMDB_API_KEY}&i=${req.params.id}`)
        
        // If the response does not include a movie, return an error
        if(response.data.Response == "False") {
            return res.status(404).json({ error: response.data.Error })
        }

        // Reformat the movie data returned
        const transformedData = {
            Title: response.data.Title,
            Year: response.data.Year,
            Runtime: response.data.Runtime,
            Genre: response.data.Genre,
            Type: response.data.Type,
            imdbID: response.data.imdbID
        }

        res.status(200).json(transformedData)
    }
    catch (err) {
        res.status(502).json({ error: 'A network error occurred' })
    }
}

export default { searchMovies , getMovieDetails }