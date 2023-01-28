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

$.get("https://api.sunnah.com/v1/",function(response){console.log(response)},"json")