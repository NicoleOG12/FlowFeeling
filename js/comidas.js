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
      estressado: ["Sorvete de limão", "Sorvete de frutas vermelhas", "Cheesecake gelado", "Mousse de chocolate"]
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
      estressado: ["Sorvete de limão", "Sorvete de frutas vermelhas", "Cheesecake gelado", "Mousse ácido"]
    },
    ambiente: {
      feliz: ["Torta de limão", "Cheesecake de limão", "Bolo de limão", "Mousse de maracujá"],
      tranquilo: ["Salada caprese", "Salada cítrica", "Wrap de frango com limão", "Macarrão com limão"],
      cansado: ["Macarrão carbonara", "Caldo verde", "Purê com frango", "Chocolate gelado"],
      estressado: ["Caldo verde", "Torta de limão", "Bolo simples", "Chocolate quente"]
    }
  },

  gorduroso: {
    quente: {
      feliz: ["Pizza quatro queijos", "Hambúrguer com bacon", "Lasanha à bolonhesa", "Batata frita com cheddar"],
      tranquilo: ["Macarrão à carbonara", "Panqueca recheada", "Omelete com queijo", "Arroz cremoso"],
      cansado: ["Macarrão com manteiga", "Sopa cremosa de queijo", "Pizza simples com queijo", "Hambúrguer simples"],
      estressado: ["Purê com carne moída", "Lasanha cremosa", "Macarrão com molho branco", "Batata gratinada"]
    },
    frio: {
      feliz: ["Empada de frango", "Croissant com queijo", "Pizza simples com queijo", "Pão de queijo"],
      tranquilo: ["Omelete com queijo", "Bolinho de arroz", "Hambúrguer simples", "Arroz cremoso"],
      cansado: ["Macarrão com manteiga", "Sopa cremosa de queijo", "Panqueca recheada", "Croissant com queijo"],
      estressado: ["Bolo de chocolate com cobertura", "Batata gratinada", "Purê com carne moída", "Macarrão com molho branco"]
    },
    ambiente: {
      feliz: ["Pizza quatro queijos", "Lasanha à bolonhesa", "Bolo de chocolate com cobertura", "Empada de frango"],
      tranquilo: ["Misto quente", "Pão de queijo", "Bolinho de arroz", "Arroz cremoso"],
      cansado: ["Hambúrguer simples", "Omelete com queijo", "Panqueca recheada", "Macarrão com manteiga"],
      estressado: ["Lasanha cremosa", "Batata frita com cheddar", "Macarrão à carbonara", "Croissant com queijo"]
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
  "Wrap cítrico": "./img/wrap.jpg",
  "Macarrão com limão": "./img/macarraolimão.jpg",
  "Caldo verde cítrico": "./img/caldoverde.jpg",
  "Chocolate quente com limão": "./img/chocolatequente2.jpg",
  "Sorvete de limão": "./img/sorvetelimao.jpg",
  "Sorvete de frutas cítricas": "./img/sorvetecitrico.jpg",
  "Picolé de limão": "./img/picolelimao.jpg",
  "Mousse de maracujá": "./img/moussemaracuja.jpg",
  "Salada cítrica": "./img/saladacitrica.jpg",
  "Sopa fria de legumes": "./img/sopalegumes.jpg",
  "Wrap com limão": "./img/wrapcomlimao.jpg",
  "Mousse ácido": "./img/mousseacido.jpg",
  "Chocolate gelado": "./img/chocolategelado.jpg",

  // Gorduroso
  "Pizza quatro queijos": "./img/pizzaquatroqueijos.jpg",
  "Hambúrguer com bacon": "./img/hamburguerbacon.jpg",
  "Lasanha à bolonhesa": "./img/lasanhabolonhesa.jpg",
  "Batata frita com cheddar": "./img/batatachedar.jpg",
  "Macarrão à carbonara": "./img/macarraocarbonara.jpg",
  "Panqueca recheada": "./img/panquecarecheada.jpg",
  "Omelete com queijo": "./img/omeletequeijo.jpg",
  "Arroz cremoso": "./img/arrozcremoso.jpg",
  "Macarrão com manteiga": "./img/macarraomanteiga.jpg",
  "Sopa cremosa de queijo": "./img/sopaqueijo.jpg",
  "Pizza simples com queijo": "./img/pizzasimples.jpg",
  "Hambúrguer simples": "./img/hamburguersimples.jpg",
  "Purê com carne moída": "./img/purecarne.jpg",
  "Lasanha cremosa": "./img/lasanhacremosa.jpg",
  "Macarrão com molho branco": "./img/macarraomolhobranco.jpg",
  "Batata gratinada": "./img/batatagratinada.jpg",
  "Empada de frango": "./img/empadafrango.jpg",
  "Croissant com queijo": "./img/croissantqueijo.jpg",
  "Pão de queijo": "./img/paodequeijo.jpg",
  "Bolinho de arroz": "./img/bolinhoarroz.jpg",
  "Bolo de chocolate com cobertura": "./img/bolochocolate.jpg",
  "Misto quente": "./img/mistoquente.jpg"
};
