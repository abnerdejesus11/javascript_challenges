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

    if(operaçao == "+" ){         
            resultado = Number(numero1) + Number(numero2)
            return console.log(`A OPERAÇÃO REQUISITADA É A ADIÇÃO E O RESULTADO É ${resultado}`)
            
        }
        else if(operaçao == "-"){
            resultado = Number(numero1) - Number(numero2)
            return console.log(`A OPERAÇÃO REQUISITADA É A SUBTRAÇÃO E O RESULTADO É ${resultado}`)

            }
            else if (operaçao == "*" ){ 
            resultado = Number(numero1) * Number(numero2) 
            return console.log(`A OPERAÇÃO REQUISITADA É A  MULTIPLICAÇÃO E O RESULTADO É ${resultado}`)
        
            }
            else if(operaçao == "/" ){
            resultado = Number(numero1) / Number(numero2)
             return console.log(`A OPERAÇÃO REQUISITADA É A DIVISAÕ E O RESULTADO É ${resultado}`)
        
        }
       
       
    

};
const dados = calculadora("12","12","*")
dados

