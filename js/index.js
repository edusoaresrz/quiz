function verificarRespostas() {
    const res1 = document.getElementById('c1')
    const res2 = document.getElementById('c2')
    const res3 = document.getElementById('c3')
    const res4 = document.getElementById('c4')
    const res5 = document.getElementById('b5')

    const areaResposta = document.getElementById('areaRes')
    let somaDosAcertos = 0

    if(res1.checked) {
        somaDosAcertos = somaDosAcertos + 1
    }

    if(res2.checked) {
        somaDosAcertos = somaDosAcertos + 1
    }

    if(res3.checked) {
        somaDosAcertos = somaDosAcertos + 1
    }
    
    if(res4.checked) {
        somaDosAcertos = somaDosAcertos + 1
    }

    if(res5.checked) {
        somaDosAcertos = somaDosAcertos + 1
    }

    areaResposta.innerHTML = `Você acertou um total de ${somaDosAcertos} questões`

}