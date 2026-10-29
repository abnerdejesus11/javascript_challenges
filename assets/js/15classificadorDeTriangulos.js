// Objetivo

// Cria uma função chamada classificarTriangulo(a, b, c) que receba os três lados de um triângulo e devolva a sua classificação.

// Regras do desafio
// - Triângulo equilátero: os três lados são iguais.
// - Triângulo isósceles: dois lados são iguais.
// - Triângulo escaleno: todos os lados são diferentes.
// - Triângulo inválido: os lados não podem formar um triângulo.

// Condições de validação
// 1. Os três valores devem ser números.
// 2. Nenhum lado pode ser NaN, infinito ou menor ou igual a zero.
// 3. A soma de quaisquer dois lados deve ser maior que o terceiro lado.


const classificarDeTriangulo = (valor1,valor2,valor3) =>{

    if(typeof valor1 !== "number" || typeof valor2 !== "number" || typeof valor3 !== "number"){

        return `DiGITE TODOS OS NUMEROS VALIDOS POR FAVOR`

    }
      if(valor1 + valor2 <= valor3 || valor1 + valor3 <= valor2 || valor2 + valor3 <= valor1 ){

          return `TRIANGULO INVALIDO`

    }
    if(valor1 === valor2 && valor2 === valor3){

          return `TRIANGULO EQUILATERO`

    }
      if(valor1 === valor2 || valor2 === valor3 || valor1 === valor3 ){

          return `TRIANGULO ISÓSCELES`

    }
     if(valor1 !== valor2 && valor2 !== valor3 && valor1 !== valor3 ){

          return `TRIANGULO ESCALENO`

    }
   





}

 const resultado = classificarDeTriangulo(5,5,10)

 console.log(resultado)