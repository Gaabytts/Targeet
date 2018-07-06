//efeito de aparecer dos lados

var caixaTexto = document.querySelectorAll(".efeito-esquerda");

var caixaImagem = document.querySelectorAll(".efeito-direita");

window.addEventListener('scroll', () => {

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    caixaTexto.forEach(e => {

        if ((windowTop) > e.offsetTop) e.classList.add('efeito1');

    });

    caixaImagem.forEach(e => {

        if ((windowTop) > e.offsetTop) e.classList.add('efeito1');

    });


});