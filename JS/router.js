const conteudo = document.getElementById("conteudo");
 
function renderizarPagina() {
const rota = window.location.hash;
 
if (rota === "#projetos") {
 
conteudo.innerHTML = `

<section>

<div class="alerta">
🐾 A campanha de inverno está necessitando de doações!
</div>

<div class="card">
<h2>Doações <span class="badge">Urgente</span></h2>
<p>
Recebemos doações de ração, medicamentos e recursos financeiros.
</p>
</div>

<div class="card">
<h2>Adoção Responsável <span class="badge">Novo</span></h2>
<p>
Promovemos feiras de adoção para ajudar cães e gatos a encontrarem um lar.
</p>
</div>

<div class="card">
<h2>Voluntariado <span class="badge">Ativo</span></h2>
<p>
Os voluntários auxiliam nos cuidados dos animais e em eventos da ONG.
</p>
</div>

<div class="modal">
<h2>Confirmação</h2>
<p>
Deseja participar de programas de voluntariado?
</p>

<button>
Confirmar
</button>
</div>

<div class="toast">
Inscrição realizada com sucesso.
</div>

</section>

`;
 
} else if (rota === "#cadastro") {
 
conteudo.innerHTML = `
<section>

<h1>Cadastro de Voluntários e Doadores</h1>
 
<form id="formCadastro">
 
<fieldset>
<legend>Dados Pessoais</legend>
 
<p>Nome Completo</p>
<input type="text" required>
 
<p>E-mail</p>
<input type="email" required>
 
<p>CPF</p>
<input type="text" minlength="11" maxlength="11" required>
 
<p>Telefone</p>
<input type="tel" minlength="11" maxlength="11" required>
 
<p>CEP</p>
<input type="text" minlength="8" maxlength="8" required>
 
<br><br>
 
</fieldset>

<button type="submit">
Enviar Cadastro
</button>
 
</form>

<div class="toast">
Cadastro enviado com sucesso.
</div>
  
</section>
`; 

} else {
 
conteudo.innerHTML = `
<section>
 
<h2>Quem Somos</h2>

<p>
A Patas Amigas é uma ONG dedicada ao resgate,
tratamento e adoção responsável de cães e gatos.
</p>
 
<img src="Imagens/gato.jpg" alt="Foto de um gato se divertindo">
 
<div class="alerta">
🐾 Mais de 100 animais já encontraram um novo lar através dos nossos projetos.
</div>
 
<h2>Contato</h2>
 
<p><strong>Email:</strong> contato@patasamigas.org.br</p>
 
<p><strong>Telefone:</strong> (11) 99999-9999</p>
 
<p><strong>Endereço:</strong> São Paulo - SP</p>
 
</section>
 
`;
}
}
 
window.addEventListener("hashchange", renderizarPagina);
 
renderizarPagina();