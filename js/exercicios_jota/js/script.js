function enviarNome(){

    let userName = document.querySelector('#inputNome')
    let respostaNome = document.querySelector('.respostaNome')

    respostaNome.innerHTML = ''
    
    if (/\d/.test(userName.value)) {
        respostaNome.innerHTML = 'Não existe nome com números... Tente Novamente.'
    }
    else if (userName.value === '') {
        respostaNome.innerHTML = 'O campo está vazio, escreva alguma coisa.'
    }
    else if (userName.value.length < 2) {
        respostaNome.innerHTML = 'Não existe nome com menos de duas letras.'
    }
    else if (userName.value.charAt(0) !== userName.value.charAt(0).toUpperCase()) { // Verifica se a primeira letra é maiúscula
        // charAt(0) - Busca o primeiro caractere da string.
        // toUpperCase() - Versão maiúscula.
        respostaNome.innerHTML = 'A primeira letra do nome deve ser maiúscula.'
    }
    else if (userName.value == 'Link') {
        respostaNome.innerHTML = 'Wake up, Link!'
    }
    else {
        respostaNome.innerHTML = `Muito prazer ${userName.value}!`
    }

}

function enviarIdade() {
    
    let userIdade = document.querySelector('#inputIdade')
    let respostaIdade = document.querySelector('.respostaIdade')

    respostaIdade.innerHTML = ''

    /*if (isNaN(userIdade.value)) { // Como o input está como tipo 'number', isso não é necessário.
        respostaIdade.innerHTML = 'Não existe idade com letras... Tente Novamente.'
    }*/
    if (userIdade.value === '') {
        respostaIdade.innerHTML = 'O campo está vazio, escreva alguma coisa.'
    }
    else if (userIdade.value < 5) {
        respostaIdade.innerHTML = 'Quem te deixou mexer aqui?'
    }
    else if (userIdade.value > 110) {
        respostaIdade.innerHTML = 'Tem certeza que você existe? Tente novamente...'
    }
    else {
        let anoParaDia = userIdade.value * 365
        respostaIdade.innerHTML = `Você viveu por aproximadamente ${anoParaDia} dias!`
    }

}

function enviarGanhoNoMes() {

    let recebePorHora = document.querySelector('#inputRecebePorHora')
    let horasPorMes = document.querySelector('#inputHorasPorMes')
    let respostaGanhoNoMes = document.querySelector('.respostaGanhoNoMes')

    respostaGanhoNoMes.innerHTML = ''

    if (recebePorHora.value === '' || horasPorMes.value === '') {
        respostaGanhoNoMes.innerHTML = 'O campo está vazio, escreva alguma coisa.'
    }
    else if (recebePorHora.value < 0 || horasPorMes.value < 0) {
        respostaGanhoNoMes.innerHTML = 'Dijite um número válido.'
    }
    else {
        let ganhoNoMes = recebePorHora.value * horasPorMes.value
        respostaGanhoNoMes.innerHTML = `você ganha aproximadamente R$${ganhoNoMes} por mês`
    }


}