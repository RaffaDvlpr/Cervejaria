$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true,
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            endereco: 'Por favor, insira seu endereço'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposInvalidos = validador.numberOfInvalids();
            console.log(camposInvalidos)
            if(camposInvalidos)
            alert(`Existem ${camposInvalidos} campos invalidos`)
        }
    })
})