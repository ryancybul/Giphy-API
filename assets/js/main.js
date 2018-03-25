$(document).ready(function() {

    //Variables
    let buttonArray = ['Homer Simpson', 'Bart Simpson', 'Marge Simpson', 'Lisa Simpson', 'Millhouse', 'Smithers', 'Mr Burns', 'Barney Gumble'];

    //Functions
    function printButtons() {
        //Emptys the array
        $('.js-buttons').empty();
        //Prints array
        for (let i = 0; i < buttonArray.length; i++) {
            let newButton = $('<button>' + buttonArray[i] + '</button>');
            newButton.attr('charName', buttonArray[i]);
            newButton.addClass('button');
            $('.js-buttons').append(newButton);
        }
    }

    //Events
    //Sets the initial state on page load
    printButtons();

    //Submits user input to array and generates button
    $('.submitButton').on('click', function(event) {
        //Preventing the button from trying to refresh the page
        event.preventDefault();
        //Stores the input in a variable
        var newChar = $('.js-text-input').val().trim();
        //Pushes new character to array if not already in array or empty.
        for (let i = 0; i < buttonArray.length; i++) {
            if (newChar.toLowerCase() === buttonArray[i].toLowerCase()) {
            }
            else if(newChar === ''){
            }
            else {
                buttonArray.push(newChar);
                break;
            }
        }
        //Clears Text Input
        $('.js-text-input').val(); 
        printButtons();
    });

    //Button on-click event
    $('.js-buttons').on('click', '.button', function() {
        //Emptys previous selection
       $('.js-gifs').empty();
        
        //Pulls name from character clicked
        let charClicked = $(this).attr('charName');
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + charClicked + "&api_key=Oqf2S0Ti12Rvjts34nggsvkIMbf6WLFg&limit=10";

        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            let url = response.data[i].images.fixed_height_still.url;
            let charGif = $('<img>');
            charGif.attr({src: url, 'data-state': 'still', class: 'gif', 'data-still': url, 'data-animate': response.data[i].images.fixed_height.url});
            $('.js-gifs').prepend(charGif);
        }
     });
    });

    //Image onclick play pause
    $('.js-gifs').on('click', '.gif', function(){
        if ($(this).attr("data-state") === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });

});
