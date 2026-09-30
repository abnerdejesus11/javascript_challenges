// ** Objetivo:

// Criar uma função que receba a idade de uma pessoa e informe se ela é maior ou menor de idade.


7
const indicadordeIdade = () => {

    let idade = 30;
    if( typeof idade !== "number"){

  
        return console.log("DEGITE UM NUMERO PARA FAZER A VERIFICAÇÃO")

    
      }
      else{
        if(idade>=18){

        return ` MAIOR DE IDADE COM ${idade} ANOS de idade`

    }
    else{
        return  ` MENOR DE IDADE COM ${idade} ANOS de idade`

    }
      }

}
 const mostrar = indicadordeIdade()
 console.log(mostrar)
 
