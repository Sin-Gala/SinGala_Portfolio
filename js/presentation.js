let presentationDict;

let title_el;
let title_menu_el;
let presentation_el;
let link_parent_el;

let currentPresentation;

function initDatas()
{ 
    presentationDict = {
        'about': 
            new presentationDatas(
                {
                    'en': 'About me',
                    'fr': 'A propos de moi',
                    'pt': 'Sobre mim'
                },
                {
                    'en': "Hello and welcome! <br/><br/> My name is SinGala, I'm a self-taught programmer, working as a freelancer and in teams for 5 years now. I am focusing mostly on web and game development, but I'm always eager to learn and discover new programming knowledge." +
                          "<br/><br/> In this portfolio, you'll learn my current abilities, and see some of my projects. If you wish to contact me, check the links below! <br/><br/> Have a good day! ~SinGala",
                    'fr': "Bonjour et bienvenue! <br/><br/> Je m'appelle SinGala, développeuse auto-didacte. J'ai travaillé en tant que freelancer et au sein d'équipes depuis maintenant 5 ans. Je me spécialise principalement en développement web et dans la créations de jeux vidéos, mais je suis toujours en recherche de découverte et d'apprentissage." +
                          "<br/><br/> Au sein de ce portfolio, vous trouverez mes capacités actuelles, ainsi que certains de mes projets. Si vous souhaitez me contacter, tout se trouve dans les liens en-dessous! <br/><br/> Bonne journée! ~SinGala",
                    'pt': "Olá e bem-vindo! <br/><br/> Meu nome é SinGala, sou programador autodidata, trabalho como freelancer e em equipes há 5 anos. Estou focando principalmente no desenvolvimento web e de jogos, mas estou sempre ansioso para aprender e descobrir novos conhecimentos de programação." +
                          "<br/><br/> Neste portfólio, você conhecerá minhas habilidades atuais e verá alguns de meus projetos. Se você deseja entrar em contato comigo, verifique os links abaixo! <br/><br/> Tenha um bom dia! ~SinGala"
                },
                [
                    new linksDatas('mailto:galahane.rouille@gmail.com', 'Email'),
                    new linksDatas('https://www.linkedin.com/in/singala', 'LinkedIn'),
                    new linksDatas('https://github.com/Sin-Gala', 'Github'),
                    new linksDatas('https://fr.fiverr.com/theanaprod', 'Fiverr')
                ]),
        'web': 
            new presentationDatas(
                {
                    'en': 'Web Developer',
                    'fr': 'Développeur Web',
                    'pt': 'Desenvolvedor Web'
                },
                {
                    'en': 'Creating websites was my first entry to the wonderful world of coding... I am mostly working on static websites, using HTML, CSS (with and without Bootstrap) and Javascript. I also created a few plugins for facilitating some aspects of the website creation process.' +
                          "<br/><br/> Over the years, I created websites for various purposes and clients, and I have been learning new techniques on each project, allowing me to get better every day in this craft. <br><br/> I am currently learning React, Express.js, and Three.js.",
                    'fr': "La création de sites Web a été ma première entrée dans le monde merveilleux du code... Je travaille principalement sur des sites Web statiques, en utilisant HTML, CSS (avec et sans Bootstrap) et Javascript. J'ai également créé quelques plugins pour faciliter certains aspects du processus de création de site Web." +
                          "<br/><br/> Au fil des années, j'ai créé des sites Web pour divers objectifs et clients, et j'ai appris de nouvelles techniques sur chaque projet, me permettant de m'améliorer chaque jour dans ce métier. <br><br/> J'apprends actuellement React, Express.js et Three.js.",
                    'pt': 'Criar sites foi minha primeira entrada no maravilhoso mundo da codificação... Estou trabalhando principalmente em sites estáticos, usando HTML, CSS (com e sem Bootstrap) e Javascript. Também criei alguns plugins para facilitar alguns aspectos do processo de criação do site.' +
                          "<br/><br/> Ao longo dos anos, criei sites para diversos propósitos e clientes, e tenho aprendido novos técnicas em cada projeto, me permitindo melhorar a cada dia neste ofício. <br><br/> Atualmente estou aprendendo React, Express.js e Three.js.",
                },
                [
                    new linksDatas('https://github.com/Sin-Gala/JS-Website-Plugins', 'Website Plugins - JS'),
                    new linksDatas('https://theanaproductions.com/', 'Theana Website')
                ]),
        'game': 
            new presentationDatas(
                {
                    'en': 'Unity Developer',
                    'fr': 'Développeur Unity',
                    'pt': 'Desenvolvedor Unity'
                },
                {
                    'en': "I've created over a dozen games in different genres and style over the years, whether for my own company, or for clients. I have been the lead developer for most of them, and have specialized myself in creating interesting systems." +
                          "I have a soft spot for creating abstract systems, like inventories, localization, saving, etc. I am currently learning how to implement server-side aspect to games, as well as create multiplayer games." +
                          "<br/><br/> While I do code all of my games myself, I do also have knowledge of a few plugins, such as: Adventure Creator, Easy Grid Builder Pro, and Corgi Engine. I also have knowledge for the implementation of" +
                          "specific SDKs, such as: GooglePlayServicesSDK, SteamworksSDK and LootLockerSDK.",
                    'fr': "Au fil des années, j'ai créé plus d'une douzaine de jeux dans différents genres et styles, que ce soit pour ma propre compagnie ou pour des clients. J'ai été la développeuse principal de la plupart d'entre eux et je me suis spécialisé dans la création de systèmes intéressants." +
                          "J'ai un faible pour la création de systèmes abstraits, tels que les inventaires, la localisation, la sauvegarde, etc. J'apprends actuellement à implémenter l'aspect côté serveur des jeux, ainsi qu'à créer des jeux multijoueurs." +
                          "<br/><br/> Bien que je code tous mes jeux moi-même, je sais également utiliser quelques plugins, tels que : Adventure Creator, Easy Grid Builder Pro et Corgi Engine. J'ai également des connaissances pour l'implémentation de" +
                          "SDK spécifiques, tels que : GooglePlayServicesSDK, SteamworksSDK et LootLockerSDK.",
                    'pt': "Eu criei mais de uma dúzia de jogos em diferentes gêneros e estilos ao longo dos anos, seja para minha própria empresa ou para clientes. Fui o desenvolvedor líder da maioria deles e me especializei na criação de sistemas interessantes." +
                          "Tenho uma queda por criar sistemas abstratos, como inventários, localização, salvamento, etc. No momento, estou aprendendo como implementar o lado do servidor em jogos, bem como criar jogos multijogador." +
                          "<br/><br/> Embora eu mesmo codifique todos os meus jogos, também tenho conhecimento de alguns plug-ins, como: Adventure Creator, Easy Grid Builder Pro e Corgi Engine. Também tenho conhecimento para o implementação de" +
                          "SDKs específicos, como: GooglePlayServicesSDK, SteamworksSDK e LootLockerSDK."
                },
                [
                    new linksDatas('https://theanaproductions.com/games.html', 'My Games'),
                    new linksDatas('https://fr.fiverr.com/theanaprod/create-a-2d-platformer-game-with-unity', 'Fiverr - PC Game'),
                    new linksDatas('https://fr.fiverr.com/theanaprod/create-a-2d-maze-game-with-unity', 'Fiverr - Mobile Game')
                ]),
        'other': 
            new presentationDatas(
                {
                    'en': 'Other Projects',
                    'fr': 'Autres Projets',
                    'pt': 'Outros Projetos'
                },
                {
                    'en': 'On the side, I love to learn new concepts and languages. I have created a few projects over the years, including a Vocabulary Dictionary, an Idea Generator, and a very basic programming language. You can find more in my Github.',
                    'fr': "En parallèle, j'aime apprendre de nouveaux concepts et de nouvelles langues. J'ai créé quelques projets au fil des ans, notamment un dictionnaire de vocabulaire, un générateur d'idées et un langage de programmation très basique. Vous pouvez en trouver plus sur mon Github.",
                    'pt': 'Por outro lado, adoro aprender novos conceitos e linguagens. Eu criei alguns projetos ao longo dos anos, incluindo um dicionário de vocabulário, um gerador de ideias e uma linguagem de programação muito básica. Você pode encontrar mais no meu Github.',
                },
                [
                    new linksDatas('https://github.com/Sin-Gala/Omega-VocabularyConsole', 'Omega - Vocabulary (C#)'),
                    new linksDatas('https://github.com/Sin-Gala/IdeaGenerator', 'Idea Generator (Julia)'),
                    new linksDatas('https://github.com/Sin-Gala/Frenchy', 'Frenchy (C#/ANTLR)')
                ]),
        'ability': 
            new presentationDatas(
                {
                    'en': 'My Abilities',
                    'fr': 'Mes Capacités',
                    'pt': 'Minhas Habilidades'
                },
                {
                    'en': "Languages I use in my everyday work: C#, JavaScript, HTML and CSS <br/>" +
                          "Languages I have used at least once: Julia, Lua, Java, SQL, PHP <br/><br/>" +
                          "Softwares and Frameworks I use often: Unity, Github, Blender <br/>" +
                          "Softwares and Frameworks I have used at least once: MySQL, PHPMyAdmin, Live2D Cubism, PlaydateSDK, FabricSDK",
                    'fr': "Langages que j'utilise au quotidien : C#, JavaScript, HTML et CSS <br/>" +
                          "Langages que j'ai utilisés au moins une fois : Julia, Lua, Java, SQL, PHP <br/><br/>" +
                          "Logiciels et Frameworks que j'utilise souvent : Unity, Github, Blender <br/>" +
                          "Logiciels et Frameworks que j'ai utilisés au moins une fois : MySQL, PHPMyAdmin, Live2D Cubism, PlaydateSDK, FabricSDK",
                    'pt': "Linguagens que uso no meu trabalho diário: C#, JavaScript, HTML e CSS <br/>" +
                          "Linguagens que usei pelo menos uma vez: Julia, Lua, Java, SQL, PHP <br/><br/>" +
                          "Softwares e Frameworks que uso com frequência: Unity, Github, Blender <br/>" +
                          "Softwares e Frameworks que usei pelo menos uma vez: MySQL, PHPMyAdmin, Live2D Cubism, PlaydateSDK, FabricSDK"
                },
                [])                           
      };

    title_menu_el = {
        'about': document.getElementById('about_menu_el'),
        'web': document.getElementById('web_menu_el'),
        'game': document.getElementById('game_menu_el'),
        'other': document.getElementById('other_menu_el'),
        'ability': document.getElementById('ability_menu_el')
    }
    title_el = document.getElementById('title_txt');
    presentation_el = document.getElementById('presentation_txt');
    link_parent_el = document.getElementById('presentation_link_parent');
}
  
function updatePresentation(key)
{
    while (link_parent_el.hasChildNodes())
    {
        link_parent_el.removeChild(link_parent_el.firstChild)
    }

    let currentLanguage = document.documentElement.lang.slice(0,2);

    if (key == 'old')
    {
        key = currentPresentation;
    }

    Object.keys(title_menu_el).forEach(function(menu_key) {
        title_menu_el[menu_key].innerHTML = presentationDict[menu_key].title[currentLanguage];
    });

    title_el.innerHTML = presentationDict[key].title[currentLanguage];
    presentation_el.innerHTML = presentationDict[key].description[currentLanguage];

    presentationDict[key].links.forEach( (link) => {
        let newList_el = document.createElement("li");
        let newLink_el = document.createElement("a");

        link_parent_el.appendChild(newList_el);
        newList_el.appendChild(newLink_el);

        newLink_el.innerHTML = link.linkTitle;
        newLink_el.href = link.url;
        newLink_el.target = '_blank';
    });

    currentPresentation = key;
}

function presentationDatas(title, description, links)
{
    this.title = title;
    this.description = description;
    this.links = links;
}

function linksDatas(url, linkTitle)
{
    this.url = url;
    this.linkTitle = linkTitle;
}

function localizedDatas(language, txt)
{
    this.language = language;
    this.txt = txt;
}