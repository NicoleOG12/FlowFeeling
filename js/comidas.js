const comidas = {
  doce: {
    quente: {
      feliz: ["Bolo de cenoura com chocolate", "Morango do Amor", "Brownie de chocolate", "Cupcake de baunilha"],
      tranquilo: ["Bolo de cenoura simples", "Biscoitos amanteigados", "Pudim de leite", "Panqueca com mel"],
      cansado: ["Chocolate quente com marshmallow", "Bolo de chocolate", "Crepe doce", "Muffin de chocolate"],
      estressado: ["Torta de limão", "Bolo de cenoura com cobertura", "Biscoitos de aveia", "Brigadeiro quente"]
    },
    frio: {
      feliz: ["Sorvete de creme com morango", "Cheesecake de morango", "Picolé de frutas", "Monstruosa gelada", "Açaí com granola"],
      tranquilo: ["Gelatina de frutas", "Salada de frutas com iogurte", "Pudim gelado", "Mousse de chocolate", "Bombom gelado"],
      cansado: ["Sorvete de chocolate", "Milkshake de baunilha", "Iogurte gelado com frutas", "Gelado de creme", "Cupcake gelado"],
      estressado: ["Torta gelada de limão", "Sorvete de frutas vermelhas", "Cheesecake gelado", "Mousse de chocolate"]
    },
    ambiente: {
      feliz: ["Bolo de cenoura com chocolate", "Brigadeiro", "Cupcake de baunilha", "Brownie", "Bombom"],
      tranquilo: ["Panqueca simples", "Salada de frutas", "Biscoitos", "Pudim de leite", "Açaí simples"],
      cansado: ["Crepe doce", "Muffin de chocolate", "Chocolate quente", "Torta de maçã"],
      estressado: ["Bolo simples", "Torta de limão", "Brigadeiro", "Pudim"]
    }
  },
  salgado: {
    quente: {
      feliz: ["Pizza de calabresa", "Hambúrguer artesanal", "Lasanha de frango", "Escondidinho de carne", "Coxinha"],
      tranquilo: ["Macarrão alho e óleo", "Purê com frango assado", "Sopa cremosa de legumes", "Omelete recheado", "Pastel assado"],
      cansado: ["Macarrão carbonara", "Caldo verde", "Pizza simples", "Hambúrguer simples", "Esfiha"],
      estressado: ["Sopa de legumes", "Escondidinho", "Purê com frango", "Pizza quatro queijos"]
    },
    frio: {
      feliz: ["Salgado assado", "Salada Caesar com frango", "Pizza fria", "Quiche de queijo", "Sanduíche natural"],
      tranquilo: ["Sopa de legumes", "Salada caprese", "Wrap de frango", "Macarrão frio com legumes"],
      cansado: ["Caldo verde", "Macarrão frio", "Sopa cremosa", "Purê com carne"],
      estressado: ["Salada Caesar", "Sopa de legumes", "Quiche de espinafre", "Macarrão simples"]
    },
    ambiente: {
      feliz: ["Hambúrguer artesanal", "Pizza de calabresa", "Salgado assado", "Escondidinho", "Coxinha"],
      tranquilo: ["Wrap de frango", "Salada Caesar", "Salada caprese", "Macarrão alho e óleo", "Pastel"],
      cansado: ["Macarrão carbonara", "Caldo verde", "Purê com frango", "Sopa de legumes"],
      estressado: ["Caldo verde", "Macarrão simples", "Salada Caesar", "Escondidinho"]
    }
  },
  ácido: {
    quente: {
      feliz: ["Torta de limão quente", "Açaí com mel quente", "Bolo de limão", "Cheesecake aquecido"],
      tranquilo: ["Salada com vinagrete suave", "Wrap cítrico", "Salada caprese", "Macarrão com limão"],
      cansado: ["Caldo verde cítrico", "Macarrão com molho ácido", "Chocolate quente com limão", "Purê com limão"],
      estressado: ["Torta de limão", "Caldo verde", "Cheesecake quente", "Bolo simples"]
    },
    frio: {
      feliz: ["Cheesecake de limão gelado", "Sorvete de frutas cítricas", "Picolé de limão", "Mousse de maracujá", "Açaí gelado"],
      tranquilo: ["Salada cítrica", "Sopa fria de legumes", "Wrap com limão", "Salada caprese gelada"],
      cansado: ["Chocolate gelado com frutas", "Sorvete de limão", "Mousse gelado", "Macarrão frio com limão"],
      estressado: ["Torta gelada de limão", "Sorvete de frutas vermelhas", "Cheesecake gelado", "Mousse ácido"]
    },
    ambiente: {
      feliz: ["Torta de limão", "Cheesecake de limão", "Bolo de limão", "Mousse de maracujá"],
      tranquilo: ["Salada caprese", "Salada cítrica", "Wrap de frango com limão", "Macarrão com limão"],
      cansado: ["Macarrão carbonara", "Caldo verde", "Purê com frango", "Chocolate gelado"],
      estressado: ["Caldo verde", "Torta de limão", "Bolo simples", "Chocolate quente"]
    }
  },
  picante: {
    quente: {
      feliz: ["Pizza quatro queijos picante", "Hambúrguer com pimenta", "Lasanha apimentada", "Chili com carne"],
      tranquilo: ["Macarrão com molho suave", "Wrap com pimenta leve", "Salada Caesar", "Purê com tempero suave"],
      cansado: ["Macarrão picante", "Caldo apimentado", "Pizza simples", "Hambúrguer simples"],
      estressado: ["Caldo verde picante", "Macarrão apimentado", "Purê com tempero forte", "Salada Caesar"]
    },
    frio: {
      feliz: ["Salgado picante", "Salsicha apimentada", "Brigadeiro com pimenta", "Sorvete chili-chocolate"],
      tranquilo: ["Salada Caesar", "Salada caprese", "Wrap com pimenta leve", "Sopa de legumes"],
      cansado: ["Caldo verde picante", "Chocolate quente apimentado", "Macarrão picante", "Purê com tempero leve"],
      estressado: ["Caldo verde", "Chocolate quente com pimenta", "Torta de limão picante", "Bolo de cenoura com pimenta"]
    },
    ambiente: {
      feliz: ["Brigadeiro com pimenta", "Bolo de cenoura com pimenta", "Monstruosa picante", "Torta de limão com pimenta"],
      tranquilo: ["Wrap com pimenta leve", "Salada Caesar", "Salada caprese", "Macarrão alho e óleo"],
      cansado: ["Macarrão carbonara", "Caldo verde", "Purê com frango", "Sopa de legumes"],
      estressado: ["Caldo verde", "Chocolate quente com pimenta", "Torta de limão", "Bolo de cenoura com chocolate"]
    }
  }
};

const imagensComidas = {
  // Doces
  "Bolo de cenoura com chocolate": "./img/bolodecenoura.jpg",
  "Morango do Amor": "./img/morangoamor.jpg",
  "Brownie de chocolate": "./img/brownie.jpg",
  "Cupcake de baunilha": "./img/cupcake.jpg",
  "Bolo de cenoura simples": "./img/bolodecenourasimples.jpg",
  "Biscoitos amanteigados": "./img/biscoitos.jpg",
  "Pudim de leite": "./img/pudim.jpg",
  "Panqueca com mel": "./img/panqueca.jpg",
  "Chocolate quente com marshmallow": "./img/chocolatequente2.jpg",
  "Bolo de chocolate": "./img/bolodechocolate.jpg",
  "Crepe doce": "./img/crepedoce.jpg",
  "Muffin de chocolate": "./img/muffinchocolate.jpg",
  "Torta de limão": "./img/tortadelimao.jpg",
  "Bolo de cenoura com cobertura": "./img/bolocobertura.jpg",
  "Biscoitos de aveia": "./img/biscoitosaveia.jpg",
  "Brigadeiro quente": "./img/brigadeiroquente.jpg",
  "Sorvete de creme com morango": "./img/sorvete.jpg",
  "Cheesecake de morango": "./img/cheesecake.jpg",
  "Picolé de frutas": "./img/picole.jpg",
  "Monstruosa gelada": "./img/monstruosa.jpg",
  "Gelatina de frutas": "./img/gelatina.jpg",
  "Salada de frutas com iogurte": "./img/saladadefrutas.jpg",
  "Pudim gelado": "./img/pudimgelado.jpg",
  "Mousse de chocolate": "./img/moussechocolate.jpg",

  // Salgados
  "Pizza de calabresa": "./img/pizzadecalabresa.jpg",
  "Hambúrguer artesanal": "./img/hamburguerartesanal.jpg",
  "Lasanha de frango": "./img/lasanhadefrango.jpg",
  "Escondidinho de carne": "./img/escondidinho.jpg",
  "Macarrão alho e óleo": "./img/macarraoalhoeoleo.jpg",
  "Purê com frango assado": "./img/purecomfrango.jpg",
  "Sopa cremosa de legumes": "./img/sopadelegumes.jpg",
  "Omelete recheado": "./img/omelete.jpg",
  "Macarrão carbonara": "./img/carbonara.jpg",
  "Caldo verde": "./img/caldoverde.jpg",
  "Pizza simples": "./img/pizzasimple.jpg",
  "Hambúrguer simples": "./img/hamburguersimples.jpg",
  "Sopa de legumes": "./img/sopadelegumes.jpg",
  "Escondidinho": "./img/escondidinho.jpg",
  "Purê com frango": "./img/purecomfrango.jpg",
  "Salada Caesar com frango": "./img/saladacaesar.jpg",
  "Salada caprese": "./img/saladacaprese.jpg",
  "Wrap de frango": "./img/wrap.jpg",
  "Macarrão frio com legumes": "./img/macarraofrio.jpg",
  "Coxinha": "./img/coxinha.jpg",
  "Pastel": "./img/pastel.jpg",
  "Empada": "./img/empada.jpg",
  "Esfiha": "./img/esfiha.jpg",

  // Ácidos
  "Torta de limão quente": "./img/tortadelimao.jpg",
  "Açaí com mel quente": "./img/acai.jpg",
  "Bolo de limão": "./img/bolodelimao.jpg",
  "Cheesecake aquecido": "./img/cheesecake.jpg",
  "Salada com vinagrete suave": "./img/saladavinagrete.jpg",
  "Wrap cítrico": "./img/wrapcitrico.jpg",
  "Macarrão com limão": "./img/macarraolimão.jpg",
  "Caldo verde cítrico": "./img/caldoverde.jpg",
  "Chocolate quente com limão": "./img/chocolatequente2.jpg",
  "Torta gelada de limão": "./img/tortadelimaogelada.jpg",
  "Sorvete de frutas cítricas": "./img/sorvetecitricas.jpg",
  "Picolé de limão": "./img/picolelimao.jpg",
  "Mousse de maracujá": "./img/moussemaracuja.jpg",
  "Salada cítrica": "./img/saladacitrica.jpg",
  "Sopa fria de legumes": "./img/sopafriale.jpg",
  "Wrap com limão": "./img/wrapcomlimao.jpg",
  "Mousse ácido": "./img/mousseacido.jpg",
  "Chocolate gelado": "./img/chocolategelado.jpg",

  // Picantes
  "Pizza quatro queijos picante": "./img/pizzaquatroqueijosp.jpg",
  "Hambúrguer com pimenta": "./img/hamburguerpimenta.jpg",
  "Lasanha apimentada": "./img/lasanhaapimentada.jpg",
  "Chili com carne": "./img/chili.jpg",
  "Macarrão com molho suave": "./img/macarraosuave.jpg",
  "Wrap com pimenta leve": "./img/wrappimentaleve.jpg",
  "Purê com tempero suave": "./img/puresuave.jpg",
  "Macarrão picante": "./img/macarraopicante.jpg",
  "Caldo apimentado": "./img/caldopicante.jpg",
  "Caldo verde picante": "./img/caldopverdpicante.jpg",
  "Purê com tempero forte": "./img/pureforte.jpg",
  "Salgado picante": "./img/salgadopicante.jpg",
  "Salsicha apimentada": "./img/salsichapicante.jpg",
  "Brigadeiro com pimenta": "./img/brigadeiropicante.jpg",
  "Sorvete chili-chocolate": "./img/sorvetechili.jpg",
  "Monstruosa picante": "./img/monstruosapicante.jpg",
  "Torta de limão com pimenta": "./img/tortadelimaopicante.jpg",
  "Bolo de cenoura com pimenta": "./img/bolopicante.jpg"
};
