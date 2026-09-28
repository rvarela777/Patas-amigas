const conteudo = document.getElementById("conteudo");
 
function renderizarPagina() {
const rota = window.location.hash;
 
if (rota === "#projetos") {
 
conteudo.innerHTML = `
<section class="card">
<h2>Projetos</h2>
<p>Conheça as ações desenvolvidas pela ONG Patas Amigas.</p>
</section>
`;
 
} else if (rota === "#cadastro") {
 
conteudo.innerHTML = `
<section>
<h2>Cadastro</h2>
 
<form id="formCadastro">
<fieldset>
 
<legend>Dados Pessoais</legend>
 
<p>Nome Completo</p>
<input type="text" required>
 
<p>E-mail</p>
<input type="email" required>
 
<p>CPF</p>
<input type="text" minlength="11" maxlength="11" pattern="[0-9]+" required>
 
<p>Telefone</p>
<input type="tel" minlength="11" maxlength="11" pattern="[0-9]+" required>
 
<p>CEP</p>
<input type="text" minlength="8" maxlength="8" pattern="[0-9]+" required>
 
<button type="submit">Enviar Cadastro</button>
 
</fieldset>
</form>
 
<p>Área destinada ao cadastro de voluntários e doadores.</p>
 
</section>
`;
 
} else {
 
conteudo.innerHTML = `
<section>
<h2>Quem Somos</h2>
<p>A Patas Amigas é uma ONG dedicada ao resgate, tratamento e adoção responsável de cães e gatos.</p>
</section>
`;
}
}
 
window.addEventListener("hashchange", renderizarPagina);
 
renderizarPagina();