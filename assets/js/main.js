$(document).ready(function() {

    //Variables
    let buttonArray = ['Homer', 'Bart', 'Marge', 'Lisa', 'Millhouse', 'Smithers', 'Mr. Burns', 'Barney'];
  
    //Functions
    function init() {
        printButtons();
    }

    function printButtons() {
        //Emptys the array
        $('.js-buttons').empty();
        for (let i = 0; i < buttonArray.length; i++) {
            var newButton = $('<button type="button" value="' + buttonArray[i]+ '">' + buttonArray[i] + '</button>');
            $('.js-buttons').append(newButton);
        }
    }

   let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  + "&api_key=Oqf2S0Ti12Rvjts34nggsvkIMbf6WLFg&limit=5";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response);
    });

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

    $()

});