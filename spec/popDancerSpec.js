describe("popDancer", function() {

  var popDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new PopDancer(30, 70, timeBetweenSteps);
  });

  it("popDancer should have a jQuery $node object", function(){
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("popDancer should have a step function that makes its node slide in/out", function() {
    sinon.spy(popDancer.$node, 'slideToggle');
    popDancer.step();
    expect(popDancer.$node.slideToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("popDancer should call step at least once per second", function(){
      sinon.spy(popDancer, "step");
      expect(popDancer.step.callCount).to.be.equal(0)
//      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(popDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });


});




