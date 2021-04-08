// Set const
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const homeBtn = document.querySelector('ul>li:nth-child(1)')
const redBtn = document.querySelector('ul>li:nth-child(2)');
const blueBtn = document.querySelector('ul>li:nth-child(3)');
const greenBtn = document.querySelector('ul>li:nth-child(4)');
const yellowBtn = document.querySelector('ul>li:nth-child(5)');

// Colors functions
const backgroundHome = () => {
    menu.parentNode.parentNode.classList.remove('red', 'blue', 'green', 'yellow');
    menu.parentNode.classList.remove('hamburger-menu');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = true;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-color").innerHTML = "HOME: Toggle the menu or press H, R, B, G, Y"
};

const backgroundRed = () => {
    menu.parentNode.parentNode.classList.add('red');
    menu.parentNode.parentNode.classList.remove('blue', 'green', 'yellow');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = true;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-color").innerHTML = "RED: Toggle the menu or press H, R, B, G, Y"
};
const backgroundBlue = () => {
    menu.parentNode.parentNode.classList.add('blue');
    menu.parentNode.parentNode.classList.remove('red', 'green', 'yellow');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = true;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-color").innerHTML = "BLUE: Toggle the menu or press H, R, B, G, Y"
};
const backgroundGreen = () => {
    menu.parentNode.parentNode.classList.add('green');
    menu.parentNode.parentNode.classList.remove('blue', 'red', 'yellow');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = true;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-color").innerHTML = "GREEN: Toggle the menu or press H, R, B, G, Y"
};
const backgroundYellow = () => {
    menu.parentNode.parentNode.classList.add('yellow');
    menu.parentNode.parentNode.classList.remove('blue', 'green', 'red');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = true;
    document.getElementById("text-color").innerHTML = "YELLOW: Toggle the menu or press H, R, B, G, Y"
};

// Click functions
homeBtn.addEventListener('click', backgroundHome);
redBtn.addEventListener('click', backgroundRed);
blueBtn.addEventListener('click', backgroundBlue);
greenBtn.addEventListener('click', backgroundGreen);
yellowBtn.addEventListener('click', backgroundYellow);

// Keyboard event functions
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyH') {
        backgroundHome();
    }
});
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyR') {
        backgroundRed();
    }
});
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyB') {
        backgroundBlue();
    }
});
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyG') {
        backgroundGreen();
    }
});
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyY') {
        backgroundYellow();
    }
});

// Remove hide class
const removeHide = () => {
    menu.classList.remove('hide');
}
hamburger.parentNode.addEventListener('mouseover', removeHide);

const resetHamburger = () => {
    menu.parentNode.classList.add('hamburger-menu');
}
hamburger.parentNode.addEventListener('mouseout', resetHamburger);