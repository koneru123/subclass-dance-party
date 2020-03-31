// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition( top, left );
  this.step( timeBetweenSteps );
}

makeDancer.prototype.step = function( timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var steppyStep = this.step.bind( this, timeBetweenSteps );
  setTimeout( steppyStep, timeBetweenSteps);
}

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
}

// var makeDancer = new makeDancer;