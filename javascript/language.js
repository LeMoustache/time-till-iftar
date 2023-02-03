languages = {
   "eng" : {
      "language":"eng",
      "time-till-iftar":"Time until Iftar",
      "hadith":"Hadith",
      "reminder-text":"What did you do for God today?",
      "settings":"Settings",
      "choose-language":"Choose Language",
      "choose-language-adhan":"Choose Adhan Language",
      "choose-city":"Choose City",
      "save":"Save",
      "ramadan-mubarak":"Ramadan Mubarak",
      "quran-radio":"Quran Radio",
      "islamic-dates":"Islamic Dates - 2023",

      "26-january":"26 January:",
        "17-february":"17 February:",
        "6-march":"6 March:",
        "23-march":"23 March:",
        "17-april":"17 April:",
        "20-april":"20 April:",
        "21-23-april":"21-23 April:",
        "27-june":"27 June:",
        "28-june-1-july":"28 June - 1 July:",
        "19-july":"19 July:",
        "28-july":"28 July:",
        "26-september":"26 September:",

        "Laylatal-Raghaib":" Laylat al-Raghaib",
        "AlIsra’walMi’raj":" Al Isra’ wal Mi’raj",
        "Shab-e-Barat":" Shab-e-Barat",
        "Ramadan-begin":" Ramadan Begin",
        "LaylatulQadr":" Laylatul Qadr",
        "EidalFitrEve":" Eid al Fitr Eve",
        "EidAlFitr":" Eid al Fitr",
        "dayofarafah":" Day of 'Arafah",
        "eidaladha":" Eid al Adha",
        "islamicnewyear":" Islamic New Year",
        "dayofashura":" Day of Ashura",
        "rabialawwal":" Rabi’ Al-Awwal"
   },

   "tur" : {
        "language":"tur",
        "time-till-iftar":"İftara kalan süre",
        "hadith":"Hadis",
        "reminder-text":"Bugün Allah için ne yaptın?",
        "settings":"Ayarlar", 
        "choose-language":"Dil Seç",
        "choose-language-adhan":"Ezan Dili Seç",
        "choose-city":"Şehir Seç",
        "save":"Kaydet",
        "ramadan-mubarak":"Ramazanınız Mübarek Olsun",
        "quran-radio":"Kuran Radyo",
        "islamic-dates":"Dini Günler - 2023",

        "26-january":"26 Ocak:",
        "17-february":"17 Şubat:",
        "6-march":"6 Mart:",
        "23-march":"23 Mart:",
        "17-april":"17 Nisan:",
        "20-april":"20 Nisan:",
        "21-23-april":"21-23 Nisan:",
        "27-june":"27 Haziran:",
        "28-june-1-july":"28 Haziran - 1 Temmuz:",
        "19-july":"19 Temmuz:",
        "28-july":"28 Temmuz:",
        "26-september":"26 Eylül:",

        "Laylatal-Raghaib":" Regaib Kandili",
        "AlIsra’walMi’raj":" Miraç Kandili",
        "Shab-e-Barat":" Berat Kandili",
        "Ramadan-begin":" Ramazan Başlangıç",
        "LaylatulQadr":" Kadir Gecesi",
        "EidalFitrEve":" Ramazan Bayramı Arefesi",
        "EidAlFitr":" Ramazan Bayramı",
        "dayofarafah":" Kurban Bayramı Arefesi",
        "eidaladha":" Kurban Bayramı",
        "islamicnewyear":" Hicri Yılbaşı",
        "dayofashura":" Aşure Günü",
        "rabialawwal":" Mevlid Kandili"
     }
}

function translateAll(){
    lang = document.querySelector('input[name="lang"]:checked').value; // get translated name

    langChosen = languages[lang]

    for (let i = 1; i < Object.keys(langChosen).length; i++) { // get length of json
        // translate text
        document.getElementById(String(Object.keys(langChosen)[i])).innerHTML = langChosen[Object.keys(langChosen)[i]]
    }
}

translateAll()