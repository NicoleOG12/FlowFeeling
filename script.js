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


// elementos da página
const quizForm = document.getElementById("quizForm"); // formulário do quiz
const modal = document.getElementById("modal"); // modal que mostra a comida
const slotImage = document.getElementById("slotImage"); // imagem do slot de comida
const lever = document.getElementById("lever"); // botão da alavanca 
const closeModal = document.getElementById("closeModal"); // botão para fechar o modal

// variáveis de controle
let intervaloAnimacao = null; // guarda o id do setinterval da animação (executa um código repetidamente, com um intervalo de tempo)
let comidaEscolhida = ""; // guardará a comida escolhida aleatoriamente
let tipoHumor = ""; // guardará o humor predominante do usuário
let imagemRevelada = false; // indica se a comida já foi revelada

// criar perguntas no formulário dinamicamente
for (let i = 0; i < perguntas.length; i++) {
  const p = perguntas[i]; // pega a pergunta atual
  const div = document.createElement("div"); // cria uma div para a pergunta
  div.classList.add("pergunta"); // adiciona a classe pergunta para estilização

  let html = "<h3>" + (i + 1) + ". " + p.texto + "</h3>"; // cabeçalho da pergunta com número
  for (let j = 0; j < p.opcoes.length; j++) {
    const op = p.opcoes[j]; // pega cada opção da pergunta
    html += '<label><input type="radio" name="q' + i + '" value="' + op.humor + '" required> ' + op.texto + '</label>';
    // adiciona o input com valor do humor e o texto da opção
  }
  div.innerHTML = html; // coloca o html dentro da div
  quizForm.insertBefore(div, quizForm.querySelector('button[type="submit"]'));
  // insere a pergunta antes do botão enviar no formulário
}

// função para animar o caça-niquel de comidas
function iniciarAnimacao() {
  const listaComidas = comidas[tipoHumor]; // lista de comidas do humor predominante
  if (!listaComidas || listaComidas.length === 0) return; // se não houver comidas, sai

  let contador = 0; // contador para percorrer as comidas
  intervaloAnimacao = setInterval(function() {
    const comidaAtual = listaComidas[contador % listaComidas.length]; // pega a comida atual do ciclo
    slotImage.src = imagensComidas[comidaAtual] || "./img/interrogação.png"; // atualiza a imagem
    slotImage.alt = comidaAtual; // atualiza o alt da imagem
    contador++; // passa para a próxima comida
  }, 80); // muda a cada 80ms
}

// evento do clique na alavanca
lever.addEventListener("click", function() {
  if (intervaloAnimacao || imagemRevelada || !comidaEscolhida) return;
  // se já está animando ou imagem já foi revelada ou não tem comida, não faz nada
  iniciarAnimacao(); // inicia a animação

  setTimeout(function() { // após 2 segundos, para a animação
    clearInterval(intervaloAnimacao); // para o setinterval
    intervaloAnimacao = null; // reseta a variável
    slotImage.src = imagensComidas[comidaEscolhida] || "./img/interrogação.png"; // mostra a comida final
    slotImage.alt = comidaEscolhida; // atualiza o alt
    imagemRevelada = true; // marca que a comida foi revelada
  }, 2000);
});

// evento de envio do formulário
quizForm.addEventListener("submit", function(e) {
  e.preventDefault(); // evita que a página recarregue ao enviar

  const pontuacao = {}; // objeto para contar os votos de cada humor
  const dados = new FormData(quizForm); // pega todos os dados do formulário

  for (let par of dados.entries()) { // para cada resposta do formulário
    const humor = par[1]; // valor selecionado (humor)
    pontuacao[humor] = (pontuacao[humor] || 0) + 1; // conta quantas vezes cada humor foi selecionado
  }

  tipoHumor = ""; // reseta o humor predominante
  let maior = 0; // guarda a maior contagem
  for (let h in pontuacao) { // percorre todos os humores
    if (pontuacao[h] > maior) { // se a contagem for maior que a atual
      maior = pontuacao[h]; // atualiza a maior contagem
      tipoHumor = h; // atualiza o humor predominante
    }
  }

  const listaComidas = comidas[tipoHumor]; // pega a lista de comidas do humor predominante
  if (!listaComidas || listaComidas.length === 0) {
    alert("ops! não encontramos comidas para o seu humor."); // se não houver comidas, alerta
    return;
  }

  // escolhe uma comida aleatória da lista
  comidaEscolhida = listaComidas[Math.floor(Math.random() * listaComidas.length)];

  // abrir modal
  modal.classList.add("active"); // mostra o modal
  slotImage.src = "./img/interrogação.png"; // coloca a imagem de interrogação antes de girar
  slotImage.alt = "interrogação";
  imagemRevelada = false; // marca que a comida ainda não foi revelada
});

// evento de fechar modal
closeModal.addEventListener("click", function() {
  modal.classList.remove("active"); // esconde o modal
  clearInterval(intervaloAnimacao); // para qualquer animação que ainda esteja rodando
  intervaloAnimacao = null; // reseta a variável
  imagemRevelada = false; // marca que nenhuma comida está revelada
  comidaEscolhida = ""; // reseta a comida escolhida
});
