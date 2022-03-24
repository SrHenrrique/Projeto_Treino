const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            if(field.name !== 'cpf'){
                field.style.borderColor = "green"
                setCustomMessage()}
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for(let field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    event.preventDefault()
})

var cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", function(){
//    if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replaceAll(/\.(?=[^.]*$)/,"-");
});
function mascara(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}

function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i);
    
    if (texto.substring(0,1) != saida){
              documento.value += texto.substring(0,1);
    }
    
  }
   
    
    
  function exibe(i) {
      
     
          
      document.getElementById(i).readOnly= true;
          
          
      
      
  }
  
  function desabilita(i){
      
       document.getElementById(i).disabled = true;    
      }
  function habilita(i)
      {
          document.getElementById(i).disabled = false;
      }
  
  
  function showhide()
   {
         var div = document.getElementById("newpost");
         
         if(idade()>=18){
   
      div.style.display = "none";
  }
  else if(idade()<18) {
      div.style.display = "inline";
  }
  
   }
  
  
  