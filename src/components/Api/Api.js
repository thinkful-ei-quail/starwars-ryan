// example searches:
// search for people with the letter "c":

// https://swapi-thinkful.herokuapp.com/api/people/?search=c

const SWAPI_BASE_URL = 'https://swapi-thinkful.herokuapp.com/api/';

function getStarWarsData(searchTerm) {
  console.log(searchTerm);
  return fetch(`${SWAPI_BASE_URL}people/?search=${searchTerm}`).then((res) => {
    return res.json();
  });
  // .then((data) => {
  //   console.log(data);
  // });
}

export default getStarWarsData;
