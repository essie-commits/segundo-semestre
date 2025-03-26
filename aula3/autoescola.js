let verificar = () => {
  let age = Number(document.getElementById("idade").value);

  let resultado = document.getElementById("aptidao");

  let renovacao = document.getElementById("renovacao");

  if (age < 18 || age > 100) {
    resultado.innerHTML = "Você não está apto.";
  } else {
    resultado.innerHTML = "Você está apto";
    if (age >= 18 && age < 50) {
      renovacao.innerHTML =
        "Você fará a renovação da habilitação a cada 10 anos.";
    } else if (age >= 50 && age < 70) {
      renovacao.innerHTML =
        "Você fará a renovação da habilitação a cada 5 anos.";
    } else {
      renovacao.innerHTML =
        "Você fará a renovação da habilitação a cada 3 anos.";
    }
  }
};
