function enviarNome(){

    let userName = document.querySelector('#inputNome')
    let respostaNome = document.querySelector('.respostaNome')

    respostaNome.innerHTML = ''
    
    if (/\d/.test(userName.value)) {
        respostaNome.innerHTML = '[Erro] Não existe nome com números... Tente Novamente.'
    }
    else if (userName.value === '') {
        respostaNome.innerHTML = '[Erro] O campo está vazio, escreva alguma coisa.'
    }
    else if (userName.value.length < 2) {
        respostaNome.innerHTML = '[Erro] Não existe nome com menos de duas letras.'
    }
    else if (userName.value.charAt(0) !== userName.value.charAt(0).toUpperCase()) { // Verifica se a primeira letra é maiúscula
        // charAt(0) - Busca o primeiro caractere da string.
        // toUpperCase() - Versão maiúscula.
        respostaNome.innerHTML = '[Erro] A primeira letra do nome deve ser maiúscula.'
    }
    else if (userName.value.toLowerCase() === 'link') {
        // toLowerCase() - transforma todas as letras da string para minúsculas.
        // === 'link' - depois de converter, ele compara com 'link', que está tudo em minúsculo.
        respostaNome.innerHTML = 'Wake up, Link! <br> <span>*(^-^)*</span> '
    }
    else {
        respostaNome.innerHTML = `Muito prazer ${userName.value}!`
    }

}

function enviarIdade() {
    
    let userIdade = document.querySelector('#inputIdade')
    let respostaIdade = document.querySelector('.respostaIdade')

    respostaIdade.innerHTML = ''

    // Não é preciso ter condição para caso tenha letras por causa do input de tipo 'number'.
    if (userIdade.value === '') {
        respostaIdade.innerHTML = '[Erro] O campo está vazio, digite algum número.'
    }
    else if (userIdade.value < 1) {
        respostaIdade.innerHTML = '[Erro] Não existe idade negativa. Tente novamente.'
    }
    else {
        let anoParaDia = userIdade.value * 365
        respostaIdade.innerHTML = `Você viveu por aproximadamente ${anoParaDia} dias!`
        if (userIdade.value < 5) {
            respostaIdade.innerHTML += '<br> Quem te deixou mexer aqui?'
        }
        if (userIdade.value > 110) {
            respostaIdade.innerHTML += '<br> Tem certeza que você existe?'
        }
    }

}

function enviarGanhoNoMes() {

    let recebePorHora = document.querySelector('#inputRecebePorHora')
    let horasPorMes = document.querySelector('#inputHorasPorMes')
    let respostaGanhoNoMes = document.querySelector('.respostaGanhoNoMes')

    respostaGanhoNoMes.innerHTML = ''

    if (recebePorHora.value === '' || horasPorMes.value === '') {
        respostaGanhoNoMes.innerHTML = '[Erro] O campo está vazio, digite algum número.'
    }
    else if (recebePorHora.value < 0 || horasPorMes.value < 0) {
        respostaGanhoNoMes.innerHTML = '[Erro] Dijite um número válido.'
    }
    else {
        let ganhoNoMes = recebePorHora.value * horasPorMes.value
        respostaGanhoNoMes.innerHTML = `Você ganha aproximadamente R$${ganhoNoMes} por mês.`

        if (ganhoNoMes > 100000) {
            respostaGanhoNoMes.innerHTML += ' Vai com calma Elon Musk.'
        }
    }

}

function enviarNomeDoMes() {

    let nomeDoMes = document.querySelector('#inputNomeDoMes')
    let respostaNomeDoMes = document.querySelector('.respostaNomeDoMes')

    respostaNomeDoMes.innerHTML = ''

    if (nomeDoMes.value === '') {
        respostaNomeDoMes.innerHTML = '[Erro] O campo está vazio, digite algum número.'
    }
    else if (nomeDoMes.value < 1) {
        respostaNomeDoMes.innerHTML = '[Erro] Só existem 12 meses, digite um número de 1 a 12.'
    }
    else if (nomeDoMes.value > 13) {
        respostaNomeDoMes.innerHTML = `[Erro] Desculpe, não conheço o mês ${nomeDoMes.value}, digite um número de 1 a 12.`
    }
    else {
        switch(Number(nomeDoMes.value)) {
            case 1:
                respostaNomeDoMes.innerHTML = 'Janeiro'
                break
            case 2:
                respostaNomeDoMes.innerHTML = 'Fevereiro'
                break
            case 3: 
                respostaNomeDoMes.innerHTML = 'Março'
                break
            case 4:
                respostaNomeDoMes.innerHTML = 'Abril'
                break
            case 5:
                respostaNomeDoMes.innerHTML = 'Maio'
                break
            case 6:
                respostaNomeDoMes.innerHTML = 'Junho'
                break
            case 7:
                respostaNomeDoMes.innerHTML = 'Julho'
                break
            case 8:
                respostaNomeDoMes.innerHTML = 'Agosto'
                break
            case 9:
                respostaNomeDoMes.innerHTML = 'Setembro'
                break
            case 10:
                respostaNomeDoMes.innerHTML = 'Outubro'
                break
            case 11:
                respostaNomeDoMes.innerHTML = 'Novembro'
                break
            case 12:
                respostaNomeDoMes.innerHTML = 'Dezembro'
                break
            case 13:
                respostaNomeDoMes.innerHTML = 'Faz o L'
                break
            default:
                respostaNomeDoMes.innerHTML = '[Erro] Mês Inválido, tente números inteiros.'
        }
    }

}

function enviarMaiorOuIgual() {

    // Para economizar tempo usei MOI = Maior ou Igual
    let primeiroMOI = document.querySelector('#inputPrimeiroMaiorOuIgual')
    let segundoMOI = document.querySelector('#inputSegundoMaiorOuIgual')
    let respostaMOI = document.querySelector('.respostaMaiorOuIgual')

    respostaMOI.innerHTML = ''

    if (primeiroMOI.value === '' && segundoMOI.value === '') {
        respostaMOI.innerHTML = 'Os dois campos em branco é sacanagem... Digite os números e tente novamente.'
    }
    else if (primeiroMOI.value === '' || segundoMOI.value === '') {
        respostaMOI.innerHTML = '[Erro] Algum campo está vazio, digite algum número.'
    }
    else if (primeiroMOI.value === segundoMOI.value) {
        respostaMOI.innerHTML = `TRUE <br> ${primeiroMOI.value} e ${segundoMOI.value} são iguais.`
    }
    else if (Number(primeiroMOI.value) > Number(segundoMOI.value)) {
        respostaMOI.innerHTML = `TRUE <br> ${primeiroMOI.value} é maior que ${segundoMOI.value}`
    }
    else {
        respostaMOI.innerHTML = `FALSE <br> ${primeiroMOI.value} não é maior ou igual a ${segundoMOI.value}`
    }

    
 
}