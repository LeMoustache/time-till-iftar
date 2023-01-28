if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// Get Arabic script
xmlhttp.open("GET", "database/quran-simple.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var suraAr = xmlDoc.getElementsByTagName("sura"); // get sura
surahIndex = Math.floor(Math.random() * suraAr.length); // choose random sura

ayas = suraAr[surahIndex].getElementsByTagName("aya") // get ayas from sura
const ayahIndex = Math.floor(Math.random() * ayas.length); // choose random aya

document.getElementById("surahTitleArb").innerHTML = suraAr[surahIndex].getAttribute("name") // set surah Title
document.getElementById("surahTextArb").innerHTML = ayas[ayahIndex].getAttribute("text") // set surah text

    
// Get translation
function translateSurah(){
    lang = document.querySelector('input[name="lang"]:checked').value;

    xmlhttp.open("GET", "database/quran-"+lang+".xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var suraTr = xmlDoc.getElementsByTagName("sura"); // get sura
    ayas = suraTr[surahIndex].getElementsByTagName("aya") // get ayas from sura

    document.getElementById("surahTextEng").innerHTML = ayas[ayahIndex].getAttribute("text")
}

translateSurah()

// get sura english Name
$.get("https://api.quran.com/api/v4/chapters/"+suraAr[surahIndex].getAttribute("index")+"?language=en", function(response) {
    document.getElementById("surahTitleEng").innerHTML = response.chapter.name_simple + ", " + (surahIndex+1) + ":" + (ayahIndex+1)
}, "json")

var playing=false

function playSurah(){

    $.get("https://api.quran.com/api/v4/chapter_recitations/2/"+(surahIndex+1), function(response) { // get surah audio        

        if (playing==false){ // play
            surahAudio = new Audio(response.audio_file.audio_url);

            surahAudio.play();
            playing = true

            document.getElementById("surahAudioButton").innerHTML = "||"
        }else{ // stop
            surahAudio.currentTime = 0; 
            surahAudio.pause();
            playing = false

            document.getElementById("surahAudioButton").innerHTML = "▶"
        }

    }, "json")

}




  
