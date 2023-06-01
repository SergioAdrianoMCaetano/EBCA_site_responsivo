$(document).ready(function(){
    $('.carrossel-loja').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    $('.produtos').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $('#cpf').mask('000.000.000-00');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required: true
            },
            cidade:{
                required: true
            },
            dataNasci:{
                required: true
            }
        },
        messages:{
                nome:'Este campo é obrigatório',
                cpf:'Este campo é obrigatório',
                cidade:'Este campo é obrigatório',
                email:'Este campo é obrigatório',
                dataNasci: 'Este campo é obrigatório',
            },
            submitHandler: function(form){
                alert(`Formulário enviado`);
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                console.log(camposIncorretos);
                if (camposIncorretos){
                    alert(`Existem campos incorretos.`)
                }
            }
    })
});