//to do List:
// 1: Hacer 5 botones para seleccionar el rating dado (del 1 al 5)
// 2: Hacer un boton submit con funcion upload para cambiar la vista al de agradecimiento junto con el rating seleccionado

let rating = document.querySelectorAll(".rating");
let span = document.querySelector("#span");
const submit = document.querySelector("#submitBtn");
const selectedRating = document.querySelector("#selectRating");
const thanksView = document.querySelector("#thanksView");

// submit.addEventListener("click", selectRating);
submit.addEventListener("click", changeZIndex);


function changeZIndex() {
  selectedRating.style.zIndex = -1;
  thanksView.style.zIndex = 1;
}

function selectRating() {
  span.classList.add(rating);
  
}


rating.forEach((e) => {
  e.addEventListener("click", () => {
    rating.forEach((btn) => btn.classList.remove("active"));
    e.classList.add("active");
    span.innerHTML = e.innerHTML;
  });
});
