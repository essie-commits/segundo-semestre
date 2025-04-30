import contaBancaria from "./classe.js";

const c1 = new contaBancaria("Lucas", 1000);

c1.sacar(500);

c1.sacar(600);

console.log(c1.titular, c1.saldo);

const c2 = new contaBancaria("Yasmin", 3000);

console.log(c2.titular, c2.saldo);

// c1.saldo = 3000;

// console.log(c1);
