let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = '';
document.getElementById('valor-total').innerHTML = '';
function adicionar(){
    let Produto = document.getElementById("produto").value;
    let nomeProduto = Produto.split('-')[0]
    let valorUnitario = Produto.split('R$') [1]
    let quantidadeProduto = document.getElementById("quantidade").value;
    //calcular o preço, o nosso subtotal
    let preco = quantidadeProduto * valorUnitario
    let carrinho = document.getElementById("lista-produtos");
    //adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML +  `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent=  `R$${totalGeral}`
    document.getElementById("quantidade").value = '';
}


function limpar(){
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
}