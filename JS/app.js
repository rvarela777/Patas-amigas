console.log("Aplicação iniciada");

const botaoContraste = document.getElementById("contraste");

if (botaoContraste) {
botaoContraste.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});
}

