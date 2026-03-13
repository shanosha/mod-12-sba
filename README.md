# Movie Finder API

This RESTful API server runs on Express.js. It does not store any data itself. Instead, it acts as an intermediary, fetching movie information from a public external movie database. This API then provides cleaned-up, relevant data to the front-end application.

## Setup

- Clone the repository.

```
git clone https://github.com/shanosha/mod-12-sba.git
```

- Navigate to the directory.

```
cd mod-12-sba
```

- Install the node packages.

```
npm install
```

- Run the Express server using nodemon.

```
npm run dev
```

- Open the server URL in a browser.

## Using the RESTful API Server

Test the API endpoints using a tool like Postman or by visiting the URLs in your browser. Here are two endpoints to test:
- /api/search?title=batman
- /api/movies/tt0372784