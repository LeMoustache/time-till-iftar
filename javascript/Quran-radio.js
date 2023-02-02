QuranRadios = { // radio links
    "sa":"https://Qurango.net/radio/mix",
    "eng":"https://qurango.net/radio/translation_quran_english_bsfr",
    "tur":"https://qurango.net/radio/translation_quran_turkish",
    "de":"https://qurango.net/radio/translation_quran_german",
}

radioList = document.getElementById("QrDrpdwnBttn")
radioLang = QuranRadios["sa"] 

slider = document.getElementById("QrRadioVolume")


var radioPlaying = false

function playRadio(){ 

    if (radioPlaying==false){   // play radio
        radio = new Audio(radioLang)

        radio.play()
        radioPlaying = true

        document.getElementById("QrRadioPlay").innerHTML = "||"
    }else{  // stop radio
        radio.pause()
        radioPlaying = false

        document.getElementById("QrRadioPlay").innerHTML = "▶"
    }
}

radioList.onchange = function changeRadio(){ // change radio
    radioLang = QuranRadios[radioList.value]
    
    if (radioPlaying==true){
        playRadio()
        playRadio()
    }
}

slider.onchange = function changeRadio(){ // change radio
    radio.volume = slider.value / 100
}