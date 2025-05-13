import ContaBancaria from "./classe.js";
import promptSync from "prompt-sync";

// importa o prompt para imitar uma função do alert, facilitando os testes para backend

const prompt = promptSync();

// cria um array de contas para armazenar as contas criadas

const contasCadastradas = [];

let iniciar = 0;

while (iniciar === 0) {

    const opc = menuInicio();

    let conta;

    if (opc === 1) {
        novaConta();
    } else if (opc === 2 || opc === 3 || opc === 4) {
        conta = verificarCadastro();
    }

    switch (opc) {
        case 2:

        if (conta) {
            let valor = parseFloat(prompt(`Qual o valor a ser depositado?: `));
            conta.depositar(valor)
        } else {
            console.log(`Você precisa identificar uma conta válida para realizar essa operação`)
        };

        break;

        case 3:

        if (conta) {
            let valor = parseFloat(prompt(`Qual o valor a ser sacado?: `));
            conta.sacar(valor)
        } else {
            console.log(`Você precisa identificar uma conta válida para realizar essa operação`)
        }
        
        break;

        case 4:
        
        if (conta) {
            console.log(`Seu saldo é de ${conta.getSaldo()}`)
        } else {
            console.log(`Você precisa identificar uma conta válida para realizar essa operação`)
        }

        break;

        case 5:
            console.log(`saindo...`); 
            iniciar++
    }

}

function menuInicio () {
    let opc = parseInt(prompt(`
        Bem-vindo(a) ao nosso banco! Selecione uma opção para prosseguir \n
        1 - cadastrar nova conta \n
        2 - realizar um depósito \n
        3 - realizar um saque \n
        4 - consultar saldo \n
        5 - sair`
    ));

    return opc;
}

function novaConta () {

    let nome = prompt(`Informe o nome do titular: `)

    const verificando = verificarDuplicidade(nome);

    if (verificando === false) {
        console.log(`Um mesmo titular não pode criar mais de uma conta utilizando essa aplicação.`);
        return;
    }

    let saldo = parseFloat(prompt(`Informe o saldo disponível: `))
    let conta = new ContaBancaria(nome, saldo);

    contasCadastradas.push(conta);
    
    console.log(`Bem-vindo ao nosso banco, ${conta.titular}! \n Confirme suas informações \n
        nome: ${conta.titular} \n
        saldo: ${conta.getSaldo()} \n
        número da conta: ${conta.getNumero()}`);

    return conta;

}

function verificarDuplicidade (nome) {

    for (let i = 0; i < contasCadastradas.length; i++) {
  
      if (nome === contasCadastradas[i].titular) {
        
        return false;
      }  

    }

    return true;

}

function verificarCadastro () {
    let numVerificar = parseInt(prompt(`Insira seu número de conta para prosseguir: `));

    let conta = contasCadastradas.find(c => c.getNumero() === numVerificar);

    if (!conta) {
        console.log(`Conta não encontrada`);
        return false
    }

    return conta;
}


