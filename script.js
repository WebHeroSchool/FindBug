const body = document.body;
const level = document.querySelectorAll('.menu-item');


const selectedLevel = (item) => {
    level.forEach((item) => item.classList.remove("selected"));
    item.target.classList.add("selected");
};

level.forEach((item) => item.addEventListener("click", selectedLevel));
