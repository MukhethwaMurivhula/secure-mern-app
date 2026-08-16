## 1. Project Description

This project is a structured backend API developed using Node.js and Express.js for INSY7314 ICE Task 2.

The API manages movie resources using a temporary in-memory data structure. The backend has been structured using separate route, controller, and middleware folders.

The project also includes input validation middleware, controlled Cross-Origin Resource Sharing (CORS), security middleware using Helmet, and a central error handler.

---

## 2. Technologies Used

* Node.js
* Express.js
* CORS
* Helmet
* dotenv
* Postman
* GitHub

---

## 3. Project Structure

```text
api/
├── controllers/
│   └── movieController.js
│
├── middleware/
│   ├── errorHandler.js
│   └── validateMovieInput.js
│
├── routes/
│   └── movieRoutes.js
│
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 4. Movie Resource

The API uses movies as the sample resource.

Each movie contains six attributes:

* ID
* Title
* Genre
* Director
* Year
* Rating

Example:

```json
{
  "id": "m1",
  "title": "Inception",
  "genre": "Science Fiction",
  "director": "Christopher Nolan",
  "year": 2010,
  "rating": 8.8
}
```

---

## 5. How to Install the Project

Open a terminal in the `api` folder and install the required dependencies:

```bash
npm install
```

---

## 6. How to Run the API

Run the backend using:

```bash
node index.js
```

The API uses port 4000 by default.

The base URL is:

```text
http://localhost:4000
```

---

## 7. API Routes and Endpoints

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| GET    | `/`               | Returns the API status         |
| GET    | `/health`         | Checks the server health       |
| GET    | `/api/movies`     | Retrieves all movies           |
| GET    | `/api/movies/:id` | Retrieves a movie using its ID |
| POST   | `/api/movies`     | Adds a new movie               |

### Root Route

```text
GET http://localhost:4000
```

### Health Route

```text
GET http://localhost:4000/health
```

### Get All Movies

```text
GET http://localhost:4000/api/movies
```

### Get Movie by ID

```text
GET http://localhost:4000/api/movies/m1
```

### Add a New Movie

```text
POST http://localhost:4000/api/movies
```

---

## 8. Sample POST Request Bodies

The following request bodies were used to add new movie items to the temporary in-memory collection.

### Movie 1

```json
{
  "title": "The Matrix",
  "genre": "Science Fiction",
  "director": "The Wachowskis",
  "year": 1999,
  "rating": 8.7
}
```

### Movie 2

```json
{
  "title": "Titanic",
  "genre": "Romance",
  "director": "James Cameron",
  "year": 1997,
  "rating": 7.9
}
```

### Movie 3

```json
{
  "title": "Avatar",
  "genre": "Science Fiction",
  "director": "James Cameron",
  "year": 2009,
  "rating": 7.8
}
```

### Movie 4

```json
{
  "title": "The Lion King",
  "genre": "Animation",
  "director": "Roger Allers",
  "year": 1994,
  "rating": 8.5
}
```

### Movie 5

```json
{
  "title": "Gladiator",
  "genre": "Action",
  "director": "Ridley Scott",
  "year": 2000,
  "rating": 8.5
}
```

---

## 9. Input Validation

Input validation is implemented using the `validateMovieInput.js` middleware.

The middleware checks that:

* All required movie fields are provided.
* Title is a text value.
* Genre is a text value.
* Director is a text value.
* Year is a whole number.
* Rating is a number.
* The year is within a valid range.
* The rating is between 0 and 10.
* Title length is within the allowed range.
* Genre length is within the allowed range.
* Director length is within the allowed range.

Examples of invalid requests tested in Postman include:

### Missing Required Fields

```json
{
  "title": "Test Movie"
}
```

### Invalid Year

```json
{
  "title": "Test Movie",
  "genre": "Action",
  "director": "Test Director",
  "year": "2020",
  "rating": 8
}
```

### Invalid Rating

```json
{
  "title": "Test Movie",
  "genre": "Action",
  "director": "Test Director",
  "year": 2020,
  "rating": 15
}
```

---

## 10. Error Handling

The API uses a central error-handling middleware located in:

```text
middleware/errorHandler.js
```

The middleware provides a consistent response when an error occurs.

An example of an invalid movie request is:

```text
GET http://localhost:4000/api/movies/m999
```

This returns an error response when the requested movie does not exist.

---

## 11. Controlled CORS

The API uses the CORS middleware to control which client origin can access the backend.

The allowed client origin is configured using the `CLIENT_ORIGIN` environment variable.

The API allows the following HTTP methods:

* GET
* POST
* PUT
* DELETE

---

## 12. Security

The backend also uses Helmet to add security-related HTTP headers.

The Express `x-powered-by` header is disabled to reduce unnecessary information exposure.

The API also supports HTTP and optional HTTPS configuration through environment variables.

---

## 13. Data Storage

The movie data is stored temporarily in memory.

This means that the data is not stored in a permanent database. Any newly added movies will be lost when the server is restarted.

---

## 14. Postman Testing

The API endpoints were tested using Postman.

The following tests were performed:

1. GET root route.
2. GET health route.
3. GET all movies.
4. GET movie by ID.
5. POST a new movie.
6. Add at least five new movies.
7. Test an invalid movie ID.
8. Test missing required fields.
9. Test invalid year.
10. Test invalid rating.
11. Test other input validation checks.



## 15. Conclusion

The project demonstrates a structured Express backend API with separate routes, controllers, middleware, input validation, controlled CORS configuration, security middleware, and centralized error handling. The movie API was tested using Postman to verify the required endpoints and validation functionality.
