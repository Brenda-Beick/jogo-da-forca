function desenharCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.fillRect(0, 0, 1200, 860);
    tabuleiro.beginPath();
    tabuleiro.moveTo(900, 500);
    tabuleiro.lineTo(650, 500);
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