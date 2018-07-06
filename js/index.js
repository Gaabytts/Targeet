/* FUNCTIONS */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//ValidaCPF

var btnEnvia = document.querySelector('#envia');
var campoCpf = document.querySelector('#cpf');
var view2 = document.querySelector(".campo-cpf");
var viewcpf = document.querySelector(".viewCPF");

btnEnvia.addEventListener('click', () => {

    event.preventDefault();

    var campo = new Array(14);
    var cpf = new Array(11);

    campo = campoCpf.value;

    if ((!(/\d{3}.\d{3}.\d{3}-\d{2}/.test(campo)))) {
        //view2.textContent = '*Preencha o campo CPF Corretamente';
        ///view2.classList.add('mudaView');
        ///campoCpf.classList.add('erro');
    } else {

        ///view2.classList.remove('mudaView');
        //campoCpf.classList.remove('erro');

        cpf = campo;
        cpf = cpf.split('.').join('');
        cpf = cpf.split('-').join('');

    }



    var result = parseInt((cpf[0] * 10 + cpf[1] * 9 + cpf[2] * 8 + cpf[3] * 7 + cpf[4] * 6 + cpf[5] * 5 + cpf[6] * 4 + cpf[7] * 3 + cpf[8] * 2));


    var resto = (result * 10) % 11;

    //console.log(resto);



    var result1 = parseInt((cpf[0] * 11) + (cpf[1] * 10) + (cpf[2] * 9) + (cpf[3] * 8) + (cpf[4] * 7) + (cpf[5] * 6) + (cpf[6] * 5) + (cpf[7] * 4 + cpf[8] * 3) + cpf[9] * 2);

    var resto1 = (result1 * 10) % 11;
    //console.log(resto1);


    if (resto1 == 10 || resto1 == 11) {
        resto1 = 0;
        //	console.log(resto1);
    }


    if (!(cpf[9] == resto && cpf[10] == resto1)) {

        viewcpf.textContent = '*CPF inválido';
        view2.classList.add('campo-cpf-muda');
        //campoCpf.classList.add('erro');
    } else {
        viewcpf.textContent = '*CPF Válido';
        view2.classList.remove('campo-cpf-muda');

        if ((cpf[0] == cpf[1]) && (cpf[1] == cpf[2]) &&
            (cpf[2] == cpf[3]) && (cpf[3] == cpf[4]) && (cpf[4] == cpf[5]) &&
            (cpf[6] == cpf[7]) && (cpf[8] == cpf[9]) && cpf[9] == cpf[10]) {

            viewcpf.textContent = '*CPF inválido';
            view2.classList.add('campo-cpf-muda');
            //campoCpf.classList.add('erro');
        }




    }

});