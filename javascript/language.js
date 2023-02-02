function translateAll(){
    lang = document.querySelector('input[name="lang"]:checked').value; // get translated name

    $.getJSON("../database/languages.json",function(data){  // translate page (add: if not already translated)

        langChosen = data[lang]

        /*for (let i = 1; i < Object.keys(langChosen).length; i++) { // get length of json
            // translate text
            console.log(Object.keys(langChosen)[i])
            document.getElementById(Object.keys(langChosen)[i]).innerHTML = document.getElementById(Object.keys(langChosen)[i])
        }*/

        // TRANSLATE WEBSITE
    })
}

translateAll()