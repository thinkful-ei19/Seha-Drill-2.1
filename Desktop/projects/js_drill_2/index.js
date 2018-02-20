function jediName(firstName, lastName){
	return `${lastName.substring(0 , 3)}` + `${firstName.substring(0 ,2)}`;

}
console.log(jediName('Seha', 'Dalay'));



function beyond(num){
	if(num === Infinity  || num === -Infinity){
	}
	else if(num > 0){
		console.log('To Infinity');
	}
	else if(num === 0){
	console.log('Staying Home');
	}
	else{
	console.log('To negative Infinity');
	}
	}

beyond(-2);


function decode(i){
  if(i[0] === 'a'){
    return i[1];
  }
  else if(i[0] === 'b'){
    return i[2];
  }
   else if(i[0] === 'c'){
    return i[3];
  }
   else if(i[0] === 'd'){
    return i[4];
  }
  else{
    return '';
  }
}
console.log(decode('cycle'));


function daysInMonth(month, leap){
  let days;
  if((month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December')){
    return `${month} has 31 days.`;
  }
  if((month === 'April' || month === 'June' || month === 'September' || month === 'November')){
    return `${month} has 29 days.`;
  }
  if(leap === false){
    return `${month} has 28 days.`;
  }
else{
  throw new Error(('Must provide a valid month'));
}
}
console.log(daysInMonth('July'));



function game(playerGuess){
  function tellTheNum(num){
    switch(num){
      case 1:
        return 'rock';
      case 2:
        return 'scissors'; 
      case 3:
        return 'paper';
    default:
    throw new Error('Must pick a number between 1-3');
    }
  }
  const randomGuess = Math.floor(Math.random() * 3) + 1;
  const playerWord = tellTheNum(playerGuess);
  const random = tellTheNum(randomGuess);
  
  if(randomGuess === playerGuess){
    return `It's tie.`;
  }
  else if(
    (playerGuess === 1 && randomGuess === 2) ||
    (playerGuess === 2 && randomGuess === 3) ||
    (playerGuess === 3 && randomGuess === 1)) {
      return `Player wins.`;
  }
  else{
      return `Computer wins.`;
  }
}
    console.log(game(1));
  




