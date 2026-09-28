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

// Funcionalidade SPA