const movies = [
  {
    id: 'm1',
    title: 'Inception',
    genre: 'Science Fiction',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8
  },
  {
    id: 'm2',
    title: 'The Dark Knight',
    genre: 'Action',
    director: 'Christopher Nolan',
    year: 2008,
    rating: 9.0
  },
  {
    id: 'm3',
    title: 'Interstellar',
    genre: 'Science Fiction',
    director: 'Christopher Nolan',
    year: 2014,
    rating: 8.7
  }
];

// Get all movies
const getAllMovies = (req, res) => {
  res.status(200).json({
    count: movies.length,
    data: movies
  });
};

// Get a movie by ID
const getMovieById = (req, res) => {
  const { id } = req.params;

  // Validate the movie ID format
  if (!/^m\d+$/.test(id)) {
    return res.status(400).json({
      error: 'Invalid movie ID format'
    });
  }

  const movie = movies.find((item) => item.id === id);

  if (!movie) {
    return res.status(404).json({
      error: 'Movie not found'
    });
  }

  res.status(200).json({
    data: movie
  });
};

// Create a new movie
const createMovie = (req, res) => {
  const {
    title,
    genre,
    director,
    year,
    rating
  } = req.body;

  const newMovie = {
    id: `m${movies.length + 1}`,
    title,
    genre,
    director,
    year,
    rating
  };

  movies.push(newMovie);

  res.status(201).json({
    message: 'Movie created',
    data: newMovie
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie
};