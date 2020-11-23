'use strict';

const matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const area = document.querySelectorAll('td');
const message = document.querySelector('.message');
const newGame = document.querySelector('.newGame');
let clickNumber = 0;
let winner = [];

newGame.addEventListener('click', function () {
    clickNumber = 0;
    area.forEach(function (item, index) {
        item.textContent = "";
        matrix[index] = 0;
    })
    message.setAttribute('class', 'message displayNone');
})

function game() {
    clickNumber = 0;
    for (let i = 0; i < area.length; i += 1) {
        area[i].addEventListener('click', function () {
            if (area[i].textContent === '') {
                if (clickNumber % 2 === 0) {
                    area[i].textContent = "X";
                    matrix[i] = "x";
                } else {
                    area[i].textContent = "O";
                    matrix[i] = "o";
                }
                clickNumber += 1;                
                if (clickNumber > 4) {
                    check();
                }
            }
        })
    }
}

function finish() {
    message.setAttribute('class', 'message displayBlock');
}

function check() {
    if (clickNumber === 9) {
        finish();
    }
    winner = [
        [matrix[0], matrix[1], matrix[2]],
        [matrix[3], matrix[4], matrix[5]],
        [matrix[6], matrix[7], matrix[8]],
        [matrix[0], matrix[3], matrix[6]],
        [matrix[1], matrix[4], matrix[7]],
        [matrix[2], matrix[5], matrix[8]],
        [matrix[0], matrix[4], matrix[8]],
        [matrix[2], matrix[4], matrix[6]],
    ]

    winner.forEach(function (element) {        
        if (element.every(item => item === 'x')) {
            message.textContent = 'Az 1. (X) játékos nyert.';
            message.setAttribute('class', 'message displayBlock');
        } else if (element.every(item => item === 'o')) {
            message.textContent = 'A 2. (O) játékos nyert.';
            message.setAttribute('class', 'message displayBlock');
        }
    })
}

game();

