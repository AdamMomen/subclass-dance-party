var makeBlinkyDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left ,timeBetweenSteps)
  makeBlinkyDancer.prototype.step.call(this)
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step



makeBlinkyDancer.prototype.step = function() {
    console.log('new :',this)
    this.oldStep(this);
    this.$node.toggle();
  };

