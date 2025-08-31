const quizForm = document.getElementById("quizForm");
const modal = document.getElementById("modal");
const slotImage = document.getElementById("slotImage");
const lever = document.getElementById("lever");
const closeModal = document.getElementById("closeModal");

let intervaloAnimacao = null;
let comidaEscolhida = "";
let tipoHumor = "";
let saborEscolhido = "";
let temperaturaEscolhida = "";
let imagemRevelada = false;

perguntas.forEach((p, i) => {
  let div = document.createElement("div");
  div.classList.add("pergunta");
  div.innerHTML = `<h3>${i+1}. ${p.texto}</h3>` + p.opcoes.map(op => {
    const value = op.humor || op.sabor || op.temperatura;
    return `<label><input type="radio" name="q${i}" value="${value}" required> ${op.texto}</label>`;
  }).join("");
  quizForm.insertBefore(div, quizForm.querySelector('button[type="submit"]'));
});

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

quizForm.addEventListener("submit", e => {
  e.preventDefault();

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

  tipoHumor = Object.keys(pontuacao).reduce((a,b) => pontuacao[a] > pontuacao[b] ? a : b);

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

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  clearInterval(intervaloAnimacao);
  intervaloAnimacao = null;
  imagemRevelada = false;
  comidaEscolhida = "";
});
