const body = document.body;
const level = document.querySelectorAll('.menu-item');

const selectLevel = (item) => {
    level.forEach((item) => item.classList.remove("selected"));
    item.target.classList.add("selected");
};

level.forEach((item) => item.addEventListener("click", selectLevel));

const startButton = document.getElementById('start-button');

function getLevel() {
	const selectedLevel = document.querySelector(".selected");
	const idSelectedLevel = selectedLevel.id;
	return idSelectedLevel;
}

function getNumbersOfCard() {
	const idSelectedLevel = getLevel();
	let numberOfCards;
	switch (idSelectedLevel) {
		case "simple":
			numberOfCards = 3;
			break;
		case "middle":
			numberOfCards = 6;
			break;
		default:
			numberOfCards = 9;
	}
	return numberOfCards;
}

function clearField() {
	document.querySelector('.container').classList.add('invisible');
	document.querySelector('.game-field').classList.add('game-field__wrapper');
}

function createCard() {
	const card = document.createElement('div');
	card.classList.add('card__wrap');
	const cardFront = document.createElement('div');
	const cardBack = document.createElement('div');
	cardFront.classList.add('card__front');
	cardBack.classList.add('card__back');
	document.querySelector('.cards').append(card);
	card.append(cardBack);
	card.append(cardFront);
	card.addEventListener("click", card.classList.add("card_flipped"));
}

function startGame() {
	getLevel();
	clearField();
	const numberOfCards = getNumbersOfCard();
	for (var i = 1; i <= numberOfCards; i++) {
		createCard();
	}
}


var elements = document.querySelectorAll(".card__wrap");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(){
  	console.log(elements[i]);
    elements[i].classList.add("card_flipped");
  };
}


// const cards = document.querySelectorAll('.card__wrap');
// 	cards.forEach(
// 		(item) => {
// 			// console.log(item);
// 		  	item.addEventListener("click", item.classList.add("card_flipped"));
// 		  	// onclick() => {item.classList.add("card_flipped")};
// 		}
// 	)

// function game() {
	
// 	// [...document.querySelectorAll('.card__wrap')].forEach(
// 	// 	(item) => {
// 	// 		// console.log(item);
// 	// 	  	item.addEventListener("click", item.classList.add("card_flipped"));
// 	// 	  	// onclick() => {item.classList.add("card_flipped")};
// 	// 	}
// 	// )
// }

startButton.addEventListener("click", startGame);
