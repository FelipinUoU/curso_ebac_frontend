const form = document.getElementById('form-valores');
let validaMaiorMenor = false;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valor1 = document.getElementById('valor-1').value;
    const valor2 = document.getElementById('valor-2').value;
    const mensagemSucesso = `<b>${valor1}</b> é menor que <b>${valor2}</b>.`;
    const mensagemErro = `<b>${valor1}</b> é maior que <b>${valor2}</b>.`;


    if (valor1 < valor2) {
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        const containerMensagemErro = document.querySelector('.error-message');
        if (containerMensagemErro) {
            containerMensagemErro.style.display = 'none';
        }
    } else {
        const containerMensagemErro = document.querySelector('.message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.success-message');
        if (containerMensagemSucesso) {
            containerMensagemSucesso.style.display = 'none';
        }
    } if (valor1 == valor2) {   
        const containerMensagemErro = document.querySelector('.message');
        containerMensagemErro.innerHTML = 'Os valores são iguais.';
        containerMensagemErro.style.display = 'block';
    } 
});