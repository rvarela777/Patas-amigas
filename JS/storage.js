const campoNome = document.querySelector('input[type="text"]');

if (campoNome) {

const nomeSalvo = localStorage.getItem("nome");

if (nomeSalvo) {

campoNome.value = nomeSalvo;

}

}