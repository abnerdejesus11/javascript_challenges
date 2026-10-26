// Objetivo: criar uma função que recebe uma nota e classifica o desempenho do aluno.

// Requisitos:
// - Receber uma nota de 0 a 20.
// - Classificar a nota em diferentes níveis.
// - Identificar notas inválidas, abaixo de 0 ou acima de 20.
// - Devolver uma mensagem com a classificação. 


const classificadorDeNotas = nota => {

    if (nota < 0 || nota > 20) {

        return `NOTA INVALIDA DEGITE UMA NOTA VALIDA`

    }
    else{

        if (nota >= 0 && nota < 8) {

        return `NOTA INSUFICIENTE ==> ${nota}`

    }
        else if(nota >= 9 && nota <= 12) {

        return `NOTA SUFICIENTE ==> ${nota}`

    }
        else if(nota >= 12 && nota <= 16) {

        return `NOTA BOA ==> ${nota}`

    }
        else if(nota >= 17 && nota <= 20) {

        return `NOTA EXCELENTE ==> ${nota}`

    }

    }

}
   const resultado = classificadorDeNotas(100)
    console.log(resultado)