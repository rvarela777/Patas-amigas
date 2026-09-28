const formulario = document.getElementById("formCadastro");

const mensagem = document.getElementById("mensagem");

if (formulario) {

formulario.addEventListener("submit", function(event) {

event.preventDefault();

const nome = formulario.querySelector('input[type="text"]');

if (nome.value.trim() === "") {

mensagem.textContent = "O nome deve ser preenchido.";

mensagem.style.color = "red";

} else {

localStorage.setItem("nome", nome.value);

mensagem.textContent = "Cadastro realizado com sucesso.";

mensagem.style.color = "green";

}

});

}