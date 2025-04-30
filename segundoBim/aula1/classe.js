// export default class contaBancaria {
//   #saldo;

//   // por que a #?
//   // Porque o atributo é próprio da classe, não se pode controlá-lo fora dela. É um atributo privado

//   static numeroDeConta = 0;

//   // o que é um static?
//   // vai ser um "contador" de números que adicionará mais um toda vez que a classe for instanciada

//   constructor(titular, saldo) {
//     this.titular = titular;
//     this.saldo = saldo;
//     contaBancaria.numeroDeConta++;
//     console.log(
//       `Conta criada com sucesso! Número de conta: ${contaBancaria.numeroDeConta}`
//     );
//   }

//   // pra quê serve o get?
//   // Para proteger a classe de alterações indevidas do usuário

//   get getTitular() {
//     return this.titular;
//   }

//   set setTitular(titular) {
//     this.titular = titular;
//   }

//   get getSaldo() {
//     return this.#saldo;
//   }

//   depositar(valor) {
//     this.#saldo += valor;
//     return this.#saldo;
//   }

//   sacar(valor) {
//     if (this.#saldo >= valor) {
//       this.#saldo -= valor;
//       return this.#saldo;
//     } else {
//       console.log("Saldo insuficiente!");
//     }
//   }
// }
