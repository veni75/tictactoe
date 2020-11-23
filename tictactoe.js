'use strict';

const matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const mezo = document.querySelectorAll('td');
const message = document.querySelector('.message');
const newGame = document.querySelector('.newGame');
let clickNumber = 0;
let winner = [];

newGame.addEventListener('click', function () {
    clickNumber = 0;
    mezo.forEach(function (item, index) {
        item.textContent = "";
        matrix[index] = 0;
    })
    message.setAttribute('class', 'message displayNone');
})

function game() {
    for (let i = 0; i < mezo.length; i += 1) {
        mezo[i].addEventListener('click', function () {
            if (mezo[i].textContent === '') {
                if (clickNumber % 2 == 0) {
                    mezo[i].textContent = "X";
                    matrix[i] = "x";
                    clickNumber += 1;
                    if (clickNumber > 4) {
                        check();
                    }
                } else {
                    mezo[i].textContent = "O";
                    matrix[i] = "o";
                    clickNumber += 1;
                    if (clickNumber > 4) {
                        check();
                    }
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
        message.setAttribute('class', 'message displayBlock');
        if (element.every(item => item === 'x')) {
            message.textContent = 'Az 1. játékos nyert.';            
        } else if (element.every(item => item === 'o')) {
            message.textContent = 'A 2. játékos nyert.';            
        }
    })
}

game();

