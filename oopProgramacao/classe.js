export default class ContaBancaria {
    
    // encapsulamento de dados, para permitir sua alteração apenas dentro da classe
    
    #saldo;
    #numero;

    // static é um atributo próprio da classe 

    static instancia = 0;

    constructor(titular, saldo) {
        this.titular = titular;
        this.#saldo = saldo;
        this.#numero = ++ContaBancaria.instancia
    };

    // get é um método que irá me permitir acessar atributos privados de maneira segura 

    getTitular() {
        return this.titular
    }

    getSaldo () {
        return this.#saldo
    }

    getNumero() {
        return this.#numero
    }

    // já o set permitirá que eu realize alterações desse atributo fora da classe, de maneira controlada

    setTitular () {
        this.titular = titular;
    }

    depositar (valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito efetuado com sucesso!`);
        } else {
            console.log(`Valor inválido: valor inserido para depósito deve ser positivo`)
        }
    }

    sacar (valor) {
        if (valor > 0) {
            this.#saldo -= valor;
            console.log(`Saque efetuado com sucesso!`)
        } else if (valor <= 0) {
            console.log(`Valor inválido: valor inserido para saque deve ser positivo`)
        } else if (valor > this.#saldo) {
            console.log(`Valor inválido: saldo insuficiente`)
        }
    }

}