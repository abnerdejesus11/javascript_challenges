// Objectivo
// Cria uma função chamada classificarIdade(idade) que receba 
// uma idade e devolva a classificação correspondente.


    const classificardoIdade = idade =>{

        if(typeof idade !== "number"){

            return `DEGITE UM NUMERO POR FAVOR`
        }
        if(isNaN(idade)){

              return `DEGITE UM NUMERO POR FAVOR`


        }
        if(idade<0){

         return `DEGITE UMA IDADE VALIDA POR FAVOR`

        }
        else{

            if(idade >= 0 && idade <= 12){

                 return `CRIANÇA`

            }
           else if(idade >= 13 && idade <= 17){

                 return `ADOLESCENTE`

            }
            else if(idade >= 18 && idade <= 59){

                 return `ADULTO`

            }
            else{

                return `IDOSO`
            }

        }

    }

    const resultado = classificardoIdade(60)
    console.log(resultado)