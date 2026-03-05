
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value) ;

    if(tipoIngresso == "pista"){
        comprarpista(quantidadeCompra)
    } else if(tipoIngresso == "superior"){
        comprarSuperior(quantidadeCompra)
    } else {
        comprarInferior(quantidadeCompra)
    }

function comprarpista(quantidadeCompra){
    let qtdpista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidadeCompra > qtdpista){
        alert("Quantidade indisponivel!")
    } else {
        qtdpista = qtdpista - quantidadeCompra
        document.getElementById('qtd-pista').textContent = qtdpista
        alert("Compra realizada com sucesso!")
    }
} 

function comprarSuperior(quantidadeCompra){
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidadeCompra > qtdsuperior){
        alert("Quantidade indisponivel!")
    } else {
        qtdsuperior = qtdsuperior - quantidadeCompra
        document.getElementById('qtd-superior').textContent = qtdsuperior
        alert("Compra realizada com sucesso!")
    }
}

 function comprarInferior(quantidadeCompra){
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidadeCompra > qtdinferior){
        alert("Quantidade indisponivel!")
    } else {
        qtdinferior = qtdinferior - quantidadeCompra
        document.getElementById('qtd-inferior').textContent = qtdinferior
        alert("Compra realizada com sucesso!")
    }
 }

}