// Objetivo:
//  criar um programa que recebe o preço original de um produto
//   e a percentagem de desconto, calcula quanto será descontado
//    e apresenta o preço final a pagar.

 const calculadoraDeDesconto = (preco,percentagem) =>{

     const desconto = preco * percentagem / 100

     const precoFinal = preco - desconto



     return ` o preço  do produto ${preco} e o valor descontado é ${desconto} é seu preço final é ${precoFinal}`



 }

    const resultado = calculadoraDeDesconto(1200,20)

    console.log(resultado)