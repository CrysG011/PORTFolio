"use strict";
var button = document.querySelector('.button');
var nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('active');
});
var toggleButton = document.getElementById('toggleButton');
var openCubes = Array.from(document.querySelectorAll("#open-cubes rect"));
var closeCubes = Array.from(document.querySelectorAll("#close-cubes rect"));
var locked = false;
var openEffect = function (cubes) {
    cubes.forEach(function (element, index) {
        setTimeout(function () {
            element.classList.remove("spin-in");
            element.classList.add("spin-out");
        }, index * 10);
    });
};
var closeEffect = function (cubes) {
    cubes.forEach(function (element, index) {
        setTimeout(function () {
            element.classList.remove("spin-out");
            element.classList.add("spin-in");
        }, index * 10);
    });
};
button.addEventListener("click", function () {
    if (!locked) {
        locked = true;
        button.classList.toggle("active");
        var length_1 = openCubes.length;
        if (button.classList.contains("active")) {
            openEffect(openCubes);
            closeEffect(closeCubes);
        }
        else {
            closeEffect(openCubes);
            openEffect(closeCubes);
        }
        setTimeout(function () {
            locked = false;
        }, 1300 + length_1 * 10);
    }
});
var textarea = document.getElementById('mensaje');
var maxLength = 300;
textarea.addEventListener('input', function () {
    if (textarea.value.length > maxLength) {
        textarea.value = textarea.value.slice(0, maxLength);
    }
});
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var requiredFields = document.querySelectorAll('[required]');
    var areFieldsCompleted = Array.from(requiredFields).every(function (field) { return field.value.trim() !== ''; });
    if (areFieldsCompleted) {
        alert('¡GRACIAS por visitar mi sitio!\nMENSAJE ENVIADO 😊');
    }
});
