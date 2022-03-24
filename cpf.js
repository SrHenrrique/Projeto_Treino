var form = document.querySelector('#cadastro_form')
console.log('::form', form.cpf)

form.cpf.addEventListener("blur", function (e) {
    
    const cpfEValido = validarCpf(gerardigitos(form.cpf.value))
    console.log(cpfEValido)
    form.cpf.style.border = !cpfEValido ?  '1px solid red' : '1px solid green'

})



function gerardigitos(cpf){
    return cpf.replaceAll(".", "").replace("-", "").split("")
}

function validarCpf(digitos) {

    var conta1 = 0
    var conta2 = 0

    for (var i in digitos) {
        if (i < 9) {
            conta1 += digitos[i] * (10 - i)

        }

    }
    const primeiroValorEvalido = conta1 * 10 % 11 === Number(digitos[9])
    for (var i in digitos) {
        if (i < 10) {
            conta2 += digitos[i] * (11 - i)
        }
    }
    const segundoValorEvalido = conta2 * 10 % 11 === Number(digitos[10])



    return primeiroValorEvalido && segundoValorEvalido
}