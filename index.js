function dwarfRollCall(dwarves) {
  let list = ""
  let num = 1;
  for (let i = 0; i < dwarves.length; i++) {
  list += `${num++}. ${dwarves[i]} `;
  }
  return list
}

function summonCaptainPlanet(planeteerCalls){
  	let upperCase = [ ]
	  for (let i = 0; i < planeteerCalls.length; i++) {
    upperCase.push(planeteerCalls[i].toUpperCase()+"!")
  }
 	return upperCase
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    } return false
  }
}

function findTheCheese (foods) {
  let cheese = ['cheddar', 'gouda', 'camembert']
  for (let i = 0; i < foods.length; i++) {
    if (foods.includes(cheese[i])){
      return cheese[i]
    } return 'no cheese!'
  }
}
  