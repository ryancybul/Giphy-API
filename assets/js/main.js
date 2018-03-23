$(document).ready(function() {

    //Variables
    let buttonArray = ['Homer Simpson', 'Bart Simpson', 'Marge Simpson', 'Lisa Simpson', 'Millhouse', 'Smithers', 'Mr Burns', 'Barney Gumble'];

    //Functions
    function init() {
        printButtons();
    }

    function printButtons() {
        //Emptys the array
        $('.js-buttons').empty();
        //Prints array
        for (let i = 0; i < buttonArray.length; i++) {
            let newButton = $('<button type="button" value="' + buttonArray[i]+ '">' + buttonArray[i] + '</button>');
            newButton.addClass('button');
            $('.js-buttons').append(newButton);
        }
    }

    //Events
    //Sets the initial state on page load
    init();

    //Submits user input to array and generates button
    $('.submitButton').on('click', function(event) {
        //Preventing the button from trying to submit the form
        event.preventDefault();
        //Stores the input in a variable
        var newChar = $('.js-text-input').val().trim();
        //Pushes new character to Variables
        buttonArray.push(newChar);
        //Clears Text Input
        $('.js-text-input').val('');
        printButtons();
    });

    //Button on-click event
    $('.button').on('click', function printGifs() {
        //Empty display div
        $('.js-gifs').empty();

        //Pulls name from character clicked
        let charClicked = this.value;
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + charClicked + "&api_key=Oqf2S0Ti12Rvjts34nggsvkIMbf6WLFg&limit=10";
        
        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            let url = response.data[i].images.original.url;
            let charGif = $('<img>');
            charGif.attr('src', url);
            $('.js-gifs').prepend(charGif);
        }
    });
    });

});