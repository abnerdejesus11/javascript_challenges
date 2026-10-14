// objectivio**
// fazer um sistema com javascript que identifica o maior numero entrs 2




const maiorEntreDois = (numero1,numero2) => {

    if(numero1>numero2){

        return `numero ${numero1} maior que o numero ${numero2}`

    }
    else if (numero1 == numero2){

        return `numeros iguais nenhum e maior que o outro`

    }
    else{

        return `numero ${numero2} maior que o numero ${numero1}`

    }


}

const resultado = maiorEntreDois(2,1)
console.log(resultado)