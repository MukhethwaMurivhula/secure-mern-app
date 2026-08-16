const validateMovieInput = (req, res, next) => {
  const {
    title,
    genre,
    director,
    year,
    rating
  } = req.body;

  // Check that all required fields are provided
  if (
    !title ||
    !genre ||
    !director ||
    year === undefined ||
    rating === undefined
  ) {
    return res.status(400).json({
      error: 'All movie fields are required'
    });
  }

  // Check text fields
  if (
    typeof title !== 'string' ||
    typeof genre !== 'string' ||
    typeof director !== 'string'
  ) {
    return res.status(400).json({
      error: 'Title, genre and director must be text values'
    });
  }

  // Check year
  if (typeof year !== 'number' || !Number.isInteger(year)) {
    return res.status(400).json({
      error: 'Year must be a whole number'
    });
  }

  // Check rating
  if (typeof rating !== 'number') {
    return res.status(400).json({
      error: 'Rating must be a number'
    });
  }

  // Check year range
  if (year < 1888 || year > new Date().getFullYear()) {
    return res.status(400).json({
      error: 'Year must be between 1888 and the current year'
    });
  }

  // Check rating range
  if (rating < 0 || rating > 10) {
    return res.status(400).json({
      error: 'Rating must be between 0 and 10'
    });
  }

  // Trim text values
  const trimmedTitle = title.trim();
  const trimmedGenre = genre.trim();
  const trimmedDirector = director.trim();

  // Check text lengths
  if (trimmedTitle.length < 2 || trimmedTitle.length > 100) {
    return res.status(400).json({
      error: 'Title must be between 2 and 100 characters'
    });
  }

  if (trimmedGenre.length < 2 || trimmedGenre.length > 50) {
    return res.status(400).json({
      error: 'Genre must be between 2 and 50 characters'
    });
  }

  if (trimmedDirector.length < 2 || trimmedDirector.length > 100) {
    return res.status(400).json({
      error: 'Director must be between 2 and 100 characters'
    });
  }

  // Store cleaned data
  req.body = {
    title: trimmedTitle,
    genre: trimmedGenre,
    director: trimmedDirector,
    year,
    rating
  };

  next();
};

module.exports = validateMovieInput;