import Pessoa from "./classePesssoa.js";

export default class Aluno extends Pessoa {
  #matricula; // Propriedade privada
  constructor(nome, idade, matricula) {
    super(nome, idade); // Chama o construtor da classe pai (Pessoa)
    this.#matricula = matricula;
  }

  get matricula() {
    return this.#matricula;
  }

  set matricula(novaMatricula) {
    this.#matricula = novaMatricula;
  }

  apresentar() {
    super.apresentar(); // Chama o método da classe pai (Pessoa)
    console.log(`Minha matrícula é ${this.matricula}.`);
  }
}
