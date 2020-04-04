const body = document.body;
const level = document.querySelectorAll('.menu-item');

const selectedLevel = (item) => {
    level.forEach((item) => item.classList.remove("selected"));
    item.target.classList.add("selected");
};

level.forEach((item) => item.addEventListener("click", selectedLevel));

const startButton = document.getElementById('start-button');


function clearField() {
	document.querySelector('.container').classList.add('invisible');
	document.querySelector('.game-field').classList.add('game-field__wrapper');
}

function createCard() {
	const card = document.createElement('div');
	card.classList.add('card__front');
	document.querySelector('.cards').append(card);
}

startButton.onclick = () => {
	clearField();
	for (var i = 1; i <= 3; i++) {
		createCard();
	}
}