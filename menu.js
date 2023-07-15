const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', () => {
  nav.classList.toggle('active')
})

const toggleButton = document.getElementById('toggleButton');
const openCubes = Array.from(document.querySelectorAll("#open-cubes rect"));
const closeCubes = Array.from(document.querySelectorAll("#close-cubes rect"));
let locked = false;

const openEffect = (cubes) => {
  cubes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove("spin-in");
      element.classList.add("spin-out");
    }, index * 10);
  });
};

const closeEffect = (cubes) => {
  cubes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove("spin-out");
      element.classList.add("spin-in");
    }, index * 10);
  });
};

button.addEventListener("click", (e) => {
  if (!locked) {
    locked = true;
    button.classList.toggle("active");
    const length = openCubes.length;

    if (button.classList.contains("active")) {
      openEffect(openCubes);
      closeEffect(closeCubes);
    } else {
      closeEffect(openCubes);
      openEffect(closeCubes);
    }

    setTimeout(() => {
      locked = false;
    }, 1300 + length * 10);
  }
});


const textarea = document.getElementById('mensaje');
const maxLength = 300;

textarea.addEventListener('input', function () {
  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }
});

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Verifica si los campos requeridos están completos
  const requiredFields = document.querySelectorAll('[required]');
  const areFieldsCompleted = Array.from(requiredFields).every(field => field.value.trim() !== '');

  if (areFieldsCompleted) {
    alert('¡GRACIAS por visitar mi sitio!\nMENSAJE ENVIADO 😊');
  }
});




