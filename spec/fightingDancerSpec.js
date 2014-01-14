describe("fightingDancer", function() {

  var fightingDancer;
  var timeBetweenSteps = 200;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fightingDancer = new FightingDancer(300, 30, timeBetweenSteps);
  });

  it("fightingDancer should have a jQuery $node object", function(){
    expect(fightingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("fightingDancer should have a step function that makes its node animate", function() {
    sinon.spy(fightingDancer.$node, 'animate');
    fightingDancer.step();
    expect(fightingDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("fightingDancer should call step at least once per second", function(){
      sinon.spy(fightingDancer, "step");
      expect(fightingDancer.step.callCount).to.be.equal(0)
//      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fightingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fightingDancer.step.callCount).to.be.equal(2);
    });
  });


});




