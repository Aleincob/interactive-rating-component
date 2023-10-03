//to do List:
// 1: Hacer 5 botones para seleccionar el rating dado (del 1 al 5)
// 2: Hacer un boton submit con funcion upload para cambiar la vista al de agradecimiento junto con el rating seleccionado

const rating1 = document.querySelector("#rating1");
const rating2 = document.querySelector("#rating2");
const rating3 = document.querySelector("#rating3");
const rating4 = document.querySelector("#rating4");
const rating5 = document.querySelector("#rating5");
const submitBtn = document.querySelector("#submitBtn");

rating1.addEventListener("click", test);
rating2.addEventListener("click", test);
rating3.addEventListener("click", test);
rating4.addEventListener("click", test);
rating5.addEventListener("click", test);
submitBtn.addEventListener("click", test);

function test() {
  console.log("Funcionando!!!");
}
