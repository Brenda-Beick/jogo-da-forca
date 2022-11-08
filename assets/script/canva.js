function desenharCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.fillRect(0, 0, 1200, 860);
    tabuleiro.beginPath();
    tabuleiro.moveTo(550, 200);
    tabuleiro.lineTo(850, 200);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenhaLinhas() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500+(largura * i), 640)
        tabuleiro.lineTo(550+(largura * i), 640)
    }
    tabuleiro.stroke();
    tabuleiro.closePath();

}

function escreverLetraCorreta(index) {
    tabuleiro.font = "bold 52px inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6;
    let largura = 600/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index],505 + (largura * index),620);
}

function escreverLetraIncorreta(letra, erros) {
    tabuleiro.font = "bold 40px inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText(letra, 520 + (40 * (10 - erros)),720,40);
}