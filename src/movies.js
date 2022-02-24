// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
let newArr = [...movies]
newArr = movies.map(film => {
  return film.director;
})
return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if(!movies.length)
  return 0;

  let sumWithInitial = movies.reduce(
    (previousValue, currentValue) => {  
      let count = 0;
      if(currentValue.director === "Steven Spielberg" && currentValue.genre.includes("Drama"))
      count = 1;
      return previousValue + count
  }, 0);
  return sumWithInitial
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(!movies.length)
  return 0;
  let sum = movies.reduce((previousValue, currentValue,) => {
    // i got helped because i didn't make undefiend "and know i understand how i used"
    if(currentValue.score === undefined){
      return previousValue;
    }
    return previousValue + currentValue.score
   },0)/movies.length
    return   Math.round(sum * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(!movies.length)
  return 0;
  let genre = "Drama";
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes(genre);
  });
  return scoresAverage(dramaMovies);
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
 
  let arr = [...movies];

  const ordByYear = arr.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (b.year > a.year) return -1;
    else {
      return a.title.localeCompare(b.title);
    }
  });
  return ordByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let arr = [...movies];
arr = [...movies];
arr.sort((a,b)=>{
 return a.title.localeCompare(b.title)
})
let orderTitle = arr.map((item)=>{
  return item.title;
})
return orderTitle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let arr = [...movies]
  arr = movies.map((item)=>{
    return Number(item.duration)
    //i stop here that was hard to find other solution in google or git !
  })
  return arr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if(!movies.legnth)
  return null
  // let textBestYear = `The best year was ${} with an average score of ${}`;

  return textBestYear
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
