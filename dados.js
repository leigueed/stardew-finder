let npcs = [
  {
    nome: "Elliott",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/2/24/Elliott.png",
    descricao: "Elliott é um escritor e poeta que mora em uma casa à beira-mar. Ele é elegante e reservado, e adora a natureza e a música.",
    ocupacao: "Escritor",
    aniversario: "5 de Outono",
    relacionamentos: "Nenhum conhecido na vila",
    linkWiki: "https://stardewvalleywiki.com/Elliott"
  },
  {
    nome: "Harvey",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/7/73/Harvey.png",
    descricao: "Harvey é o médico da vila, dedicado a cuidar da saúde dos moradores. Ele é sério, mas tem um grande coração e se preocupa profundamente com os outros.",
    ocupacao: "Médico",
    aniversario: "14 de Outono",
    relacionamentos: "Nenhum conhecido na vila",
    linkWiki: "https://stardewvalleywiki.com/Harvey"
  },
  {
    nome: "Sam",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/4/47/Sam.png",
    descricao: "Sam é um jovem energético e descontraído que sonha em se tornar um astro do rock. Ele adora skate e tocar guitarra.",
    ocupacao: "Músico aspirante e entregador na JojaMart",
    aniversario: "17 de Verão",
    relacionamentos: "Filho de Kent e Jodi, irmão de Vincent",
    linkWiki: "https://stardewvalleywiki.com/Sam"
  },
  {
    nome: "Sebastian",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
    descricao: "Sebastian é introvertido e passa grande parte do tempo em seu quarto trabalhando como programador freelancer. Ele tem interesse em jogos, música e motocicletas.",
    ocupacao: "Programador freelancer",
    aniversario: "10 de Inverno",
    relacionamentos: "Filho de Robin e meio-irmão de Maru",
    linkWiki: "https://stardewvalleywiki.com/Sebastian"
  },
  {
    nome: "Shane",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Shane.png",
    descricao: "Shane trabalha no JojaMart e lida com problemas pessoais. Apesar de sua atitude inicial rude, ele se importa profundamente com sua família e tem uma paixão por galinhas.",
    ocupacao: "Funcionário da JojaMart",
    aniversario: "20 de Primavera",
    relacionamentos: "Mora com sua tia, Marnie, e sua prima Jas",
    linkWiki: "https://stardewvalleywiki.com/Shane"
  },
  {
    nome: "Abigail",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/5/58/Abigail.png",
    descricao: "Abigail é uma das moradoras mais enigmáticas da vila. Ela é filha de Caroline e Pierre e tem uma personalidade excêntrica, amando itens misteriosos e a prática de atividades como comer doces e tocar instrumentos.",
    ocupacao: "Vendedora na loja de Pierre",
    aniversario: "13 de Outono",
    relacionamentos: "Filha de Pierre e Caroline",
    linkWiki: "https://stardewvalleywiki.com/Abigail"
  },
  {
    nome: "Emily",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Emily.png",
    descricao: "Emily é uma jovem alegre e criativa, muito habilidosa com o design de roupas e adoradora de tecidos e padrões. Ela tem uma personalidade livre e ama a natureza.",
    ocupacao: "Vendedora de roupas e costureira",
    aniversario: "27 de Primavera",
    relacionamentos: "Irmã de Haley",
    linkWiki: "https://stardewvalleywiki.com/Emily"
  },
  {
    nome: "Haley",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/d/d7/Haley.png",
    descricao: "Haley é uma jovem vaidosa e um pouco superficial, mas com o tempo, ela revela um lado mais gentil e preocupado com os outros.",
    ocupacao: "Fotógrafa",
    aniversario: "14 de Verão",
    relacionamentos: "Irmã de Emily",
    linkWiki: "https://stardewvalleywiki.com/Haley"
  },
  {
    nome: "Leah",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/4/43/Leah.png",
    descricao: "Leah é uma artista que adora a natureza e passar o tempo criando esculturas e outras formas de arte. Ela tem um caráter gentil e é muito querida na vila.",
    ocupacao: "Artista e escultora",
    aniversario: "23 de Inverno",
    relacionamentos: "Nenhum conhecido na vila",
    linkWiki: "https://stardewvalleywiki.com/Leah"
  },
  {
    nome: "Maru",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/9/92/Maru.png",
    descricao: "Maru é uma jovem inteligente e trabalhadora que tem uma grande paixão por ciência e invenções.",
    ocupacao: "Estudante e inventora",
    aniversario: "10 de Verão",
    relacionamentos: "Filha de Demetrius e Robin, irmã de Sebastian",
    linkWiki: "https://stardewvalleywiki.com/Maru"
  },
  {
    nome: "Penny",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/7/72/Penny.png",
    descricao: "Penny é uma jovem doce e educada que adora ensinar e ajudar as crianças. Ela tem um grande amor pela leitura.",
    ocupacao: "Professora de escola",
    aniversario: "2 de Outono",
    relacionamentos: "Filha de Pam",
    linkWiki: "https://stardewvalleywiki.com/Penny"
  },
  {
    nome: "Anão",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/9/90/Dwarf.png",
    descricao: "O Anão é uma criatura misteriosa que mora em uma caverna escondida na mina. Ele tem uma grande paixão por gemas e mineradores.",
    ocupacao: "Comerciante de gemas",
    aniversario: "Não se sabe",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Dwarf"
  },
  {
    nome: "Caroline",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Caroline.png",
    descricao: "Caroline é a esposa de Pierre e mãe de Abigail. Ela administra sua casa e é muito próxima dos moradores da vila.",
    ocupacao: "Dona de casa",
    aniversario: "7 de Inverno",
    relacionamentos: "Esposa de Pierre, mãe de Abigail",
    linkWiki: "https://stardewvalleywiki.com/Caroline"
  },
  {
    nome: "Clint",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
    descricao: "Clint é o ferreiro da vila e oferece serviços de aprimoramento de ferramentas e processamento de minérios.",
    ocupacao: "Ferreiro",
    aniversario: "26 de Inverno",
    relacionamentos: "Sem parentes conhecidos na vila",
    linkWiki: "https://stardewvalleywiki.com/Clint"
  },
  {
    nome: "Demetrius",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Demetrius.png",
    descricao: "Demetrius é um cientista que estuda a fauna e flora local. Ele é casado com Robin e pai de Maru e Sebastian.",
    ocupacao: "Cientista",
    aniversario: "19 de Verão",
    relacionamentos: "Marido de Robin, pai de Maru e Sebastian",
    linkWiki: "https://stardewvalleywiki.com/Demetrius"
  },
  {
    nome: "Evelyn",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Evelyn.png",
    descricao: "Evelyn é uma senhora gentil e carinhosa que gosta de cuidar do jardim e das flores.",
    ocupacao: "Aposentada",
    aniversario: "20 de Inverno",
    relacionamentos: "Esposa de George, avó de Alex",
    linkWiki: "https://stardewvalleywiki.com/Evelyn"
  },
  {
    nome: "Feiticeiro",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/0/0e/Wizard.png",
    descricao: "O Feiticeiro mora em uma torre isolada e pratica magia. Ele é misterioso e secreto, mas tem uma grande influência sobre o que acontece em Stardew Valley.",
    ocupacao: "Feiticeiro",
    aniversario: "28 de Primavera",
    relacionamentos: "Nenhum conhecido na vila",
    linkWiki: "https://stardewvalleywiki.com/Wizard"
  },
  {
    nome: "George",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/e/e6/George.png",
    descricao: "George é um senhor de idade com personalidade rabugenta, mas com o tempo, ele mostra um lado mais caloroso. Ele usa cadeira de rodas e gosta de ver esportes.",
    ocupacao: "Aposentado",
    aniversario: "24 de Inverno",
    relacionamentos: "Marido de Evelyn, avô de Alex",
    linkWiki: "https://stardewvalleywiki.com/George"
  },
  {
    nome: "Gus",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/a/a7/Gus.png",
    descricao: "Gus é o dono do restaurante local, onde ele serve pratos deliciosos. Ele é um homem caloroso e gosta de entreter os outros.",
    ocupacao: "Proprietário do restaurante",
    aniversario: "8 de Verão",
    relacionamentos: "Nenhum conhecido na vila",
    linkWiki: "https://stardewvalleywiki.com/Gus"
  },
  {
    nome: "Jas",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Jas.png",
    descricao: "Jas é uma jovem menina que vive com sua tia Marnie. Ela é uma criança tímida e introvertida.",
    ocupacao: "Nenhuma conhecida",
    aniversario: "4 de Verão",
    relacionamentos: "Filha de Marnie",
    linkWiki: "https://stardewvalleywiki.com/Jas"
  },
  {
    nome: "Kent",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/5/58/Kent.png",
    descricao: "Kent é um veterano militar que retorna para a vila após servir no exército. Ele tem uma personalidade rígida, mas mostra um lado mais suave com o tempo.",
    ocupacao: "Veterano de guerra",
    aniversario: "4 de Primavera",
    relacionamentos: "Marido de Jodi, pai de Sam e Vincent",
    linkWiki: "https://stardewvalleywiki.com/Kent"
  },
  {
    nome: "Krobus",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/4/49/Krobus.png",
    descricao: "Krobus é uma criatura misteriosa que vive nas minas. Ele é amigável e oferece itens raros, mas mantém uma natureza reservada.",
    ocupacao: "Comerciante de itens raros",
    aniversario: "Não tem data conhecida",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Krobus"
  },
  {
    nome: "Leo",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/7/72/Leo.png",
    descricao: "Leo é um jovem órfão que mora em uma ilha remota. Ele tem um espírito livre e uma conexão profunda com os animais e a natureza.",
    ocupacao: "Nenhuma conhecida",
    aniversario: "15 de Verão",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Leo"
  },
  {
    nome: "Lewis",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/c/cb/Lewis.png",
    descricao: "Lewis é o prefeito de Pelican Town. Ele cuida da administração da vila e dos eventos locais, sempre se preocupando com o bem-estar dos moradores.",
    ocupacao: "Prefeito",
    aniversario: "7 de Verão",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Lewis"
  },
  {
    nome: "Linus",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/0/0f/Linus.png",
    descricao: "Linus é um morador solitário e recluso que vive nas florestas ao redor da vila. Ele gosta de viver de forma simples e é muito respeitado pelos moradores.",
    ocupacao: "Nômade",
    aniversario: "3 de Inverno",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Linus"
  },
  {
    nome: "Marnie",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/d/d7/Marnie.png",
    descricao: "Marnie é a dona da loja da cidade e também cuida dos animais de fazenda. Ela é gentil e calorosa com todos os moradores.",
    ocupacao: "Proprietária de loja e cuidadora de animais",
    aniversario: "18 de Primavera",
    relacionamentos: "Mãe de Jas, tia de Shane",
    linkWiki: "https://stardewvalleywiki.com/Marnie"
  },
  {
    nome: "Pam",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Pam.png",
    descricao: "Pam é uma mulher robusta que trabalha como motorista do ônibus e mãe de Penny. Ela tem uma personalidade forte e uma paixão por bebidas alcoólicas.",
    ocupacao: "Motorista de ônibus",
    aniversario: "18 de Outono",
    relacionamentos: "Mãe de Penny",
    linkWiki: "https://stardewvalleywiki.com/Pam"
  },
  {
    nome: "Pierre",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/0/0b/Pierre.png",
    descricao: "Pierre é o dono da loja local e marido de Caroline. Ele oferece produtos para os fazendeiros, mas é muito competitivo com outros negócios.",
    ocupacao: "Proprietário da loja Pierre",
    aniversario: "26 de Primavera",
    relacionamentos: "Marido de Caroline, pai de Abigail",
    linkWiki: "https://stardewvalleywiki.com/Pierre"
  },
  {
    nome: "Robin",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/0/09/Robin.png",
    descricao: "Robin é a carpinteira da vila, responsável pela construção e melhoria de edifícios na fazenda. Ela é amiga de muitos moradores e tem uma personalidade acolhedora.",
    ocupacao: "Carpinteira",
    aniversario: "21 de Primavera",
    relacionamentos: "Esposa de Demetrius, mãe de Maru e Sebastian",
    linkWiki: "https://stardewvalleywiki.com/Robin"
  },
  {
    nome: "Sandy",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Sandy.png",
    descricao: "Sandy mora em um deserto distante e tem uma personalidade animada e amigável. Ela vende produtos raros e úteis na loja do deserto.",
    ocupacao: "Proprietária da loja no deserto",
    aniversario: "15 de Outono",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Sandy"
  },
  {
    nome: "Vincent",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/4/42/Vincent.png",
    descricao: "Vincent é uma criança travessa que vive com sua mãe, Jodi. Ele é muito curioso e adora fazer amigos.",
    ocupacao: "Nenhuma conhecida",
    aniversario: "10 de Primavera",
    relacionamentos: "Filho de Jodi e Kent",
    linkWiki: "https://stardewvalleywiki.com/Vincent"
  },
  {
    nome: "Willy",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/a/a7/Willy.png",
    descricao: "Willy é o pescador da vila, conhecido por sua loja de pesca e amor pelo mar. Ele oferece equipamentos de pesca e dá dicas aos fazendeiros interessados.",
    ocupacao: "Pescador",
    aniversario: "24 de Verão",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Willy"
  },
  {
    nome: "Jodi",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Jodi.png",
    descricao: "Jodi é uma mulher amigável e casada com Kent. Ela tem dois filhos, Vincent e Sam, e é conhecida por ser uma boa cozinheira.",
    ocupacao: "Nenhuma conhecida",
    aniversario: "11 de Outono",
    relacionamentos: "Esposa de Kent, mãe de Vincent e Sam",
    linkWiki: "https://stardewvalleywiki.com/Jodi"
  },
  {
    nome: "Alex",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/a/a6/Alex.png",
    descricao: "Alex é um jovem atlético e um dos mais populares da cidade. Ele sonha em se tornar um grande jogador de futebol profissional.",
    ocupacao: "Nenhuma conhecida",
    aniversario: "13 de Primavera",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Alex"
  },
  {
    nome: "Ajudante",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/4/47/Helper.png",
    descricao: "O Ajudante é o seu personagem principal no jogo, a quem o jogador controla na fazenda.",
    ocupacao: "Fazendeiro",
    aniversario: "Não aplicável",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Player"
  },
  {
    nome: "Avô",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Grandpa.png",
    descricao: "Avô é um personagem falecido que aparece no jogo em uma visita espiritual ao jogador. Ele avalia o progresso do jogador na fazenda e oferece desafios.",
    ocupacao: "Falecido",
    aniversario: "Não aplicável",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Grandpa"
  },
  {
    nome: "Passarinha",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/0/0e/Bird.png",
    descricao: "Passarinha é um personagem pequeno que aparece ocasionalmente durante o jogo. Elas são um símbolo da natureza que aparece em diferentes contextos.",
    ocupacao: "Nenhuma conhecida",
    aniversario: "Não aplicável",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Bird"
  },
  {
    nome: "Gil",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/0/01/Gil.png",
    descricao: "Gil é o conselheiro dos aventureiros e trabalha no Guilda dos Aventureiros. Ele oferece desafios para os aventureiros que querem melhorar suas habilidades.",
    ocupacao: "Conselheiro da guilda",
    aniversario: "Não tem data conhecida",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Gil"
  },
  {
    nome: "Governador",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/7/71/Governor.png",
    descricao: "O Governador é o líder da cidade e aparece durante eventos importantes. Ele pode dar ordens ou participar de festivais.",
    ocupacao: "Governador",
    aniversario: "Não tem data conhecida",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Governor"
  },
  {
    nome: "Gunther",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/9/98/Gunther.png",
    descricao: "Gunther é o curador do Museu de Pelican Town. Ele coleciona itens para exibir e oferece recompensas quando o jogador completa exposições.",
    ocupacao: "Curador do museu",
    aniversario: "8 de Outono",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Gunther"
  },
  {
    nome: "Marlon",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/9/96/Marlon.png",
    descricao: "Marlon é o chefe da Guilda dos Aventureiros. Ele oferece missões de combate e dá conselhos aos jogadores aventureiros.",
    ocupacao: "Chefe da guilda dos aventureiros",
    aniversario: "15 de Inverno",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Marlon"
  },
  {
    nome: "Morris",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/2/24/Morris.png",
    descricao: "Morris é um dos personagens antagonistas do jogo e trabalha para a Joja Corp. Ele oferece a opção de comprar produtos de sua empresa.",
    ocupacao: "Gerente da Joja Corp.",
    aniversario: "26 de Inverno",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Morris"
  },
  {
    nome: "Professor Caracol",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/a/a9/ProfessorCaracol.png",
    descricao: "O Professor Caracol é um personagem secundário que está sempre coletando informações sobre o mundo e passa dicas para o jogador.",
    ocupacao: "Pesquisador",
    aniversario: "Não tem data conhecida",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Professor_Caracol"
  },
  {
    nome: "Segurança",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Security.png",
    descricao: "O Segurança é um NPC que protege as instalações importantes da cidade e os eventos especiais.",
    ocupacao: "Segurança",
    aniversario: "Não tem data conhecida",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Security"
  },
  {
    nome: "Sr. Qi",
    imagem: "https://stardewvalleywiki.com/mediawiki/images/d/d5/SrQi.png",
    descricao: "Sr. Qi é um personagem misterioso que oferece desafios e recompensas especiais aos jogadores mais avançados no jogo.",
    ocupacao: "Proprietário de um clube secreto",
    aniversario: "Não tem data conhecida",
    relacionamentos: "Nenhum conhecido",
    linkWiki: "https://stardewvalleywiki.com/Sr._Qi"
  }
];