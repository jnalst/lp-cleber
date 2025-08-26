function validarVariaveis() {
  var novo = document.querySelector('input[name="novo"]:checked');
  var seminovo = document.querySelector('input[name="seminovo"]:checked');

  if (novo && seminovo) {
    // Ambas as variáveis são válidas
    return seminovo.value;
  } else if (novo) {
    // Somente a variável festa é válida
    return novo.value;
  } else if (seminovo) {
    // Somente a variável pacote é válida
    return seminovo.value;
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
  var url = "https://wa.me/554792222016?text=" // Seu numero
    + "*Orçamento*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Interesse em equipamentos*: " + validarVariaveis() + "%0a" 
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
  event.preventDefault();
}