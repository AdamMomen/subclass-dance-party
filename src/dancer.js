class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.step();
    this.setPosition();
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  
  setPosition(top, left) {
    let styleSettings = {
      top: top,
      left
    };

    this.$node.css(styleSettings);
  }
}