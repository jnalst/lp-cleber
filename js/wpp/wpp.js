function validarVariaveis() {
  var festa = document.querySelector('input[name="festa"]:checked');
  var pacote = document.querySelector('input[name="pacote"]:checked');

  if (festa && pacote) {
    // Ambas as variáveis são válidas
    return pacote.value;
  } else if (festa) {
    // Somente a variável festa é válida
    return festa.value;
  } else if (pacote) {
    // Somente a variável pacote é válida
    return pacote.value;
  } else {
    // Nenhuma das variáveis é válida
    console.log("Nenhuma das variáveis é válida.");
  }
}

function wpp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5511994410421?text=" // Seu numero
    + "*Orçamento*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Sobre*: " + validarVariaveis() + "%0a" 
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
  event.preventDefault();
}