// operador ternário
console.log(true == "false" ? "igual" : "não igual");

// typeof
console.log(typeof "0")

// example
let pao = true;
let bolo = false; 

console.log(pao && bolo) = false;

console.log(pao || bolo) = true;

//example II

const padaria = {
    pao: 1,
    bolo: 20
}

console.log(padaria.bolo)

if (padaria.pao && padaria.bolo) {
    console.log("O menino voltou para casa")
} else {
    console.log("O menino não voltou para casa")
};


// operador de incremento 
let i = 0;

console.log(i++);
console.log(i);
console.log(++i);

//operador de decremento
let dec = 2;
console.log(--dec) 
//pré-decremento, porque altera primeiro e depois mostra
    
let mao = 3;
mao += 2;
console.log(mao);

let m = 1;
let j = 2;

j += m++;
console.log(`j:${j} | m:${m}<br/>`);

let idade = 17;

console.log(
    idade == 18 ? "Já pode ser preso":
idade == 16 ? "Menor de idade":
idade == 70 ? "Idoso(a)": outro
)