export default class Pessoa {
  #nome;
  #idade; // Propriedade privada
  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get idade() {
    return this.#idade;
  }

  set idade(novaIdade) {
    if (novaIdade > 0) {
      this.#idade = novaIdade;
    } else {
      console.log("Idade inválida.");
    }
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
