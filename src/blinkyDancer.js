var makeBlinkyDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left ,timeBetweenSteps)
  makeBlinkyDancer.prototype.step.call(this)
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer
//makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step



makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this)
  //  this.oldStep.call(this);
    this.$node.fadeToggle();
  };

