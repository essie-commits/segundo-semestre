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
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`seu saldo é de ${saldo}`);
    } else {
      console.log(`não é possível realizar essa operação: valor inválido`)
    }
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
