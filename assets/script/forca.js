function iniciarJogo() {
    document.getElementById("div-desaparece").style.display = "none";
    escolherPalavraSecreta();
    desenharCanvas()
    desenhaLinhas()
}

let palavras = ["front", "back", "codar", "hardware", "software"];
let tabuleiro = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    console.log(palavraSecreta);
}