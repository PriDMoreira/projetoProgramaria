document.getElementById("botaoenviar").addEventListener("click", validaFormulario)


function validaFormulario(){
  if(document.getElementById("nomeusuaria").value != "" &&                              document.getElementById("emailusuaria").value != "" &&                                document.getElementById("telefoneusuaria").value !=""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone")
  }
}



  
  