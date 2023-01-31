if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// Get Arabic script
xmlhttp.open("GET", "database/names-tur.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var names = xmlDoc.getElementsByTagName("names"); // get nammes

// GET RANDOM NAME
namesInd = Math.floor(Math.random() * names.length);
chosenName =  xmlDoc.getElementsByTagName("name")

console.log(chosenName)


