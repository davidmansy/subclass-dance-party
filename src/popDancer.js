var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;
  // var styleSettings = {
  //   height: 50px,
  //   width: 50px,
  //   background-color: blue
  // };

  this.step = function() {
    oldStep();
    // this.$node.css(styleSettings);
    this.$node.slideToggle();
  };
};

PopDancer.Prototype = Object.create(Dancer.prototype);