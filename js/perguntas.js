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
      { texto: "🍫 Doce", sabor: "doce" }, 
      { texto: "🍟 Salgado", sabor: "salgado" }, 
      { texto: "🍋 Ácido", sabor: "ácido" }, 
      { texto: "🍔 Gorduroso", sabor: "gorduroso" } 
  ]},
  { texto: "Prefere algo:", opcoes: [
      { texto: "🔥 Quente", temperatura: "quente" }, 
      { texto: "❄️ Frio", temperatura: "frio" },
      { texto: "🌡 Temperatura ambiente", temperatura: "ambiente" },
      { texto: "🤷 Tanto faz", temperatura: "ambiente" }
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
