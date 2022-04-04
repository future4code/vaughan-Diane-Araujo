


function obterEstatisticas(numeros: number []) {

    const numerosOrdenados: number []= numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades = {

    numeros:number = [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number[]) => {...}
}
