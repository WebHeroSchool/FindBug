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
	let id = selectedLevel.id;
	let numberOfCards;
	switch (id) {
		case "simple":
			numberOfCards = 3;
			break;
		case "middle":
			numberOfCards = 6;
			break;
		default:
			numberOfCards = 9;
	}
	console.log(numberOfCards);
	return numberOfCards;
}



function clearField() {
	document.querySelector('.container').classList.add('invisible');
	document.querySelector('.game-field').classList.add('game-field__wrapper');
}

function createCard() {
	const card = document.createElement('div');
	card.classList.add('card__front');
	document.querySelector('.cards').append(card);
}

function startGame() {
	clearField();
	let numberOfCards = getLevel();
	for (var i = 1; i <= numberOfCards; i++) {
		createCard();
	}

}

startButton.addEventListener("click", startGame);
