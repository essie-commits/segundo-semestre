let verificar = () => {
  let numero = Number(window.document.querySelector("#id_numero").value);

  let resultado = document.getElementById("id_resultado");

  if (numero % 2 == 1) {
    resultado.innerHTML = "O número digitado é ímpar";
  } else {
    resultado.innerHTML = "O número digitado é par";
  }
};
