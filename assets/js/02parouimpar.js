
    // O objetivo é criar uma função que receba um número e diga se ele é par ou ímpar.


    const  parouImpar =() => {
        let numero = "";
        if( typeof numero !== "number"){
            
         return console.log("DEGITE UM NUMERO")   
    }
    else{
          if( numero % 2 === 0){
        return console.log(`O NÚMERO DIGITADO É O ${numero} E ESTE NUMERO E PAR`)

       }
       else{
          return console.log(`O NÚMERO DIGITADO É O ${numero} E ESTE NUMERO E IMPAR`)

       }

    }

    }
    const mostrar = parouImpar()
    mostrar
 