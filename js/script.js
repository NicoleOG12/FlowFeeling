// ==================== Variáveis ====================
const quizForm = document.getElementById("quizForm");
const modal = document.getElementById("modal");
const slotImage = document.getElementById("slotImage");
const lever = document.getElementById("lever");
const closeModal = document.getElementById("closeModal");
const btnSubmit = document.getElementById("btnSubmit");

let intervaloAnimacao = null;
let comidaEscolhida = "";
let tipoHumor = "";
let saborEscolhido = "";
let temperaturaEscolhida = "";
let imagemRevelada = false;

// ==================== Criar perguntas no DOM ====================
perguntas.forEach((p, i) => {
  let div = document.createElement("div");
  div.classList.add("pergunta");
  div.innerHTML = `<h3>${i+1}. ${p.texto}</h3>` + p.opcoes.map(op => {
    const value = op.humor || op.sabor || op.temperatura;
    return `<label><input type="radio" name="q${i}" value="${value}" required> ${op.texto}</label>`;
  }).join("");
  quizForm.insertBefore(div, quizForm.querySelector('button[type="submit"]'));
});

// ==================== Criar barra de progresso ====================
const progressoContainer = document.createElement("div");
progressoContainer.classList.add("progresso-container");
const barraProgresso = document.createElement("div");
barraProgresso.id = "barraProgresso";
progressoContainer.appendChild(barraProgresso);

// ==================== Criar botões Back e Next ====================
const navegacaoDiv = document.createElement("div");
navegacaoDiv.classList.add("navegacao");

// Botão Back
const btnBack = document.createElement("button");
btnBack.type = "button";
btnBack.id = "btnBack";
btnBack.classList.add("botao");
btnBack.textContent = "Back";

// Botão Next
const btnNext = document.createElement("button");
btnNext.type = "button";
btnNext.id = "btnNext";
btnNext.classList.add("botao");
btnNext.textContent = "Next";

// Wrapper da barra de progresso
const progressoWrapper = document.createElement("div");
progressoWrapper.classList.add("progresso-wrapper");
progressoWrapper.appendChild(progressoContainer);

// Adiciona Back, progresso e Next na div de navegação
navegacaoDiv.appendChild(btnBack);
navegacaoDiv.appendChild(progressoWrapper);
navegacaoDiv.appendChild(btnNext);

// Insere antes do botão submit
quizForm.insertBefore(navegacaoDiv, btnSubmit);

// ==================== Navegação entre perguntas ====================
const perguntasDivs = document.querySelectorAll(".pergunta");
let perguntaAtual = 0;

function atualizarProgresso() {
  const porcentagem = ((perguntaAtual + 1) / perguntasDivs.length) * 100;
  barraProgresso.style.width = porcentagem + "%";
}

function mostrarPergunta(index) {
  perguntasDivs.forEach((div, i) => {
    div.style.display = i === index ? "block" : "none";
  });

  btnBack.style.display = index === 0 ? "none" : "inline-block";
  btnNext.style.display = index === perguntasDivs.length - 1 ? "none" : "inline-block";
  btnSubmit.style.display = index === perguntasDivs.length - 1 ? "inline-block" : "none";

  atualizarProgresso();
}

mostrarPergunta(perguntaAtual);

// ==================== Next / Back ====================
btnNext.addEventListener("click", () => {
  const perguntaAtualDiv = perguntasDivs[perguntaAtual];
  const opcaoSelecionada = perguntaAtualDiv.querySelector("input[type='radio']:checked");

  if (!opcaoSelecionada) {
    alert("Por favor, selecione uma opção antes de continuar!");
    return;
  }

  if (perguntaAtual < perguntasDivs.length - 1) {
    perguntaAtual++;
    mostrarPergunta(perguntaAtual);
  }
});

btnBack.addEventListener("click", () => {
  if (perguntaAtual > 0) {
    perguntaAtual--;
    mostrarPergunta(perguntaAtual);
  }
});

// ==================== Função de animação ====================
function iniciarAnimacao() {
  const listaComidas = comidas[saborEscolhido]?.[temperaturaEscolhida]?.[tipoHumor] || [];
  if (!listaComidas.length) return;

  let contador = 0;
  intervaloAnimacao = setInterval(() => {
    const comidaAtual = listaComidas[contador % listaComidas.length];
    slotImage.src = imagensComidas[comidaAtual] || "./img/interrogação.png";
    slotImage.alt = comidaAtual;
    contador++;
  }, 80);
}

// ==================== Evento alavanca ====================
lever.addEventListener("click", () => {
  if (intervaloAnimacao || imagemRevelada || !comidaEscolhida) return;
  iniciarAnimacao();
  setTimeout(() => {
    clearInterval(intervaloAnimacao);
    intervaloAnimacao = null;
    slotImage.src = imagensComidas[comidaEscolhida] || "./img/interrogação.png";
    slotImage.alt = comidaEscolhida;
    imagemRevelada = true;
  }, 2000);
});

// ==================== Envio do formulário ====================
quizForm.addEventListener("submit", e => {
  e.preventDefault();

  // Verifica se todas as perguntas foram respondidas
  for (let i = 0; i < perguntasDivs.length; i++) {
    if (!perguntasDivs[i].querySelector("input[type='radio']:checked")) {
      alert("Por favor, responda todas as perguntas antes de enviar!");
      perguntaAtual = i;
      mostrarPergunta(perguntaAtual);
      return;
    }
  }

  const dados = new FormData(quizForm);
  let pontuacao = {};
  tipoHumor = "";
  saborEscolhido = "";
  temperaturaEscolhida = "";

  for (let [name, value] of dados.entries()) {
    if (["doce","salgado","ácido","picante"].includes(value)) saborEscolhido = value;
    else if (["quente","frio","ambiente"].includes(value)) temperaturaEscolhida = value;
    else pontuacao[value] = (pontuacao[value] || 0) + 1;
  }

  const humorKeys = Object.keys(pontuacao);
  tipoHumor = humorKeys.length > 0 ? humorKeys.reduce((a,b) => pontuacao[a] > pontuacao[b] ? a : b) : "";

  const listaComidas = comidas[saborEscolhido]?.[temperaturaEscolhida]?.[tipoHumor];

  if (!listaComidas || !listaComidas.length) {
    alert("Ops! Não encontramos comidas para sua escolha.");
    return;
  }

  comidaEscolhida = listaComidas[Math.floor(Math.random() * listaComidas.length)];

  modal.classList.add("active");
  slotImage.src = "./img/interrogação.png";
  slotImage.alt = "Interrogação";
  imagemRevelada = false;
});

// ==================== Fechar modal ====================
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  clearInterval(intervaloAnimacao);
  intervaloAnimacao = null;
  imagemRevelada = false;
  comidaEscolhida = "";
});
