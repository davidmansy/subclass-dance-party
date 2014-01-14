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
    this.$node.slideToggle();
  };

  this.lineUp = function() {
    var leftSettings = {
      'left': '0'
    };
    this.$node.animate(leftSettings, 2000, function() {});
  };

};

PopDancer.prototype = Object.create(Dancer.prototype);