/* var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.sunnah.com/v1/hadiths/random",
    "method": "GET",
    "headers": {
      "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk"
    },
    "data": "{}"
}

$.ajax(settings).done(function (response) {
    console.log(response);
  }); */




// set lang
lang = document.querySelector('input[name="lang"]:checked').value;

const hadithGivers = ["bukhari","muslim","nasai","abudawud","tirmidhi","ibnmajah","malik"];
const hadithGiversName = ["Sahih al Bukhari","Sahih Muslim","Sunan an Nasai","Sunan Abu Dawud","Jami At Tirmidhi","Sunan Ibn Majah","Muwatta Malik"];

haditGiverInd = Math.floor(Math.random() * hadithGivers.length); // choose random hadith
hadithGiver = hadithGivers[haditGiverInd]
hadithGiverName = hadithGiversName[haditGiverInd]

// get hadith
$.get("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/"+lang+"-"+hadithGiver+".json",function(response){

  hadiths = response.hadiths
  hadithIndex = Math.floor(Math.random() * hadiths.length); // choose random hadith

  hadith = hadiths[hadithIndex]
  hadithNumber = hadith.hadithnumber

  document.getElementById("hadithGiver").innerHTML = hadithGiverName +", "+ hadithNumber
  document.getElementById("hadithText").innerHTML = hadith.text

},"json")

function translateHadith(){
  lang = document.querySelector('input[name="lang"]:checked').value;
  $.get("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/"+lang+"-"+hadithGiver+".json",function(response){

  hadiths = response.hadiths
  
  for (let i = 0; i < hadiths.length; i++) {
    hadith = hadiths[i]

    if (hadith.hadithnumber==hadithNumber){
      break
    }
  }

  if (!hadith.text==""){
    document.getElementById("hadithText").innerHTML = hadith.text
  }

},"json")
}