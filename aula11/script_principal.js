import Aluno from "./classe.js";
let alunos = [];

let form = document.querySelector("#formulario");
form.addEventListener("submit", (evento) => {
  evento.preventDafault();

  let aluno = new Aluno();

  aluno.setNome(document.getElementById("id_nome").value);
  aluno.setMatricula(document.getElementById("id_matricula").value);

  //Cadastrar chave e valor localmente no navegador
  localStorage.setItem("nome", nome);
  localStorage.setItem("matricula", matricula);

  //Consultar valor por índice
  let chave = localStorage.key(1);
  console.log("chave: " + chave);

  //Consultar valor por chave
  let valor = localStorage.getItem(chave);
  console.log("Valor: " + valor);
});

let consultar = document.getElementById("id_consultar");
consultar.addEventListener("click", (evento) => {
  evento.preventDafault();

  //Consultar valor por índice
  let chave = localStorage.key(0);
  console.log("Chave: " + chave);

  //Consultar valor por chave
  let valor = localStorage.getItem(chave);
  console.log("Valor: " + valor);

  console.log(alunos);
});
