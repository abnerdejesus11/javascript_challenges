//  Objetivo
// Criar uma função que recebe dois números e verifica se o primeiro é múltiplo do segundo.



const verificadorDeMultiplo = (numero,divisor) => {

    if(typeof numero !== "number" || typeof divisor !== "number"){

        return`Degite numeros para ralizar as operações`
    }

    if(numero <=0  || divisor <= 0){

         return`DIVISOR  OU NUMERADOR INVALIDO`

        

    }
    if(numero % divisor == 0){

         return`NUMERO ${numero} É multiplo do número ${divisor}`

    }

        return`NUMERO ${numero} Não É multiplo do número ${divisor}`
    




}


const resultado = verificadorDeMultiplo(10,3)
console.log(resultado)