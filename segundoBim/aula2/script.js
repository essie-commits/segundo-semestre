import Aluno from "./classeAluno.js";
import Pessoa from "./classePesssoa.js";
import Professor from "./classeProfessor.js";

const pessoa1 = new Pessoa("Maria", 25);
const aluno1 = new Aluno("João", 20, "12345");
const aluno2 = new Aluno("Ana", 22, "67890");
const professor1 = new Professor("Carlos", 40, "54321");

professor1.adicionarAluno(aluno1); // Adiciona aluno ao professor
professor1.adicionarAluno(aluno2); // Adiciona aluno ao professor

professor1.mostrarAlunos(); // Mostra alunos do professor
