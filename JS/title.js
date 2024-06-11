var titulo = document.title;
var posicao = 0;

setInterval(function() {
    posicao++;
    if (posicao > titulo.length) {
        posicao = 0;
    }
    document.title = titulo.substring(posicao) + ' ' + titulo.substring(0, posicao);
}, 500);
