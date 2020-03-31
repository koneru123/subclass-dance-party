var makeSpinnyDancer = function(top, left, timeBetweenSteps ) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny');
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.oldStep = function( timeBetweenSteps ){
  makeDancer.prototype.step.call(this, timeBetweenSteps );
}

makeSpinnyDancer.prototype.step = function( timeBetweenSteps ) {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css({'transform' : 'rotate('+ 15 + 'deg)'});
}

//var makeSpinnyDancer = new makeSpinnyDancer;