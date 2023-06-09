let presentationDict;

let title_el;
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
                    'en': 'This is a test presentation',
                    'fr': 'Ceci est une présentation test',
                    'pt': 'Isso é um texto em portuguese'
                },
                [
                    new linksDatas('https://github.com/Sin-Gala', 'Github'),
                    new linksDatas('https://theanaproductions.com/', 'Theana')
                ]),
        'web': 
            new presentationDatas(
                {
                    'en': 'Web Dev',
                    'fr': 'Développeur Web',
                    'pt': 'Web'
                },
                {
                    'en': 'This is a test web dev presentation',
                    'fr': 'Ceci est une présentation test pour web dev',
                    'pt': 'Isso é um texto em portuguese - web'
                },
                [
                    new linksDatas('https://github.com/Sin-Gala', 'Github')
                ]),
        'game': 
            new presentationDatas(
                {
                    'en': 'Game Dev',
                    'fr': 'Développeur Jeux',
                    'pt': 'Game'
                },
                {
                    'en': 'This is a test game dev presentation',
                    'fr': 'Ceci est une présentation test pour game dev',
                    'pt': 'Isso é um texto em portuguese - game'
                },
                [
                    new linksDatas('https://github.com/Sin-Gala', 'Github'),
                    new linksDatas('https://github.com/Sin-Gala', 'Github'),
                    new linksDatas('https://github.com/Sin-Gala', 'Github'),
                    new linksDatas('https://theanaproductions.com/', 'Theana')
                ])              
      };

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