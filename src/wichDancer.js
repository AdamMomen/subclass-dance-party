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
    let half = window.innerWidth / 2;
    let oldLeft = this.left - 300;

    this.$node.animate({
      left: half,
    }, 500);

    setTimeout(()=>{
      console.log('done', oldLeft);
      this.$node.animate({
        left: oldLeft
      }, 500);
    }, 2000);
  }
}