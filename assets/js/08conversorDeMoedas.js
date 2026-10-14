// Objetivo
// Criar uma função que converta um valor em dólares americanos (USD) para kwanzas angolanos (AOA).

// vamos usar uma taxa fictícia de 1 USD = 920 AOA. Não é uma cotação atual; serve apenas para praticar.


const conversorDeMoedas = usd => {

    const kwz = usd * 920

    return` o resultado da conversão é de ${usd} usd para ${kwz} kz`



}
 const resultado = conversorDeMoedas(1)
 console.log(resultado)

const conversorDeMoedas1 = kwz=> {

    const usd = kwz / 920

    return` o resultado da conversão é de ${kwz} kz para ${usd} usd`



}
 const result = conversorDeMoedas1(72600)
 console.log(result)



