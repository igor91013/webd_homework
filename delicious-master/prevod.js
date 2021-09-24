function getLanguage() 
{
    let language = localStorage.getItem('language');
    (language == null) ? setLanguage('en') : setLanguage(language);
}

function setLanguage(lang) 
{
    localStorage.setItem('language', lang);
    loadLanguage();
}

function textInput()
{
    for (const property in data) {
        
        $("body").find(`[data-lang="${property}"]`).text(data[property])
    }

}

function loadLanguage() {
    let language = localStorage.getItem('language');
    
    zaBrisanje=document.getElementById("language");
    if (zaBrisanje)
        zaBrisanje.remove();
    
    let scr = document.createElement('script');
    scr.type = "text/javascript";
    scr.id = "language";
    scr.src = (language =='sr')?"sr.js":"en.js";
   

    document.getElementsByTagName('head')[0].appendChild(scr);
    setTimeout(textInput, 100);
}


