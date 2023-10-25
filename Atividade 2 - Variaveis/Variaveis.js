const leitor = require("readline-sync");
// exercicio 1:
//letra A
let meuNome;
//letra B
let idade;
//letra C
console.log(typeof meuNome);
console.log(typeof idade);
//lwtra D :Por que não tem nenhum valor vinculada aos codigos.
//letra E
meuNome = leitor.question("Qual seu nome?: ");
idade = leitor.questionInt("Qual a sua idade?: ");
//letra f: o tipo das variaveis foi impresso pois agora foi definido
console.log(typeof meuNome);
console.log(typeof idade);
//letra G
console.log("olá",meuNome,"você tem", idade, "anos!");
//numero 2
//letra A
let x = "Sim";
let y = "Não";
//letra B
console.log("O dia esta bonito hoje? :", x);
console.log("O tempo esta nublado hoje? :", y);
console.log("A agua esta potavel? :", x);
// numero 3
let a = 15
let b = 25
let c
c = b 
b = a
a = c
//aqui faremos uma logica para trocar os valores 
console.log("O novo valor de a é", a) //o novo valor de a é 25
console.log("O novo valor de b é", b) // o novo valor de a é 15
