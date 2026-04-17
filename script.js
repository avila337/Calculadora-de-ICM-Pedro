function calcular() {
  const pesoEl   = document.getElementById('peso');
  const alturaEl = document.getElementById('altura');
  const erroEl   = document.getElementById('erro');
  const resultEl = document.getElementById('resultado');
  const escalaEl = document.getElementById('escala');
  const marcador = document.getElementById('marcador');

  const peso   = parseFloat(pesoEl.value);
  const altura = parseFloat(alturaEl.value);

  // Reset visual
  erroEl.style.display = 'none';
  resultEl.className = 'result';
  marcador.classList.remove('show');

  // Validação dos campos
  if (!peso || !altura || peso <= 0 || altura <= 0 || altura > 3 || peso > 500) {
    erroEl.style.display = 'block';
    resultEl.classList.remove('show');
    escalaEl.style.display = 'none';
    return;
  }

  // Cálculo do IMC: Peso ÷ Altura²
  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(1);

  document.getElementById('imc-valor').textContent = imcFormatado;

  let classe, status, desc;

  // Classificação conforme OMS
  if (imc < 18.5) {
    classe = 'baixo';
    status = '🔵 Abaixo do peso';
    desc = 'Seu IMC está abaixo do recomendado pela OMS. Considere consultar um nutricionista para orientações personalizadas.';
  } else if (imc <= 24.99) {
    classe = 'ideal';
    status = '✅ Peso ideal';
    desc = 'Parabéns! Seu IMC está dentro da faixa ideal recomendada pela OMS (18,5 – 24,9). Continue mantendo hábitos saudáveis!';
  } else if (imc <= 29.99) {
    classe = 'sobrepeso';
    status = '⚠️ Sobrepeso';
    desc = 'Seu IMC indica sobrepeso. Pequenas mudanças na alimentação e na prática de atividade física podem ajudar a atingir o peso ideal.';
  } else {
    classe = 'obeso';
    status = '🔴 Obesidade';
    desc = 'Seu IMC indica obesidade. Recomendamos consultar um médico ou nutricionista para um plano de saúde adequado.';
  }

  document.getElementById('imc-status').textContent = status;
  document.getElementById('imc-desc').textContent = desc;

  // Exibe o resultado com a classe de cor correspondente
  resultEl.classList.add('show', classe);
  escalaEl.style.display = 'block';

  // Posiciona o marcador na barra de escala (IMC entre 10 e 40 → 0% a 100%)
  const min = 10, max = 40;
  const clamped = Math.min(Math.max(imc, min), max);
  const pct = ((clamped - min) / (max - min)) * 100;
  marcador.style.left = pct + '%';
  setTimeout(() => marcador.classList.add('show'), 50);
}

// Permite calcular pressionando Enter
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') calcular();
});
