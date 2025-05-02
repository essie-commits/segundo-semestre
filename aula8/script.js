function Calcular() {
  let numInput = document.getElementById("numero");
  let opcInput = document.getElementById("operacao").value;

  const resultado = document.getElementById("resultado");

  let numero = parseInt(numInput.value);
  let opc = parseInt(opcInput);

  const tabuada = [];

  switch (opc) {
    case 1:
      for (i = 1; i <= 10; i++) {
        let operacao1 = numero + i;
        tabuada.push(`${numero} + ${i} = ${operacao1}`);
      }

      resultado.innerHTML = tabuada.join("<br>");

      break;
    case 2:
      for (i = 1; i <= 10; i++) {
        let operacao2 = numero - i;
        tabuada.push(`${numero} - ${i} = ${operacao2}`);
      }

      resultado.innerHTML = tabuada.join("<br>");

      break;
    case 3:
      for (i = 1; i <= 10; i++) {
        let operacao3 = numero * i;
        tabuada.push(`${numero} x ${i} = ${operacao3}`);
      }

      resultado.innerHTML = tabuada.join("<br>");

      break;
    case 4:
      for (i = 1; i <= 10; i++) {
        let operacao4 = numero / i;
        tabuada.push(`${numero} ÷ ${i} = ${operacao4}`);
      }

      resultado.innerHTML = tabuada.join("<br>");

      break;
  }
}
