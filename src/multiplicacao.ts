
/*
+---------------------------+
|       MULTIPLICAÇÃO       |
|                           |
|  num1 = 10               |
|  num2 = 75               |
|  resultado = 750         |
+---------------------------+
*/

const num1 = 10
const num2 = 75

function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}


const resultado = multiplicar(num1, num2);
console.log(`A multiplicação de ${num1} e ${num2} é ${resultado}.`)


/*
+---------------------------+
|       SAUDAÇÂO            |
|                           |
|  nome<string> = José               |
|  num2 = 75               |
|  resultado = 750         |
+---------------------------+
*/

function saudar(nome: string): string {
    return "Olá " + nome
}

const saudacao = saudar("José")
console.log(saudacao)

