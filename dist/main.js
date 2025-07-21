"use strict";
//calculadora com menu Typescript puro
function mostrarMenu() {
    return prompt("Escolha uma opção:\n" +
        "1 - somar\n" +
        "2 - Subtrair\n" +
        "3 - Multiplicar\n" +
        "4 - dividir\n" +
        "5 - Sair\n ");
}
function obterNumero(mensagem) {
    return Number(prompt(mensagem));
}
let numero1 = obterNumero("Digite o primeiro número:");
let numero2 = obterNumero("Dite o segundo número:");
