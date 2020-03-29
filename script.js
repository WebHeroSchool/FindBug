const body = document.body;
const level = document.querySelectorAll('.menu-item');


const chosenLevel = (elem) => {
    level.forEach((item) => item.classList.remove("selected"));
    elem.target.classList.add("selected");
};

level.forEach((item) => item.addEventListener("click", chosenLevel));
 


 
