const perguntas = [
  { texto: "Como você está se sentindo hoje?", opcoes: [
      { texto: "😄 Feliz e animado(a)", humor: "feliz" },
      { texto: "😌 Calmo(a) e tranquilo(a)", humor: "tranquilo" },
      { texto: "😴 Cansado(a)", humor: "cansado" },
      { texto: "😤 Estressado(a)", humor: "estressado" }
  ]},
  { texto: "Qual seu nível de energia agora?", opcoes: [
      { texto: "⚡ Alto", humor: "feliz" },
      { texto: "😊 Médio", humor: "tranquilo" },
      { texto: "😪 Baixo", humor: "cansado" },
      { texto: "💤 Quase zero", humor: "cansado" }
  ]},
  { texto: "Como está o clima hoje?", opcoes: [
      { texto: "☀️ Quente", humor: "quente" },
      { texto: "❄️ Frio", humor: "frio" },
      { texto: "🌤 Normal", humor: "tranquilo" },
      { texto: "🌧 Chuvoso", humor: "conforto" }
  ]},
  { texto: "Qual sabor mais te atrai agora?", opcoes: [
      { texto: "🍫 Doce", humor: "doce" },
      { texto: "🍟 Salgado", humor: "feliz" },
      { texto: "🍋 Ácido", humor: "quente" },
      { texto: "🌶 Picante", humor: "feliz" }
  ]},
  { texto: "Prefere algo:", opcoes: [
      { texto: "🔥 Quente", humor: "frio" },
      { texto: "❄️ Frio", humor: "quente" },
      { texto: "🌡 Temperatura ambiente", humor: "tranquilo" },
      { texto: "🤷 Tanto faz", humor: "feliz" }
  ]},
  { texto: "Quanto tempo você quer esperar?", opcoes: [
      { texto: "⏳ Muito tempo", humor: "tranquilo" },
      { texto: "🙂 Um tempinho", humor: "feliz" },
      { texto: "🏃 Pouco tempo", humor: "feliz" },
      { texto: "⚡ Nada", humor: "cansado" }
  ]},
  { texto: "Quer comer sozinho ou acompanhado?", opcoes: [
      { texto: "🧍 Sozinho", humor: "tranquilo" },
      { texto: "🧑‍🤝‍🧑 Acompanhado", humor: "conforto" },
      { texto: "🎉 Festa", humor: "feliz" },
      { texto: "🤷 Não importa", humor: "feliz" }
  ]},
  { texto: "O que mais importa hoje?", opcoes: [
      { texto: "🤤 Sabor", humor: "feliz" },
      { texto: "🤩 Aparência", humor: "doce" },
      { texto: "🍽 Quantidade", humor: "energia" },
      { texto: "🥗 Saúde", humor: "leve" }
  ]},
  { texto: "Sua fome agora é:", opcoes: [
      { texto: "😋 Leve", humor: "leve" },
      { texto: "🍽 Média", humor: "tranquilo" },
      { texto: "🤤 Alta", humor: "energia" },
      { texto: "🐉 Monstruosa", humor: "feliz" }
  ]},
  { texto: "Depois de comer, você quer se sentir:", opcoes: [
      { texto: "⚡ Energizado(a)", humor: "energia" },
      { texto: "😌 Relaxado(a)", humor: "tranquilo" },
      { texto: "😁 Satisfeito(a)", humor: "conforto" },
      { texto: "❤️ Confortado(a)", humor: "conforto" }
  ]}
];

const comidas = {
  feliz: [
    "Pizza de Calabresa",
    "Hambúrguer Artesanal",
    "Salgado",
    "Hambúrguer duplo com bacon",
    "Pizza quatro queijos",
    "Brigadeiro",
    "Bolo de cenoura com chocolate",
    "Sorvete de creme com morango",
    "Monstruosa"
  ],
  tranquilo: [
    "Sopa de legumes",
    "Salada caprese",
    "Macarrão alho e óleo",
    "Salada Caesar",
    "Wrap de frango com legumes",
    "Purê de batata com frango assado"
  ],
  cansado: [
    "Chocolate quente com marshmallow",
    "Caldo verde",
    "Macarrão carbonara"
  ],
  estressado: [
    "Chocolate quente com marshmallow",
    "Caldo verde"
  ],
  quente: [
    "Açaí com frutas",
    "Sorvete de creme com morango",
    "Torta de limão"
  ],
  frio: [
    "Sopa de legumes",
    "Caldo verde",
    "Lasanha bolonhesa",
    "Macarrão alho e óleo"
  ],
  doce: [
    "Brigadeiro",
    "Bolo de cenoura com chocolate",
    "Cheesecake de morango",
    "Torta de limão"
  ],
  conforto: [
    "Caldo verde",
    "Wrap de frango com legumes",
    "Salada Caesar"
  ],
  energia: [
    "Macarrão carbonara",
    "Purê de batata com frango assado",
    "Pizza de Calabresa",
    "Hambúrguer Artesanal"
  ],
  leve: [
    "Salada caprese",
    "Salada Caesar",
    "Wrap de frango com legumes"
  ]
};

const imagensComidas = {
  "Pizza de Calabresa": "./img/pizzadecalabresa.jpg",
  "Hambúrguer Artesanal": "./img/hamburguerartesanal.jpg",
  "Sopa de legumes": "./img/sopadelegumes.jpg",
  "Salada caprese": "./img/saladacaprese.jpg",
  "Lasanha bolonhesa": "./img/lasanhabolonhesa.jpg",
  "Macarrão alho e óleo": "./img/macarraoalhoeoleo.jpg",
  "Brigadeiro": "./img/brigadeiro.jpg",
  "Bolo de cenoura com chocolate": "./img/bolodecenoura.jpg",
  "Açaí com frutas": "./img/acai.jpg",
  "Sorvete de creme com morango": "./img/sorvete.jpg",
  "Chocolate quente com marshmallow": "./img/chocolatequente2.jpg",
  "Caldo verde": "./img/caldoverde.jpg",
  "Hambúrguer duplo com bacon": "./img/hamburguerduplo.jpg",
  "Pizza quatro queijos": "./img/pizzaquatroqueijos.jpg",
  "Salada Caesar": "./img/saladacaesar.jpg",
  "Wrap de frango com legumes": "./img/wrap.jpg",
  "Cheesecake de morango": "./img/cheesecake.jpg",
  "Torta de limão": "./img/tortadelimao.jpg",
  "Macarrão carbonara": "./img/carbonara.jpg",
  "Purê de batata com frango assado": "./img/purecomfrango.jpg",
  "Salgado": "./img/salgado.jpg",
  "Monstruosa": "./img/monstruosa.jpg"
};


const quizForm = document.getElementById("quizForm");
const modal = document.getElementById("modal");
const slotImage = document.getElementById("slotImage");
const lever = document.getElementById("lever");
const closeModal = document.getElementById("closeModal");

let intervaloAnimacao = null;
let comidaEscolhida = "";
let tipoHumor = "";
let imagemRevelada = false;

perguntas.forEach((p,i) => {
  let div = document.createElement("div");
  div.classList.add("pergunta");
  div.innerHTML = `<h3>${i+1}. ${p.texto}</h3>` + p.opcoes.map(op =>
    `<label><input type="radio" name="q${i}" value="${op.humor}" required> ${op.texto}</label>`
  ).join("");
  quizForm.insertBefore(div, quizForm.querySelector('button[type="submit"]'));
});

function iniciarAnimacao() {
  const listaComidas = comidas[tipoHumor] || [];
  let contador = 0;

  if (listaComidas.length === 0) return;

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

  let pontuacao = {};
  let dados = new FormData(quizForm);
  for (let [, humor] of dados.entries()) {
    pontuacao[humor] = (pontuacao[humor] || 0) + 1;
  }
  tipoHumor = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);

  const listaComidas = comidas[tipoHumor];
  if (!listaComidas || listaComidas.length === 0) {
    alert("Ops! Não encontramos comidas para o seu humor.");
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