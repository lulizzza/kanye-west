function criaCartao (categotia, pergunta, resposta){
    let container = document.getElementById("container");
    let cartao = document.createElement("article");
    cartao.className = "cartao";
    cartao.innerHTML = `
    <div class="conteudo-cartao" onclick = "mostrarResposta(this)">
    <h3>${categotia}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
    `
    container.appendChild(cartao);
}

function mostrarResposta(card){
    const resposta =card.querySelector(".resposta-cartao");

    if(resposta.style.display === "none"){
       resposta.style.display = "block";
    }
    else{
       resposta.style.display = "none";
    }
}