console.log("Movie by vote and category");
let moviesByVote =
  "https://api.themoviedb.org/3/discover/movie?api_key=7d5fc19bc307c5d1ca314e7fb11bf51e&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1";
let moviesByRevenue =
  "https://api.themoviedb.org/3/discover/movie?api_key=7d5fc19bc307c5d1ca314e7fb11bf51e&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1";

Promise.all([movies(moviesByVote), movies(moviesByRevenue)]).then((values) => {
  const moviesByVoteTitles = getTitles(values[0]); // => contains our moviesByVote movie titles
  const moviesByRevenueTitles = getTitles(values[1]); // => contains our moviesByRevenue movie titles
  // const intersectingTitles = intersectionWithReduce(
  //   moviesByRevenueTitles,
  //   moviesByVoteTitles
  // );
  const joinTitles = ownReducerInerset(
    moviesByRevenueTitles,
    moviesByVoteTitles
  );
  console.log(joinTitles);
});

async function movies(url) {
  let response = await fetch(url);
  return response.json();
}

function getTitles(responseObject) {
  const responseArray = Object.values(responseObject);
  const movieData = responseArray[1];
  return movieData.map((movie) => {
    return movie.title;
  });
}

// const intersectionWithReduce = (...arrays) => {
//   const reducer = (accumalator, currentArray) =>
//     currentArray.filter((currentArrayItem) =>
//       accumalator.includes(currentArrayItem)
//     );
//   return reduce(arrays, reducer);
// };

// const joinWithReduce = (...arrays) => {
//   console.log("jojn array ---> ", arrays);
//   const reducer = (accumalator, currentArray) => {
//     console.log("acc in reducer --->", accumalator);
//     console.log("currentArray in reducer --->", currentArray);
//     return accumalator.concat(
//       currentArray.filter(
//         (currentArrayItem) => !accumalator.includes(currentArrayItem)
//       )
//     );
//   };
//   return reduce(arrays, reducer);
// };

// const reduce = (array, reducer, initValue) => {
//   console.log("array  --->", array);
//   let accumulator = !initValue ? array.shift() : initValue;
//   console.log("Accumalator --->", accumulator);
//   array.forEach((el) => (accumulator = reducer(accumulator, el)));
//   return accumulator;
// };

const onwReducerJoin = (...arrays) => {
  let arr0 = arrays[0];
  console.warn("arr0 --->", arr0);
  let arr1 = arrays[1];
  console.warn("arr0 --->", arr1);
  return arr0.concat(arr1.filter((el) => !arr0.includes(el)));
};

const ownReducerInerset = (...arrays) => {
  let arr0 = arrays[0];
  console.warn("arr0 --->", arr0);
  let arr1 = arrays[1];
  console.warn("arr0 --->", arr1);
  return arr0.filter((el) => arr1.includes(el));
};
