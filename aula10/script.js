import Pedido from "./classePedido.js";

let formulario = document.getElementById("form_pizza");

formulario.addEventListener("submit", function(e) {

  e.preventDefault();
 
let nome = document.getElementById("id_nome").value;

let ingredNode = document.querySelectorAll('input[name="ingredientes"]:checked'); 

let ingrediente = Array.from(ingredNode).map(i => i.value);

let tamanho = document.querySelector('input[name="tamanho"]:checked').value;

let massa = document.getElementById('id_massa').value;

let endereco = document.getElementById("id_endereco").value;

let pedido = new Pedido (nome, ingrediente, tamanho, massa, endereco)

pedido.confirmacao();
})