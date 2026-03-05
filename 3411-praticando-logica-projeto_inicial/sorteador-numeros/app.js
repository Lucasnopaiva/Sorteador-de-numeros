function sortear() {
  const quantidade = parseInt(document.getElementById('quantidade').value, 10);
  const de = parseInt(document.getElementById('de').value, 10);
  const ate = parseInt(document.getElementById('ate').value, 10);

  if ([quantidade, de, ate].some(n => isNaN(n))) {
    alert("Preencha todos os campos com números.");
    return;
  }

  if (de > ate) {
    alert('O campo "De" não pode ser maior que o "Até".');
    return;
  }

  const totalDisponivel = ate - de + 1;
  if (quantidade > totalDisponivel) {
    alert(`Não dá para sortear ${quantidade} números sem repetir entre ${de} e ${ate}.`);
    return;
  }

  let sorteados = [];

  for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  const botao = document.getElementById('btn-reiniciar');

  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = "";
  document.getElementById('de').value = "";
  document.getElementById('ate').value = "";
  document.getElementById('resultado').innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
}
