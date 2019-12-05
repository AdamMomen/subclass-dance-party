class SpidyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<div class="spidy"></div>');
    // super.$node = this.$node.html('00000');
    super.setPosition('70%', left);
  }
  
  step() {
    let windowWidth = $('body').width();
    let left = windowWidth - this.left;  
    let moves = {
      left: left,
      'animation-iteration-count': 'infinite'
    };

    super.step();
    
    this.$node.animate(moves, 'slow');
    // let id = setTimeout(()=>{
    // 	this.setPosition(this.top, this.left);
    // 	console.log('worf')
    // },5000);

    // SetTimeout(()=> {
    // 	// this.$node.
    // },5000);
  }
}