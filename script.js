const body = document.body;
const level = document.querySelectorAll('.menu-item');
const container = document.querySelector('.container');

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
	container.remove();
	
    mainContainer.appendChild(baseField);
	// document.querySelector('.container').classList.add('invisible');
	// document.querySelector('.game-field').classList.add('game-field__wrapper');
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
}

function flipCard() {
	console.log(this);
	this.classList.add('card_flipped');
}

 function finishGame() {
	
	const allCards = document.querySelectorAll(".card__wrap");
	allCards.forEach((item) => item.addEventListener("click", goToStart));
}

function goToStart() {
	document.querySelector('.container').classList.remove('invisible'); 
	document.querySelector('.game-field').classList.add('invisible');
}

function startGame() {
	getLevel();
	clearField();
	const numberOfCards = getNumbersOfCard();
	for (var i = 1; i <= numberOfCards; i++) {
		createCard();
    }
	//const cards = document.querySelectorAll('.card__wrap');
	[...document.querySelectorAll('.card__wrap')].forEach(
		(item) => {
					
			item.addEventListener("click", flipCard);
		}
	);

	finishGame();
}

<<<<<<< HEAD
=======

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


>>>>>>> 2dcb5ef6b011674fc60f21231eb207a56c4f8f7e
startButton.addEventListener("click", startGame);

