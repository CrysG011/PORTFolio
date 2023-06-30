const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', () => {
  nav.classList.toggle('active')
})

const toggleButton = document.getElementById('toggleButton');
const open = document.getElementById('open');
const close = document.getElementById('close');

toggleButton.addEventListener('click', function () {
  if (open.style.display === 'none') {
    open.style.display = 'block';
    close.classList.toggle('fade');
    close.style.display = 'none';

  } else {
    open.classList.toggle('fade');
    open.style.display = 'none';
    close.style.display = 'block';
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




