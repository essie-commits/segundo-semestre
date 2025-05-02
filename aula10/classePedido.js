export default class Pedido {
    
    constructor(nome, ingrediente, tamanho, massa, endereco){
        this.nome = nome;
        this.ingrediente = ingrediente;
        this.tamanho = tamanho;
        this.massa = massa;
        this.endereco = endereco;

        Pedido.numeroDoPedido++;
    }

    get Nome() {
        return this.nome;
    };

    get Endereco() {
        return this.endereco;
    };

    confirmacao(){
        alert(`Parabéns, pedido realizado com sucesso! Confirme seus dados: \n
            nome: ${this.nome} \n
            ingrediente(s) da pizza: ${this.ingrediente} \n
            tamanho: ${this.tamanho} \n
            tipo de massa: ${this.massa} \n
            endereço: ${this.endereco} \n
            `)
    }
}