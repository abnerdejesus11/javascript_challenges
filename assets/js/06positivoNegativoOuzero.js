// Objetivo

// Cria uma função que receba um número e indique se ele é positivo, negativo ou zero.



    const zeroPositivoOuNegativo = numero =>{

        
            if(numero>0){

                return `o Numero degitado é positivo =>  ${numero}`

            }
            else if(0>numero){
                 return `o Numero degitado é negativo => ${numero}`

            }
            else{
                 return `o Numero degitado é zero =>  ${numero}`
            }




    }
    const resultado = zeroPositivoOuNegativo(2)
    console.log(resultado)


