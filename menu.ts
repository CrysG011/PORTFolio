const button = document.querySelector('.button') as HTMLButtonElement;
const nav = document.querySelector('.nav') as HTMLDivElement;
button.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const openCubes = Array.from(document.querySelectorAll("#open-cubes rect")) as Element[];
const closeCubes = Array.from(document.querySelectorAll("#close-cubes rect")) as Element[];

let locked = false;

const openEffect = (cubes: HTMLElement[]) => {
  cubes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove("spin-in");
      element.classList.add("spin-out");
    }, index * 10);
  });
};

const closeEffect = (cubes: HTMLElement[]) => {
  cubes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove("spin-out");
      element.classList.add("spin-in");
    }, index * 10);
  });
};

button.addEventListener("click", () => {
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

const textarea = document.getElementById('mensaje') as HTMLTextAreaElement;
const maxLength = 300;

textarea.addEventListener('input', () => {
  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }
});

const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const requiredFields = document.querySelectorAll<HTMLInputElement>('[required]');
  const areFieldsCompleted = Array.from(requiredFields).every((field: HTMLInputElement) => field.value.trim() !== '');

  if (areFieldsCompleted) {
    alert('¡GRACIAS por visitar mi sitio!\nMENSAJE ENVIADO 😊');
  }
});
