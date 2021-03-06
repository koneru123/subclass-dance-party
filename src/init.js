$(document).ready(function() {
  window.dancers = [];

  $('#toggleLine').click(function() {
    $('.dancer').removeClass('absolutePosition');
  });

  $('#scatter').click(function() {
    $('.dancer').addClass('absolutePosition');
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; //this holds blinky's constructor

    var dancer = new dancerMakerFunction( //makeBlinkyDancer
      $("body").height() * Math.random(), //left
      $("body").width() * Math.random(), //top
      Math.random() * 1000 //timeBetweenSteps
    );
    window.dancers.push( dancer );
    $('#dancefloor').append(dancer.$node);
  });
});

