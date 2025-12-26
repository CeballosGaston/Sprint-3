// const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((result) => result.director);
  // console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((m) => m.director === director);

  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const result = array.filter((m) => m.director === director);
  const total = result.reduce((total, movie) => total + movie.score, 0);
  const average = total / result.length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map((result) => result.title);
  let sortedResult = result.sort((a, b) => a.localeCompare(b));
  return sortedResult.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let sortedResult = [...movies];
  sortedResult.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      let n = a.title.localeCompare(b.title);
      return n;
    }
  });
  return sortedResult;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const result = array.filter((m) => m.genre === genre);
  const total = result.reduce((total, movie) => total + movie.score, 0);
  const average = total / result.length;
  if (result.length === 0) {
    return 0;
  }
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map((movie) => {
    const stringToNumbers = movie.duration.match(/\d+/g);

    return {
      ...movie,
      duration:
        stringToNumbers.length === 2
          ? Number(stringToNumbers[0]) * 60 + Number(stringToNumbers[1])
          : Number(stringToNumbers[0]) * 60
    };
  });

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
