function limpar() {
  document.getElementById("visor").value = "";
}
function unir(valor) {
  document.getElementById("visor").value += valor;
}
function calcular() {
  var resultado = 0;
  var resultado = document.getElementById("visor").value;
  document.getElementById("visor").value = eval(resultado);
}
document.addEventListener("keypress", function (event) {
  if (event.key === "=") {
    const btn = document.querySelector("#igual");
    btn.click();
  }
  if (event.key === "+") {
    const btn = document.querySelector("#soma");
    btn.click();
  }
  if (event.key === "-") {
    const btn = document.querySelector("#subtrair");
    btn.click();
  }
  if (event.key === "/") {
    const btn = document.querySelector("#dividir");
    btn.click();
  }
  if (event.key === "*") {
    const btn = document.querySelector("#multiplicar");
    btn.click();
  }
  if (event.key === "c") {
    const btn = document.querySelector("#limpar");
    btn.click();
  }
  if (event.key === "0") {
    const btn = document.querySelector("#zero");
    btn.click();
  }
  if (event.key === "1") {
    const btn = document.querySelector("#num1");
    btn.click();
  }
  if (event.key === "2") {
    const btn = document.querySelector("#num2");
    btn.click();
  }
  if (event.key === "3") {
    const btn = document.querySelector("#num3");
    btn.click();
  }
  if (event.key === "4") {
    const btn = document.querySelector("#num4");
    btn.click();
  }
  if (event.key === "5") {
    const btn = document.querySelector("#num5");
    btn.click();
  }
  if (event.key === "6") {
    const btn = document.querySelector("#num6");
    btn.click();
  }
  if (event.key === "7") {
    const btn = document.querySelector("#num7");
    btn.click();
  }
  if (event.key === "8") {
    const btn = document.querySelector("#num8");
    btn.click();
  }
  if (event.key === "9") {
    const btn = document.querySelector("#num9");
    btn.click();
  }
  if (event.key === ".") {
    const btn = document.querySelector("#ponto");
    btn.click();
  }
});
