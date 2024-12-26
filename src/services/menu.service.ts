import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  expansionMenus = [
    {title: 'Menu de Entradas', description: 'Magníficas opções para abrir seu apetite'},
    {title: 'Pratos Principais', description: 'Deliciosas combinações para satisfazer seu paladar com pratos completos'},
    {title: 'Massas', description: 'Receitas clássicas e irresistíveis, preparadas com o autêntico sabor italiano'},
    {title: 'Carnes', description: 'Cortes selecionados e suculentos, preparados com maestria'},
    {title: 'Peixes', description: 'Frescor do mar em pratos leves e saborosos, feitos para surpreender'},
    {title: 'Sobremesas', description: 'Doces tentações para encerrar sua refeição com chave de ouro'},
    {title: 'Bebidas', description: 'Uma seleção de bebidas refrescantes e sofisticadas para acompanhar cada momento'},
];


  entradas = [
    {id: "Bruschetta", description: "Pão italiano com tomate, manjericão e azeite", price: "18.90"},
    {id: "Carpaccio", description: "Lâminas de carne com molho de alcaparras", price: "26.90"},
    {id: "Salada Caesar", description: "Alface romana, croutons e parmesão com molho especial", price: "23.90"},
    {id: "Bolinho de Bacalhau", description: "Porção com bolinhos de bacalhau fritos", price: "22.90"},
    {id: "Cestinha de Pão", description: "Seleção de pães artesanais com manteiga", price: "14.90"},
    {id: "Tábua de Frios", description: "Variedade de queijos, embutidos e acompanhamentos", price: "49.90"},
    {id: "Empanadas Argentinas", description: "Mini empanadas recheadas com carne", price: "19.90"},
    {id: "Queijo Coalho", description: "Espetinho de queijo coalho grelhado", price: "12.90"},
    {id: "Ceviche de Peixe Branco", description: "Peixe marinado com limão, cebola roxa e coentro", price: "29.90"},
    {id: "Mini Pastéis", description: "Porção de pastéis sortidos (carne, queijo, palmito)", price: "18.90"},
    {id: "Cogumelos Salteados", description: "Cogumelos salteados com ervas e alho", price: "27.90"},
    {id: "Salada Caprese", description: "Tomate, mussarela de búfala e manjericão", price: "25.90"},
    {id: "Guacamole com Chips", description: "Guacamole acompanhado de chips de milho", price: "21.90"},
    {id: "Croquete de Carne", description: "Porção de croquetes de carne temperados", price: "19.90"},
    {id: "Batata Frita com Queijo", description: "Porção de batatas fritas cobertas com queijo", price: "16.90"},
    {id: "Azeitonas Temperadas", description: "Porção de azeitonas marinadas com ervas", price: "13.90"},
    {id: "Escondidinho de Carne", description: "Mini porção de escondidinho de carne seca", price: "28.90"},
    {id: "Anéis de Lula", description: "Porção de anéis de lula empanados", price: "32.90"},
    {id: "Frango à Passarinho", description: "Porção de frango temperado e frito", price: "24.90"},
    {id: "Caldo Verde", description: "Sopa de batata com couve e linguiça", price: "19.90"}
  ];
  
  pratosPrincipais = [
    {id: "Filé à Parmegiana", description: "Filé empanado com queijo e molho de tomate, acompanhado de arroz e batatas fritas", price: "42.90"},
    {id: "Risoto de Camarão", description: "Risoto cremoso com camarões e ervas frescas", price: "49.90"},
    {id: "Lasanha à Bolonhesa", description: "Camadas de massa, carne moída, molho de tomate e queijo gratinado", price: "38.90"},
    {id: "Feijoada Completa", description: "Prato brasileiro com feijão preto, carnes e acompanhamentos", price: "39.90"},
    {id: "Bife à Cavalo", description: "Bife grelhado com ovo frito, arroz e batatas fritas", price: "33.90"},
    {id: "Frango Grelhado", description: "Peito de frango grelhado com purê de batatas", price: "29.90"},
    {id: "Moqueca Baiana", description: "Moqueca de peixe com leite de coco e azeite de dendê", price: "57.90"},
    {id: "Costelinha ao Molho Barbecue", description: "Costelinha suína com molho barbecue e batatas fritas", price: "48.90"},
    {id: "Tilápia Grelhada", description: "Filé de tilápia grelhado com legumes", price: "36.90"},
    {id: "Picadinho de Carne", description: "Carne picada ao molho com arroz e farofa", price: "34.90"},
    {id: "Rabada com Polenta", description: "Rabada cozida acompanhada de polenta cremosa", price: "41.90"},
    {id: "Estrogonofe de Frango", description: "Frango ao molho de creme de leite com cogumelos, acompanhado de arroz e batata palha", price: "31.90"},
    {id: "Pato ao Tucupi", description: "Prato típico paraense com tucupi e jambu", price: "59.90"},
    {id: "Bacalhau com Natas", description: "Prato português de bacalhau gratinado com creme", price: "62.90"},
    {id: "Espaguete à Matriciana", description: "Espaguete com molho de tomate, bacon e pimenta", price: "38.90"},
    {id: "Fraldinha Grelhada", description: "Fraldinha ao ponto com legumes grelhados", price: "52.90"},
    {id: "Cordeiro Assado", description: "Cordeiro assado com cuscuz marroquino", price: "68.90"},
    {id: "Hambúrguer Artesanal", description: "Hambúrguer com queijo cheddar e bacon", price: "29.90"},
    {id: "Arroz de Pato", description: "Arroz de pato desfiado com linguiça", price: "48.90"},
    {id: "Polvo à Lagareiro", description: "Polvo grelhado com batatas ao murro", price: "75.90"}
  ];
  
  massas = [
    {id: "Spaghetti Carbonara", description: "Massa com molho à base de ovos, queijo e bacon", price: "34.90"},
    {id: "Fettuccine Alfredo", description: "Massa com molho cremoso de queijo parmesão", price: "32.90"},
    {id: "Ravioli de Ricota e Espinafre", description: "Massa recheada com ricota e espinafre ao molho de manteiga", price: "37.90"},
    {id: "Penne ao Pesto", description: "Massa ao molho de pesto genovês", price: "28.90"},
    {id: "Linguine com Camarão", description: "Linguine ao molho de tomate com camarões", price: "42.90"},
    {id: "Gnocchi ao Sugo", description: "Nhoque de batata com molho de tomate caseiro", price: "26.90"},
    {id: "Lasanha de Berinjela", description: "Lasanha de berinjela com molho de queijo e tomate", price: "29.90"},
    {id: "Tortellini de Carne", description: "Massa recheada com carne ao molho de tomate", price: "33.90"},
    {id: "Pappardelle ao Ragu", description: "Massa larga ao molho ragu de carne", price: "38.90"},
    {id: "Espaguete à Puttanesca", description: "Massa com molho de tomate, azeitonas e alcaparras", price: "30.90"},
    {id: "Canelone de Queijo", description: "Massa recheada com queijos variados ao molho branco", price: "35.90"},
    {id: "Ravioli de Frango", description: "Ravioli recheado com frango e ervas ao molho pesto", price: "36.90"},
    {id: "Tagliatelle à Bolonhesa", description: "Massa fresca ao molho bolonhesa", price: "31.90"},
    {id: "Farfalle Primavera", description: "Massa em formato de gravata com legumes frescos", price: "27.90"},
    {id: "Conchiglioni Recheado", description: "Massa em formato de concha recheada com queijo e espinafre", price: "39.90"},
    {id: "Capellini ao Alho e Óleo", description: "Massa fina ao alho e óleo com pimenta", price: "25.90"},
    {id: "Penne Arrabiata", description: "Massa ao molho de tomate picante", price: "28.90"},
    {id: "Rondelli de Presunto e Queijo", description: "Massa recheada com presunto e queijo ao molho branco", price: "34.90"},
    {id: "Fusilli com Brócolis", description: "Massa em espiral com molho de brócolis e parmesão", price: "29.90"},
    {id: "Espaguete com Almôndegas", description: "Massa com almôndegas ao molho de tomate", price: "37.90"}
  ];
  
  carnes = [
    {id: "Picanha Grelhada", description: "Picanha suculenta acompanhada de farofa e vinagrete", price: "54.90"},
    {id: "Costela Suína BBQ", description: "Costela suína com molho barbecue, acompanhada de batatas rústicas", price: "48.90"},
    {id: "Medalhão ao Molho Madeira", description: "Medalhão de filé mignon com molho madeira e purê de batatas", price: "58.90"},
    {id: "Churrasco Misto", description: "Prato com diversas carnes grelhadas, arroz e farofa", price: "65.90"},
    {id: "Carne de Sol com Mandioca", description: "Carne de sol acompanhada de mandioca frita e manteiga de garrafa", price: "42.90"},
    {id: "Fraldinha na Brasa", description: "Fraldinha grelhada com chimichurri", price: "52.90"},
    {id: "Filé ao Poivre", description: "Filé mignon ao molho de pimenta acompanhado de arroz", price: "49.90"},
    {id: "Costelinha de Cordeiro", description: "Costelinha de cordeiro grelhada com molho de hortelã", price: "68.90"},
    {id: "Bife Ancho", description: "Bife ancho grelhado ao ponto, acompanhado de batatas fritas", price: "56.90"},
    {id: "T-Bone Steak", description: "T-Bone grelhado com legumes ao vapor", price: "72.90"},
    {id: "Linguiça Artesanal", description: "Linguiça caseira grelhada com pão e molho especial", price: "29.90"},
    {id: "Kafta de Carne", description: "Espetinho de kafta com arroz e salada", price: "33.90"},
    {id: "Hambúrguer de Costela", description: "Hambúrguer de costela com queijo e cebola caramelizada", price: "38.90"},
    {id: "Alcatra ao Molho Mostarda", description: "Alcatra grelhada ao molho de mostarda, acompanhada de arroz", price: "47.90"},
    {id: "Cordeiro Assado", description: "Pernil de cordeiro assado com batatas rústicas", price: "78.90"},
    {id: "Parrillada Argentina", description: "Corte argentino grelhado com chimichurri e batatas", price: "65.90"},
    {id: "Filé Suíno", description: "Filé suíno grelhado ao molho agridoce", price: "39.90"},
    {id: "Steak Tártaro", description: "Prato clássico de carne crua temperada", price: "42.90"},
    {id: "Bife de Chorizo", description: "Corte nobre grelhado acompanhado de arroz e legumes", price: "64.90"},
    {id: "Maminha na Manteiga", description: "Maminha grelhada com alho e manteiga", price: "48.90"}
  ];
    
  peixes = [
    {id: "Salmão Grelhado", description: "Salmão grelhado com legumes ao vapor", price: "55.90"},
    {id: "Bacalhau à Brás", description: "Bacalhau desfiado com batatas, ovos e cebola", price: "62.90"},
    {id: "Moqueca de Peixe", description: "Moqueca com peixe, leite de coco e azeite de dendê, acompanhada de arroz", price: "69.90"},
    {id: "Tilápia Empanada", description: "Tilápia empanada e frita, servida com molho tártaro", price: "38.90"},
    {id: "Camarão à Provençal", description: "Camarões salteados no alho com ervas e arroz", price: "58.90"},
    {id: "Lula à Dorê", description: "Lulas empanadas e fritas, acompanhadas de molho especial", price: "44.90"},
    {id: "Polvo à Lagareiro", description: "Polvo grelhado com batatas ao murro", price: "85.90"},
    {id: "Risoto de Frutos do Mar", description: "Risoto com camarões, lulas e mexilhões", price: "72.90"},
    {id: "Ceviche Clássico", description: "Peixe branco marinado com limão, cebola roxa e coentro", price: "39.90"},
    {id: "Truta Grelhada", description: "Truta grelhada com amêndoas e legumes", price: "49.90"},
    {id: "Escondidinho de Bacalhau", description: "Bacalhau desfiado gratinado com purê de batata", price: "42.90"},
    {id: "Filé de Robalo", description: "Filé de robalo ao molho de alcaparras", price: "68.90"},
    {id: "Casquinha de Siri", description: "Entrada de siri gratinado com farofa", price: "29.90"},
    {id: "Paella Valenciana", description: "Arroz com frutos do mar, frango e açafrão", price: "79.90"},
    {id: "Lagosta Grelhada", description: "Lagosta grelhada com manteiga e alho", price: "120.90"},
    {id: "Caldeirada de Peixe", description: "Ensopado de peixe com legumes e temperos", price: "59.90"},
    {id: "Caranguejo ao Alho", description: "Caranguejo cozido ao alho e óleo", price: "49.90"},
    {id: "Bacalhau com Natas", description: "Prato português de bacalhau gratinado com creme", price: "62.90"},
    {id: "Camarão Empanado", description: "Camarão empanado e frito, acompanhado de molho agridoce", price: "52.90"},
    {id: "Ostras Frescas", description: "Ostras frescas servidas com limão", price: "69.90"}
  ];
  
  sobremesas = [
    {id: "Petit Gâteau", description: "Bolo de chocolate com recheio cremoso, servido com sorvete de baunilha", price: "18.90"},
    {id: "Tiramisu", description: "Sobremesa italiana com camadas de mascarpone e café", price: "22.90"},
    {id: "Pudim de Leite Condensado", description: "Pudim tradicional de leite condensado", price: "14.90"},
    {id: "Cheesecake de Frutas Vermelhas", description: "Cheesecake com calda de frutas vermelhas", price: "24.90"},
    {id: "Mousse de Chocolate", description: "Mousse aerada de chocolate meio amargo", price: "16.90"},
    {id: "Brownie com Sorvete", description: "Brownie de chocolate com bola de sorvete", price: "19.90"},
    {id: "Torta de Limão", description: "Torta com creme de limão e cobertura de merengue", price: "17.90"},
    {id: "Mil Folhas", description: "Camadas de massa folhada com creme de confeiteiro", price: "21.90"},
    {id: "Churros com Doce de Leite", description: "Porção de churros com doce de leite", price: "15.90"},
    {id: "Banoffee", description: "Torta de banana, doce de leite e chantilly", price: "23.90"},
    {id: "Sorvete Artesanal", description: "Seleção de sabores de sorvete artesanal", price: "12.90"},
    {id: "Cocada Cremosa", description: "Cocada cremosa servida quente", price: "14.90"},
    {id: "Creme Brûlée", description: "Sobremesa francesa com crosta de açúcar caramelizado", price: "19.90"},
    {id: "Bolo de Cenoura com Chocolate", description: "Bolo de cenoura com cobertura de chocolate", price: "14.90"},
    {id: "Frutas da Estação", description: "Seleção de frutas frescas da estação", price: "12.90"},
    {id: "Torta Holandesa", description: "Torta com creme amanteigado e base de biscoito", price: "22.90"},
    {id: "Gelatina Colorida", description: "Gelatina com camadas coloridas e creme", price: "10.90"},
    {id: "Pavê de Chocolate", description: "Camadas de creme, biscoito e chocolate", price: "18.90"},
    {id: "Sorbet de Limão", description: "Sorbet refrescante de limão", price: "11.90"},
    {id: "Profiteroles", description: "Carolinas recheadas com creme e cobertas com chocolate", price: "20.90"}
  ];
  
  bebidas = [
    {id: "Água Mineral", description: "Garrafa de 500ml", price: "4.50"},
    {id: "Refrigerante", description: "Lata de 350ml", price: "6.00"},
    {id: "Suco Natural", description: "Suco natural de laranja ou limão", price: "8.90"},
    {id: "Chá Gelado", description: "Chá gelado de limão ou pêssego", price: "7.90"},
    {id: "Água com Gás", description: "Garrafa de 500ml com gás", price: "5.50"},
    {id: "Cerveja Nacional", description: "Cerveja long neck", price: "9.90"},
    {id: "Cerveja Importada", description: "Cerveja importada premium", price: "14.90"},
    {id: "Vinho Tinto", description: "Taça de vinho tinto seco", price: "18.90"},
    {id: "Vinho Branco", description: "Taça de vinho branco suave", price: "18.90"},
    {id: "Espumante", description: "Taça de espumante brut", price: "19.90"},
    {id: "Caipirinha", description: "Caipirinha de limão com cachaça", price: "15.90"},
    {id: "Caipiroska", description: "Caipirinha de vodka com frutas", price: "17.90"},
    {id: "Coquetel Sem Álcool", description: "Mix de sucos e frutas, sem álcool", price: "12.90"},
    {id: "Whisky", description: "Dose de whisky 12 anos", price: "22.90"},
    {id: "Café Expresso", description: "Café expresso curto", price: "5.90"},
    {id: "Cappuccino", description: "Café com leite e espuma de leite", price: "8.90"},
    {id: "Chocolate Quente", description: "Bebida quente de chocolate", price: "7.90"},
    {id: "Smoothie", description: "Bebida cremosa de frutas", price: "13.90"},
    {id: "Limonada Suíça", description: "Limonada cremosa", price: "10.90"},
    {id: "Milkshake", description: "Milkshake de chocolate ou morango", price: "12.90"}
  ];

  getEntradas() {return this.entradas}
  getPrincipais() {return this.pratosPrincipais}
  getMassas() {return this.massas}
  getCarnes() {return this.carnes}
  getPeixes() {return this.peixes}
  getSobremesas() {return this.sobremesas}
  getBebidas() {return this.bebidas}
  getExpansionMenus() {return this.expansionMenus}
}
