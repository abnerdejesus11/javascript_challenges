// // Objectivo
// Cria uma função chamada calcularEntrega(valorCompra)
//  que devolva o preço da entrega conforme o valor da compra.


const CalculadoraDeTarifas = valorDeCompra =>{

    if (valorDeCompra < 0){

         return `VALOR INVALIDO`

    }
    else{
  
     if(valorDeCompra < 5000){

        return `O CUSTO DE ENTREGA É DE 1500KZ`
    }
    else if (valorDeCompra >= 5000 && valorDeCompra < 15000){

        return `O CUSTO DE ENTREGA É DE 1000KZ`

    }
     else{

        return `ENTREGA GRATUITA`

    }
    

    }
    
   


}
const resultado = CalculadoraDeTarifas(15000)

console.log(resultado)