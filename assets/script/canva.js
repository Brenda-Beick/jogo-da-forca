function desenharCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#f3f5fc";
    tabuleiro.strokeStyle = "#0a3871";
    tabuleiro.fillRect(0, 0, 1200, 860);
    tabuleiro.beginPath();
    tabuleiro.lineTo(650, 500);
    tabuleiro.moveTo(900, 500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}