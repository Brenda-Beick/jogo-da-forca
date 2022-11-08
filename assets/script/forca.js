let palavras = ["front", "back", "codar", "hardware", "software"];
let tabuleiro = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";
let letras = [];
let erros = 8;

function iniciarJogo() {  
    //função para botão inciar
    document.getElementById("div-desaparece").style.display = "none";
    escolherPalavraSecreta();
    desenharCanvas();
    desenhaLinhas();
    desenhaForca();

//função para reconhecer letra

    document.onkeydown = (e) => {
        let letra = e.key.toLowerCase();

        if(verificarLetra(letra) && palavraSecreta.includes(letra)) {
                for(let i = 0; i < palavraSecreta.length; i++) {
                    if(palavraSecreta[i] === letra) {
                        escreverLetraCorreta(i);
                    }
                }
        }
        else {
            adicionarLetraIncorreta(letra);
            escreverLetraIncorreta(letra, erros)
        }
    }
}

function verificarLetra (key) {
    let estado = false;
    if(key >= 65 && letras.indexOff(key) || key >= 90 && letras.indexOff(key)) {
            letras.push(key);
            console.log(key);
            console.log(letras);
            return estado;
    }   
    else {
        estado = true;
        letras.push(key);
        console.log(key);
        console.log(letras, "beatiful");
        return estado;
    }
}

function escolherPalavraSecreta() {
    //sortear letra
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    console.log(palavraSecreta);
    return palavra
}

function adicionarLetraIncorreta() {
    erros -= 1;

    if(erros == 6) {
        desenhaCabeca();
    }
    if(erros == 5) {
        desenhaCorpo();
    }
    if(erros == 4) {
        desenhaBracoDireito();
    }
    if(erros == 3) {
        desenhaBracoEsquerdo();
    }
    if(erros == 2) {
        desenhaPernaDireita();
    }
    if(erros == 1) {
        desenhaPernaEsquerda();
    }
    if(erros == 0) {
        alert("Você perdeu!!!!");
    }
}