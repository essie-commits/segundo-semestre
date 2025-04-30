import contaBancaria from "./classe.js";

opc = prompt(`bem-vindo ao nosso banco! \n escolha uma opção para continuar: \n
1- cadastrar nova conta \n
2- realizar um depósito \n
3- realizar um saque \n
4- consultar saldo \n
5- sair`);

switch (opc) {
  case 1:
    let nome = prompt(`digite o nome do titular`);
    let saldo = prompt(`informe seu saldo inicial`);
    new contaBancaria(nome, saldo);
    break;
  case 2:
    let depositar = prompt(`qual valor irá depositar?`);
    new deposito(depositar);
    break;
  case 3:
    let sacar = prompt(`qual valor irá sacar?`);
    new saque(sacar);
    break;
  case 4:
    console.log(`seu saldo é ${saldo}`);
    break;
}
