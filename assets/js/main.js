$(document).ready(function() {

    let key = 'Oqf2S0Ti12Rvjts34nggsvkIMbf6WLFg';   
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Oqf2S0Ti12Rvjts34nggsvkIMbf6WLFg&limit=5";

    $.ajax ({
        URL: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response);
    });

});