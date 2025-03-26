function calcular() {
  let name = document.getElementById("nome").value;
  let weight = document.getElementById("peso").value;

  let height = document.getElementById("altura").value;

  let resultado = document.getElementById("resultado");

  weight = parseFloat(weight.replace(",", "."));
  height = parseFloat(height.replace(",", "."));

  let imc = weight / (height * height);

  console.log(
    "O nome é " +
      name +
      ".A altura é " +
      height +
      ", o peso é " +
      weight +
      " e o IMC é de " +
      imc
  );

  imc >= 40
    ? (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        imc +
        ", configurando obesidade grau III")
    : imc < 40 && imc >= 35
    ? (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        imc +
        ", configurando obesidade grau II")
    : imc < 35 && imc >= 30
    ? (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        imc +
        ", configurando obesidade grau I")
    : imc < 30 && imc >= 25
    ? (resultado.innerHTML =
        "Olá, " + name + ". Seu IMC é de " + imc + ", configurando sobrepeso")
    : imc < 25 && imc >= 18.5
    ? (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        +", configurando eutrofia (ou peso adequado)")
    : imc < 18.5 && imc >= 17
    ? (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        imc +
        ", configurando magreza nível I")
    : imc < 17 && imc >= 16
    ? (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        imc +
        ", configurando magreza nível II")
    : (resultado.innerHTML =
        "Olá, " +
        name +
        ". Seu IMC é de " +
        imc +
        ", configurando magreza nível III");
}
