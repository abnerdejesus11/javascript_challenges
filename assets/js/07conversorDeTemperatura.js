// Objetivo

// Criar uma função que converta uma temperatura de Celsius para Fahrenheit e de celcius para famheith.

    const celciusParaFahrenheit = celsius => {

        const fahrenheit = celsius*9/5+32
        return `O resultado da conversão é ${fahrenheit} fahrenheit`


    }
    const resultado = celciusParaFahrenheit(1)
    console.log(resultado)
    


      const FahrenheitParaCelcius = fahrenheit  => {

        const celsius = (fahrenheit - 32)*5/9
        return `O resultado da conversão é ${celsius} celsius`


    }
    const result = FahrenheitParaCelcius(14)
    console.log(result)