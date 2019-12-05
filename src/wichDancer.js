class WichDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="wich" src="images/johnWich.gif">');
    super.setPosition('40%', (left - 300));
    this.step();

    this.$node.click(()=> {
      this.move();
    });
  }

  step() {
    this.$node.toggle();
  }

  move() {
    this.$node.animate({
      top: '-25px'
    }, 500);
  }
}