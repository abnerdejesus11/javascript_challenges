const verificadorDeAnoBissexto = ano =>{


if(ano % 400 === 0 ){

    return `ANO DEGITADO  É BISSEXTO ==> ${ano}`
 
}

else if(ano % 4 === 0){

    if(ano % 100 === 0){ 
      return `ANO DEGITADO NÃO É BISSEXTO ==> ${ano}`
      }

      else{
          return `ANO DEGITADO  É BISSEXTO ==> ${ano}`

      }
      

}
 else if (ano % 4 !== 0){
          return `ANO DEGITADO NÃO É BISSEXTO ==> ${ano}`

      }
  

}
const resultado =verificadorDeAnoBissexto(2000)

console.log(resultado)


// se for divisivel por 4 e 100 nao é  bissexto 

// se for so por 4 e bixesto

// se for por 400 e 100 e bixesto