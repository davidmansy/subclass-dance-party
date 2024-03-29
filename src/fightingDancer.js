var FightingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;
  var status = true;
  var currentSettings = this.$node.css(['height', 'width']);
  var newSettings = {
    'height': '65px',
    'width':'100px',
    'top':'+=50',
    'left':'-=30',

    '-moz-border-radius-bottomright': '50px',
    'border-bottom-right-radius': '50px'

  };
  this.$node.css({'background-color':'white', 'border-color':'purple'});

  this.step = function() {
    oldStep();

    if(status) {
      this.$node.animate(newSettings, 1000, function() {});
      status = false;
    } else {
      this.$node.animate(currentSettings, 1000, function() {});
      status = true;
    }
  };

  this.lineUp = function() {
    var newSettings = {
      'left': '0',
      'height': '20',
      'opacity': '0.5'
    };
    this.$node.animate(newSettings, 2000, function() {});
  };


};

FightingDancer.prototype = Object.create(Dancer.prototype);