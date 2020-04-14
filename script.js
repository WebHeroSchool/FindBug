const body = document.body;
const level = document.querySelectorAll('.menu-item');
//const container = document.querySelector('.container');
const mainScreen = document.querySelector('.container');
const gameFieldWrapper = document.createElement('div');
const gameField = document.createElement('div');
gameFieldWrapper.classList.add('game-field');
gameField.classList.add('cards');
//const gameField = document.querySelector('.game-field');


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
	mainScreen.remove();
	body.append(gameFieldWrapper);
	gameFieldWrapper.append(gameField);
	//document.querySelector('.container').classList.add('invisible');
	//document.querySelector('.game-field').classList.add('game-field__wrapper');
}

function createCard() {
	const card = document.createElement('div');
	card.classList.add('card__wrap');
	const cardFront = document.createElement('div');
	const cardBack = document.createElement('div');
	cardFront.classList.add('card__front');
	cardBack.classList.add('card__back');
	gameField.append(card);
	//document.querySelector('.cards').append(card);
	card.append(cardBack);
	card.append(cardFront);
	console.log(card);
   
    return card;
}

function getRandomCard() {
	const cards = document.querySelectorAll('.card__wrap');
	const cardsInTheGame = getNumbersOfCard();
	console.log(cards);
	const bugCard = Math.floor(Math.random() * cardsInTheGame);
	
	cards.forEach(function(card, i) {
		if(i === bugCard) {
			cards[i].firstElementChild.style.backgroundImage =  'url(img/card_bug.png)';
		}
	});
	return bugCard;
}

function flipCard() {
	this.classList.add("card_flipped");
	const cards = document.querySelectorAll('.card__wrap');
	cards.forEach(item =>
		item.addEventListener("click", returnBack));
}

function returnBack() {
	const card = document.querySelectorAll('card__wrap');
	document.querySelector('.container').classList.remove('invisible');
	document.querySelector('.game-field').classList.remove('game-field__wrapper');
	document.querySelector('.cards').remove(card);
	
	location.reload();
}


function startGame() {
	getLevel();
	//clearField();
	const numberOfCards = getNumbersOfCard();
	for (var i = 1; i <= numberOfCards; i++) {
	 	createCard();
	}
	clearField();
	getRandomCard();
	const cards = document.querySelectorAll('.card__wrap');
	cards.forEach(item =>
		item.addEventListener("click", flipCard));
}

function main() {
	startButton.addEventListener("click", startGame);
}

main();