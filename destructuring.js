// const raceResults = [
//   "Eliud Kipchoge",
//   "Feyisa Lelisa",
//   "Galen Rupp",
//   "Ghirmay Ghebreslassie",
//   "Alphinse Simbu",
//   "Jared Ward",
// ];

// const [gold, silver, bronze] = raceResults;


const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of"
};

function print(person){
  const {first, last, title} = person;
  console.log(`${first} ${last}, ${title}.`);
}

function show({first, last, title, country}){
  console.log(`${first} ${last}, ${title} ${country}.`);
}

show(runner);  
