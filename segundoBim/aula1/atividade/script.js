import contaBancaria from "./classe.js";

import promptSync from "prompt-sync";
const prompt = promptSync();

let opc = 0;

while (opc != 5) {
  opc = parseInt(
    prompt(`bem-vindo ao nosso banco! \n 
    escolha uma opção para continuar: \n
  1- cadastrar nova conta \n
  2- realizar um depósito \n
  3- realizar um saque \n
  4- consultar saldo \n
  5- sair\n`)
  );

  switch (opc) {
    case 1:
      let nome = prompt(`digite o nome do titular`);
      let saldo = prompt(`informe seu saldo inicial`);
      let conta = new contaBancaria(nome, saldo);
      console.log(conta);
      break;
    case 2:
      if (conta.numeroDaConta == 0) {
        console.log(
          `você precisa de uma conta para acessar essa funcionalidade`
        );
      } else {
        let depositar = prompt(`qual valor irá depositar?`);
        new deposito(depositar);
      }
      break;
    case 3:
      if (conta.numeroDaConta == 0) {
        console.log(
          `você precisa de uma conta para acessar essa funcionalidade`
        );
      } else {
        let sacar = prompt(`qual valor irá sacar?`);
        new saque(sacar);
      }
      break;
    case 4:
      if (conta.numeroDaConta == 0) {
        console.log(
          `você precisa de uma conta para acessar essa funcionalidade`
        );
      } else {
        console.log(`seu saldo é ${saldo}`);
      }
      break;
  }
}
