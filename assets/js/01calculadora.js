/* Objetivo

O programa deve receber dois números e uma operação matemática, e depois mostrar o resultado.

As operações serão:

+ → soma
- → subtração
* → multiplicação
/ → divisão
*/

const calculadora = (numero1,numero2,operaçao)=>{

    let resultado;
    const n1 = Number(numero1)
    const n2 = Number(numero2)

    

    if(operaçao == "+" ){        

    if(Number.isNaN(n1) || Number.isNaN(n2)){
        return console.log("esta operação e invalida degite numeros")

    }

    else{
            resultado = n1 + n2
            return console.log(`A OPERAÇÃO REQUISITADA É A ADIÇÃO E O RESULTADO É ${resultado}`)
            }
            
        }
        else if(operaçao == "-"){

        if(Number.isNaN(n1) || Number.isNaN(n2)){
        return console.log("esta operação e invalida degite numeros")
        }
        else{
            resultado = n1 - n2
            return console.log(`A OPERAÇÃO REQUISITADA É A SUBTRAÇÃO E O RESULTADO É ${resultado}`)}
            }
            else if (operaçao == "*" ){ 
                
            resultado = n1 * n2

            if(Number.isNaN(n1) || Number.isNaN(n2)){
            return console.log("esta operação e invalida degite numeros")
            }
            else{ 
            return console.log(`A OPERAÇÃO REQUISITADA É A  MULTIPLICAÇÃO E O RESULTADO É ${resultado}`)}
            }
            else if(operaçao == "/" ){

             if(Number.isNaN(n1) || Number.isNaN(n2)){
             return console.log("esta operação e invalida degite numeros")
            }
            else{ 

             if(n2 === 0){  return console.log(`NÃO PODE DIVIDIR POR ZERO tente outra forma`)

             }
             else{
            resultado = n1 / n2
             return console.log(`A OPERAÇÃO REQUISITADA É A DIVISAÕ E O RESULTADO É ${resultado}`)
             }
        
        }
        }
        else{
            return console.log("ESTA OPERAÇÃO E INVALIDA DEGITE UMA OPERAÇÃO VALIDA")
        }
       
       
    

};
const dados = calculadora("10","2","/")
dados

