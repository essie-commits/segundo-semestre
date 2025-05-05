import Pessoa from "./classePesssoa.js";

export default class Professor extends Pessoa {
  #alunos; // Propriedade privada
  #matricula;
  construtor(matricula) {
    super(nome, idade); // Chama o construtor da classe pai (Pessoa)
    this.#matricula = matricula;
    this.#alunos = []; // Inicializa a lista de alunos
  }

  get matricula() {
    return this.#matricula;
  }
  set matricula(novaMatricula) {
    this.#matricula = novaMatricula;
  }

  get alunos() {
    return this.#alunos;
  }

  adicionarAluno(aluno) {
    this.#alunos.push(aluno); // Adiciona um aluno à lista de alunos
  }

  mostrarAlunos() {
    console.log(`Alunos do professor ${this.nome}:`);
    this.#alunos.forEach((aluno) => {
      console.log(`- ${aluno.nome}`);
    });
  }
}
