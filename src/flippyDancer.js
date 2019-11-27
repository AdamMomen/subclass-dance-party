var makeFlippyDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left ,timeBetweenSteps)
  makeFlippyDancer.prototype.step.call(this)
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype)
makeFlippyDancer.prototype.constructor = makeFlippyDancer
makeFlippyDancer.prototype.oldStep = makeDancer.prototype.step



makeFlippyDancer.prototype.step = function() {
    this.oldStep(this);
    this.$node.animate({transform: rotate(360)}, 200)
  };

