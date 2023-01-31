

$.getJSON("../database/names-sa.json",function(data){
    console.log(data[0])

    dataInd = Math.floor(Math.random() * data.length)
    console.log(data[dataInd])

    document.getElementById("nameTitleArb").innerHTML = data[dataInd].name
})

function translateName(){
    lang = document.querySelector('input[name="lang"]:checked').value;

    $.getJSON("../database/names-"+lang+".json",function(data){
        document.getElementById("nameTitle").innerHTML = data[dataInd].index+" "+data[dataInd].name
        document.getElementById("nameDef").innerHTML = data[dataInd].text
    })
}

translateName()




