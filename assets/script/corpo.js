function  desenhaForca () {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.moveTo(650,200);
    tabuleiro.lineTo(650,20);
    tabuleiro.lineTo(750,20);
    tabuleiro.lineTo(750,48);
    tabuleiro.stroke();
}

function desenhaCorpo() {
    tabuleiro.moveTo(750,84);
    tabuleiro.lineTo(750,140);
    tabuleiro.stroke();
}

function desenhaBracoDireito() {
    tabuleiro.moveTo(750,90);
    tabuleiro.lineTo(720,110);
    tabuleiro.stroke();
}

function desenhaBracoEsquerdo() {
    tabuleiro.moveTo(750,90);
    tabuleiro.lineTo(780,110);
    tabuleiro.stroke();
}

function desenhaPernaDireita() {
    tabuleiro.moveTo(750,140);
    tabuleiro.lineTo(720,165);
    tabuleiro.stroke();
}

function desenhaPernaEsquerda() {
    tabuleiro.moveTo(750,140);
    tabuleiro.lineTo(780,165);
    tabuleiro.stroke();
}

function desenhaCabeca() {
    tabuleiro.moveTo(767,65);
    tabuleiro.arc(750,67,17,0,2 * Math.PI);
    tabuleiro.stroke();
}