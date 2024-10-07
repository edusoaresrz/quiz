function verificarRespostas() {
    const respostas = ['c1', 'c2', 'c3', 'c4', 'b5']; // IDs das respostas corretas
    const areaResposta = document.getElementById('areaRes');
    let somaDosAcertos = 0;

    // Itera sobre as respostas e verifica se estão marcadas
    respostas.forEach(id => {
        const resposta = document.getElementById(id);
        if (resposta.checked) {
            somaDosAcertos += 1;
        }
    });

    areaResposta.innerHTML = `Você acertou um total de ${somaDosAcertos} questões`;
}