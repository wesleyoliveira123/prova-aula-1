let numero_1 = parseInt(prompt("Digite um número: "));
let numero_2 = parseInt(prompt("Digite outro número: "));
let escolha = parseInt(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar ou 4 para dividir: "));
let resultado;

if (escolha === 1) {
    resultado = numero_1 + numero_2;
    console.log(`A soma deu ${resultado}`);
} else if (escolha === 2) {
    resultado = numero_1 - numero_2;
    console.log(`A subtração deu ${resultado}`);
} else if (escolha === 3) {
    resultado = numero_1 * numero_2;
    console.log(`A multiplicação deu ${resultado}`);
} else if (escolha === 4) {
    if (numero_2 !== 0) {
        resultado = numero_1 / numero_2;
        console.log(`A divisão deu ${resultado}`);
    } else {
        console.log("Erro: Divisão por zero não é permitida.");
    }
} else {
    console.log("Escolha inválida. Digite 1, 2, 3 ou 4.");
}