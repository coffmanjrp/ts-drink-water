"use strict";
var smallCups = document.querySelectorAll('.cup-small');
var liters = document.getElementById('liters');
var percentage = document.getElementById('percentage');
var remained = document.getElementById('remained');
function updateBigCup() {
    var fullCups = document.querySelectorAll('.cup-small.full').length;
    var totalCups = smallCups.length;
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = '0';
    }
    else {
        percentage.style.visibility = 'visible';
        percentage.style.height = (fullCups / totalCups) * 330 + "px";
        percentage.innerText = (fullCups / totalCups) * 100 + " %";
    }
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = '0';
    }
    else {
        remained.style.visibility = 'visible';
        liters.innerText = 2 - (250 * fullCups) / 1000 + " L";
    }
}
function highlightCups(index) {
    var _a;
    if (index === 7 && smallCups[index].classList.contains('full')) {
        index--;
    }
    if (smallCups[index].classList.contains('full') &&
        !((_a = smallCups[index].nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains('full'))) {
        index--;
    }
    smallCups.forEach(function (cup, index2) {
        if (index2 <= index) {
            cup.classList.add('full');
        }
        else {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}
smallCups.forEach(function (cup, index) {
    cup.addEventListener('click', function () { return highlightCups(index); });
});
