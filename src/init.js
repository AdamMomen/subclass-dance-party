$(document).ready(function() {
  window.dancers = [];
  window.Dancer = Dancer;
  window.BlinkyDancer = BlinkyDancer;
  window.SpidyDancer = SpidyDancer;
  window.WichDancer = WichDancer;
  var audioObj = new Audio('music/music.mp3');


  $('.addDancerButton').on('click', function(event) {
    event.preventDefault();
    audioObj.play();
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
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      // $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // Push Dancer to Dancers array
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  var left = 10;
  var top = 240;

  $('body').on('click', '.align', function() {
    // console.log('click');
    for ( var dancer of dancers ) {
      // console.log(top,left);
      dancer.lineUp(top, left);
      top += 25;
      left--;
    }
  });

});

