//atividade 1
const leitor=require("readline-sync")
// parte A
function x() {
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.");
} 
x()
// parte B
let a = leitor.question("Qual seu nome? ");
let b = leitor.questionInt("Qual sua idade? ");
let c = leitor.question("aonde você mora? ");
let d = leitor.question("Qual sua proficao? ");

function info(a, b, c, d) {
    console.log(` Eu sou ${a}, tenho ${b} anos, moro em ${c} e sou ${d}. `)
}
info(a, b, c, d)

//ativida 2

//parte A
function calcular(numero1, numero2) {
    const soma = numero1+ numero2;
    return soma
    }
    console.log(calcular(10, 10))
//parte B
function comp(numb1, numb2) {
    if (numb1 > numb2) {
        console.log(`O primeiro numero é maior que o segundo`)
    } else {
        console.log(`O segundo é maior que o primeiro`)
    }
}
console.log(comp(11, 9))
//parte C
