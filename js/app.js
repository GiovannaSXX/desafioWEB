document.addEventListener("DOMContentLoaded", () => {
    const historicoCompras = [
        ["notebook", "mouse", "teclado"],
        ["smartphone", "capa de celular", "pelicula"],
        ["notebook", "mochila", "mouse"],
        ["smartphone", "fones de ouvido", "capa de celular"],
        ["teclado", "mouse", "tapete de mouse"]
    ];
    
    const input = document.querySelector("#produto");
    const lista = document.querySelector("#lista");
    
    input.addEventListener("blur", (e) => {
        const produto = e.target.value.toLowerCase();
        let texto = '';
        
        // Cria um array para armazenar a contagem de produtos recomendados
        let recomendacoes = [];

        // Percorre o histórico de compras
        for (let compra of historicoCompras) {
            // Verifica se o produto está na lista de compras
            if (compra.includes(produto)) {
                // Adiciona os produtos da compra atual à lista de recomendações
                for (let item of compra) {
                    // Não adiciona o produto que foi pesquisado
                    if (item !== produto && !recomendacoes.includes(item)) {
                        recomendacoes.push(item);
                    }
                }
            }
        }

        // Cria uma lista de produtos recomendados 
        if (recomendacoes.length > 0) {
            texto = recomendacoes.join('<br>');
        } else {
            texto = 'Nenhum produto recomendado encontrado.';
        }
        
        lista.innerHTML = `<b>Produtos recomendados:</b><br>${texto}`;
    });
});

    
    