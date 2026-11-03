// Objetivo: Desenvolver um programa que calcule o consumo de energia elétrica de um equipamento e estime o custo a pagar.
// 1. Requisitos
// O programa deverá solicitar ao utilizador:
// 1. Nome do equipamento.
// 2. Potência do equipamento em Watts (W).
// 3. Quantidade de horas de utilização por dia.
// 4. Quantidade de dias de utilização no mês.
// 5. Preço do kWh em Kz.
// 2. Regras de negócio
// O programa deverá:
// - Validar se os valores introduzidos são numéricos.
// - Não aceitar valores negativos ou iguais a zero onde não fizer sentido.
// - Converter a potência de Watts para Quilowatts.
// - Calcular o consumo mensal em kWh.
// - Calcular o custo mensal em Kz.



const calculadoraDeConsumo = (nome,potencia,hpordias,dmes) => {

     if( typeof potencia !== "number" || typeof hpordias !== "number" || typeof dmes !== "number"){

        return `INTRODUZA VALORES CORRECTOS `
     }

     if(potencia <= 0 || hpordias <= 0 || dmes <= 0 ){

         return `INTRODUZA VALORES VALIDOS E CERTIFICA SE QUE OS VALORES SÃO POSITIVOS`

     }
     if(typeof nome !== "string"){

         return `INTRODUZA UM NOME VALIDO PARA O PRODUTO`
     }
    
    const preco = 50

     const quilowats = potencia / 1000;

     const consumoMensal = quilowats * hpordias *dmes

     const custo = consumoMensal * preco
    

         return `O NOME DO PRODUTO É:${nome} A SUA POTENCIA É DE :${potencia}WATTS, O SEU USO DIARIO É DE ${hpordias}HORAS, O SEU USO EM DIAS DO MÊS ${dmes} O PREÇO POR QUILOWATTS É DE ${preco}KZ O CONSUMO MENSAL É DE ${consumoMensal.toFixed()}KWh E O CUSTO MENSAL É DE ${custo.toFixed()}Kz`;
         
    



    
}

const resultado = calculadoraDeConsumo(" ",150,6,25)
console.log(resultado)