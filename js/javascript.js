            // passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
        const abas = document.querySelectorAll(".aba");

        abas.forEach(aba => {

            // passo 2 - dar um jeito de indentificar o clique no elemento da aba
    aba.addEventListener("click", function() {
       
        if(aba.classList.contains("selecionado")){
            return
        }
            // passo 3 - quando o usuario clicar, desmarcar a aba selecionada
        const abaSelecionado = document.querySelector(".aba.selecionado");
    abaSelecionado.classList.remove("selecionado");

            // passo 4 - marcar a aba clicada como selecionado
        aba.classList.add("selecionado");

            // passo 5 - esconder o conteudo anterior
        const informacaoSelecionado = document.querySelector(".informacao.selecionado");
            informacaoSelecionado.classList.remove("selecionado");

            // passo 6 - mostrar o conteudo da aba selecionada
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`    
        
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    });
});