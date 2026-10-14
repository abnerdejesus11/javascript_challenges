// objectivio**
// fazer um sistema com javascript que identifica o maior numero entrs 3


const maiorEntretresNumeros = (numero1,numero2,numero3) => {

        if(numero1>numero2 && numero1>numero3){

        return `numero ${numero1} maior que o numero ${numero2} e o numero ${numero3}`

    }
    else if(numero2>numero1 && numero2>numero3){

        return `numero ${numero2} maior que o numero ${numero1} e o numero ${numero3}`

    }
     else if(numero3>numero1 && numero3>numero2){

        return `numero ${numero3} maior que o numero ${numero1} e o numero ${numero2}`

    }
    else{

        return `numeros iguais nenhum e maior que o outro`

    }

}
const resultado = maiorEntretresNumeros(-1,-2,300)
console.log(resultado)