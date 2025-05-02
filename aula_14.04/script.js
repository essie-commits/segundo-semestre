function calcular() {
  const numero = Number(document.getElementById("id_numero").value);
  const escolha = document.getElementById("operacao").value;

  switch (escolha) {
    case "*":
      for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
      }
      break;

    case "/":
      for (let i = 0; i <= 10; i++) {
        if (i === 0) {
          console.log("Divisão por zero não é permitida");
        } else {
          console.log(`${numero} / ${i} = ${numero / i}`);
        }
      }
      break;
    case "+":
      for (let i = 0; i <= 10; i++) {
        console.log(`${numero} + ${i} = ${numero + i}`);
      }
      break;

    case "-":
      for (let i = 0; i <= 10; i++) {
        console.log(`${numero} - ${i} = ${numero - i}`);
      }
      break;

    default:
      console.log("Opção inválida");
  }
}
