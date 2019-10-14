"use strict"

let mozgat = function() {};
let pos = 0;
let ertek = 0;
let elem = document.getElementById("animate");
let elem_2 = document.getElementById("animate2");
let elem_3 = document.getElementById("animate3");
let elem_4 = document.getElementById("animate4");

function myMove() {
    

    mozgat = window.setInterval(frame, 0.1);

    function frame() {
        ertek = pos % 1400;
        if (ertek < 350) {
           pos++;
           topLeft(-1, 0, 350)
            /*elem.style.top = `${ertek}px`;
            elem_2.style.left = `${ertek}px`;
            elem_3.style.top = `${350 - ertek}px`
            elem_4.style.left = `${350 - ertek}px`*/
        }
        else if (ertek < 700) {
            pos++;
            leftTop(-1, 350, 700)
            /*elem.style.left = `${ertek - 350}px`;
            elem_2.style.top = `${700 - ertek}px`;
            elem_3.style.left = `${700 - ertek}px`;
            elem_4.style.top = `${ertek - 350}px`;*/
        }
        else if (ertek < 1050) {
            pos++;
            topLeft(1, 1050, 700)
            /*elem.style.top = `${1050 - ertek}px`;
            elem_2.style.left = `${1050 - ertek}px`;
            elem_3.style.top = `${ertek - 700}px`;
            elem_4.style.left = `${ertek - 700}px`;*/
        }
        else if (ertek < 1400) {
            pos++;
            leftTop(1, 1400, 1050)
            /*elem.style.left = `${1400 - ertek}px`;
            elem_2.style.top = `${ertek - 1050}px`;
            elem_3.style.left = `${ertek - 1050}px`;
            elem_4.style.top = `${1400 - ertek}px`;*/

        }
    }
}

function myMove_2() {

    mozgat = window.setInterval(frame, 0.1);

    function frame() {
        ertek = pos % 1400;
        if (ertek < 350) {
           pos++;
           leftTop(-1, 0, 350)
            /*elem.style.top = `${ertek}px`;
            elem_2.style.left = `${ertek}px`;
            elem_3.style.top = `${350 - ertek}px`
            elem_4.style.left = `${350 - ertek}px`*/
        }
        else if (ertek < 700) {
            pos++;
            topLeft(-1, 350, 700)
            /*elem.style.left = `${ertek - 350}px`;
            elem_2.style.top = `${700 - ertek}px`;
            elem_3.style.left = `${700 - ertek}px`;
            elem_4.style.top = `${ertek - 350}px`;*/
        }
        else if (ertek < 1050) {
            pos++;
            leftTop(1, 1050, 700)
            /*elem.style.top = `${1050 - ertek}px`;
            elem_2.style.left = `${1050 - ertek}px`;
            elem_3.style.top = `${ertek - 700}px`;
            elem_4.style.left = `${ertek - 700}px`;*/
        }
        else if (ertek < 1400) {
            pos++;
            topLeft(1, 1400, 1050)
            /*elem.style.left = `${1400 - ertek}px`;
            elem_2.style.top = `${ertek - 1050}px`;
            elem_3.style.left = `${ertek - 1050}px`;
            elem_4.style.top = `${1400 - ertek}px`;*/

        }
    }
}

function topLeft(elojel, a, b){
    elem.style.top = `${elojel * (a - ertek)}px`;
    elem_2.style.left = `${elojel * (a - ertek)}px`;
    elem_3.style.top = `${elojel * (ertek - b)}px`;
    elem_4.style.left = `${elojel * (ertek - b)}px`;
}

function leftTop(elojel, a, b){
    elem.style.left = `${elojel * (a - ertek)}px`;
    elem_2.style.top = `${elojel * (ertek - b)}px`;
    elem_3.style.left = `${elojel * (ertek - b)}px`;
    elem_4.style.top = `${elojel * (a - ertek)}px`;
}

function myStop() {
    window.clearInterval(mozgat);
}