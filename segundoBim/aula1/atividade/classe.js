export default class contaBancaria {
  #saldo;

  static numeroDaConta = 0;

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;

    contaBancaria.numeroDaConta++;
  }

  getTitular() {
    return this.titular;
  }

  setTitular(titular) {
    this.titular = titular;
  }

  getSaldo() {
    return this.#saldo;
  }

  depositar(valor) {
    this.#saldo += valor;
    console.log(`seu saldo é de ${saldo}`);
    return this.#saldo;
  }

  sacar(valor) {
    if (saldo >= valor) {
      let resultado = this.#saldo - valor;
      console.log(resultado);
      return resultado;
    } else {
      console.log(`saldo insuficiente`);
    }
  }
}
