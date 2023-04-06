$(document).ready(function () {
    $('.slider').slick({
        arrow: true,
        speed: 400,
    });
});
let buttons1 = document.querySelector('.buttons1');
let buttons2 = document.querySelector('.buttons2');
let bg = document.querySelector('.bg');

buttons1.addEventListener('click', function () {
    buttons1.classList.remove('noActive');
    buttons2.classList.add('noActive');
    bg.style.left = "3px"
});
buttons2.addEventListener('click', function () {
    buttons2.classList.remove('noActive');
    buttons1.classList.add('noActive');
    bg.style.left = "135px"
});
