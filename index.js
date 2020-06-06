function dwarfRollCall(dwarves) {
  //return a string
  let list = ""
  //need to ascribe numbers to each element in the array
  let num = 1;
  //loop through array and return string in new format
  for (let i = 0; i < dwarves.length; i++) {
  list += `${num++}. ${dwarves[i]} `;
  }
  return list
}

function summonCaptainPlanet(planeteerCalls){
  //set an empty array to be populated with modified elements
  let upperCase = []
  //loop through array to catch all elements
	let i = 0
	while (i < planeteerCalls.length) {
    //push each element into new array in new format
    upperCase.push(planeteerCalls[i].toUpperCase()+"!");
    i++;
  }
 	return upperCase
}

function longPlaneteerCalls(words) {
  //loop through array to catch all elements
  for (let i = 0; i < words.length; i++) {
    //check if element in array is more than four characters long; use conditional
    if (words[i].length > 4) {
      return true
    } return false
  }
}

function findTheCheese (foods) {
  //set array of cheeses
  let cheese = ['cheddar', 'gouda', 'camembert', 'swiss']
  //loop through array to catch all elements
  for (let i = 0; i < foods.length; i++) {
    //use conditional to check array arguments and see if they include cheeses
    if (cheese.includes(foods[i])){
      return foods[i]
    } return 'no cheese!'
  }
}

function startsWith(words) {
  let bArray = [];
  for (let i = 0; i < words.length; i++)
}


