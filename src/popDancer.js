var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;
  var newSettings = {
    'height': '50px',
    'width': '50px',
    'background-color': 'blue'
  };
  this.$node.css(newSettings);

  this.step = function() {
    oldStep();
    // this.$node.css(styleSettings);
    this.$node.slideToggle();
  };
};

PopDancer.prototype = Object.create(Dancer.prototype);