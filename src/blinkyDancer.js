var makeBlinkyDancer = function(top, left, timeBetweenSteps ) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this.visibility = true;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = function( timeBetweenSteps ) {
  makeDancer.prototype.step.call(this, timeBetweenSteps );
};

makeBlinkyDancer.prototype.step = function( timeBetweenSteps ) {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  var visibility = '';
  if ( this.visibility ) {
    visibility = 'hidden';
  } else {
    visibility = 'visible';
  }
  this.visibility = !this.visibility;

  var styleObject = {
    'visibility': visibility //'visibility' : 'hidden'
  };

  this.$node.css( styleObject );
};

//var makeBlinkyDancer = new makeBlinkyDancer;