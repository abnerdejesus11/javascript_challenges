// objectivo**
// criar um sistema que calcula as medias de um aluno e da o seu resultao final com um total de 8 disciplinas

const calculadoraDeMedia = (n1,n2,n3,n4,n5,n6,n7,n8) => {

    const resultado = Math.trunc((n1+n2+n3+n4+n5+n6+n7+n8)/8)

    if(resultado <= 20 && resultado >= 15){

        return `Aluno com media escelente apto com a media de ${resultado}`

    }
    else if(resultado <= 14 && resultado >= 10){

         return `Aluno  apto com a media de ${resultado}`

    }
    else{

          return `Aluno não apto com a media de ${resultado}`


    }

}

const resultado = calculadoraDeMedia(10,12,11,20,20,20,8,10)

console.log(resultado)