var mostrarImagen = true;

function encriptar() {
    var texto = document.getElementById("input").value;
    var textoCifrado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                textoCifrado += "enter";
                break;
            case 'i':
                textoCifrado += "imes";
                break;
            case 'a':
                textoCifrado += "ai";
                break;
            case 'o':
                textoCifrado += "ober";
                break;
            case 'u':
                textoCifrado += "ufat";
                break;
            default:
                textoCifrado += texto[i];
        }
    }

    document.getElementById("output").value = textoCifrado;
    mostrarTextArea();
}

function desencriptar() {
    var textoCifrado = document.getElementById("input").value;
    var textoDescifrado = "";

    for (var i = 0; i < textoCifrado.length;) {
        switch (textoCifrado.substr(i, 4)) {
            case 'enter':
                textoDescifrado += 'e';
                i += 4;
                break;
            case 'imes':
                textoDescifrado += 'i';
                i += 4;
                break;
            case 'ai':
                textoDescifrado += 'a';
                i += 2;
                break;
            case 'ober':
                textoDescifrado += 'o';
                i += 4;
                break;
            case 'ufat':
                textoDescifrado += 'u';
                i += 4;
                break;
            default:
                textoDescifrado += textoCifrado[i];
                i++;
        }
    }

    document.getElementById("output").value = textoDescifrado;
    mostrarTextArea();
}

function copiar() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
}

function mostrarTextArea() {
    if (mostrarImagen) {
        document.getElementById("output").style.display = "inline-block";
        document.getElementById("output-btn").style.display = "inline-block";
        document.getElementById("input-img").style.display = "none";
        document.getElementById("input-h2").style.display = "none";
        document.getElementById("input-p").style.display = "none";
        mostrarImagen = false;
    }
}

function ajustarImagen() {
    var anchoPantalla = window.innerWidth;
    var imagen = document.getElementById("input-img");

    if (anchoPantalla < 769) {
        imagen.style.display = "none";
    } else {
        imagen.style.display = "inline-block";
    }
}

window.onload = function () {
    ajustarImagen();
    document.getElementById("output").style.display = "none";
    document.getElementById("output-btn").style.display = "none";
};

window.addEventListener('resize', function () {
    ajustarImagen();
});
