window.onload = function() {
  const senhaCorreta = "10202025"; //senha pré definida
  const senhaDigitada = prompt("Digite a senha para acessar o cadastro de visitante:");

  if (senhaDigitada === senhaCorreta) {
    alert("Acesso permitido");
    document.getElementById("Conteudo").style.display = "block";
  } else {
    alert("Acesso negado!");
    document.body.innerHTML = "<h2>Acesso bloqueado</h2>";
  }
}


function mostrarPerfil(tipo) {

  document.getElementById("formMembro").style.display = tipo === "membro" ? "flex" : "none";
  document.getElementById("tipoVisitante").style.display = tipo === "visitante" ? "flex" : "none";
  document.getElementById("formEvangelico").style.display = "none";
  document.getElementById("formNaoEvangelico").style.display = "none";

}

function mostrarFormularioVisitante(tipo) {
  document.getElementById("formEvangelico").style.display = tipo === "evangelico" ? "flex" : "none";
  document.getElementById("formNaoEvangelico").style.display = tipo === "nao_evangelico" ? "flex" : "none";
}

function enviarParaWhatsApp(tipo) {
  const numeroWhatsApp = "5522997610880";
  let mensagem = "";

  if (tipo === "evangelico") {
    const nome = document.getElementById("nome_evangelico").value;
    const cargo = document.getElementById("cargo_evangelico").value;
    const pastor = document.getElementById("pastor_evangelico").value;
    const igreja = document.getElementById("igreja_evangelico").value;
    const data = document.getElementById("data_evangelico").value;

    mensagem = `Visitante Evangélico:\nNome: ${nome}\nCargo: ${cargo}\nPastor: ${pastor}\nIgreja: ${igreja}\nData: ${data}`;
  } else if (tipo === "nao_evangelico") {
    const nome = document.getElementById("nome_nao").value;
    const frequencia = document.getElementById("frequencia_nao").value;
    const data = document.getElementById("data_nao").value;

    mensagem = `Visitante Não Evangélico:\nNome: ${nome}\nFrequentou igreja?: ${frequencia}\nData: ${data}`;
  } else {
    const nome = document.getElementById("nome_membro").value;
    const funcao = document.getElementById("funcao_membro").value;
    const congregacao = document.getElementById("congregacao_membro").value;
    const dirigente = document.getElementById("dirigente_membro").value;
    const data = document.getElementById("data_membro").value;

    mensagem = `Novo Membro:\nNome: ${nome}\nFunção: ${funcao}\nCongregação: ${congregacao}\nDirigente: ${dirigente}\nData: ${data}`;
  }

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}