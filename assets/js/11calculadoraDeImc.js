// Objetivo**
// Criar um programa que recebe o peso de uma pessoa em 
// quilogramas e a sua altura em metros, calcula o Índice de
//  Massa Corporal (IMC) e apresenta o resultado no console com
//   duas casas decimais.


const calculadoraDeImc = (peso,altura) => {

    const imc = peso /(altura * altura)

    return `O SEU IMC É ${imc.toFixed(2)}`
}

const resultado = calculadoraDeImc(70,1.75)

console.log(resultado)