var makeJumpyDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left ,timeBetweenSteps)
  makeJumpyDancer.prototype.step.call(this)
  this.move = 50;
  this.$node.attr('class','jumpy')
  this.degree = 0;

};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype)
makeJumpyDancer.prototype.constructor = makeJumpyDancer
makeJumpyDancer.prototype.oldStep = makeDancer.prototype.step



makeJumpyDancer.prototype.step = function() {
    this.oldStep(this);
    var moving = this.top+this.move;

    this.degree += 25;
    this.$node.css('transform', 'rotate('+this.degree+'deg)')
    //this.$node.animate({top: moving}, 200)
    if (this.degree>=360)
    	this.degree = 0;
  };
