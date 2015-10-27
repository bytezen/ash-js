var chai = require('chai')
  , expect = chai.expect
  , should = chai.should()

var Component = require('../src/bz-ash/component')


describe('# Component Test', function() {
  describe('## create', function() {

    var MockComp = Component();

    it('be able to create a component',function(){
      should.exist(MockComp);
    });

  });


  //-----------

  describe('## has component type', function() {


    it('has a component type',function(){
      var MockComp = Component(null,'MockType');
      should.exist(MockComp)
      MockComp.should.have.property('type')
    });

    it('has expected type',function(){
      var MockComp = Component(null,'MockType');
      MockComp.type.should.equal('MockType')
    });

    it('has matching types', function() {
      var MockComp = Component(null,'MockType');
      var Mock2 = Component(null, 'MockType');
      MockComp.type.should.equal(Mock2.type);
    });

    it('has different types', function() {
      var MockComp = Component(null,'MockType');
      var Mock2 = Component(null, 'MockTypeDifferent');
      MockComp.type.should.not.equal(Mock2.type);
    });

  });


  //-----------

  describe('## can create with properties', function() {
    it('has primitive properties', function() {
      var MockComp = Component({
                                foo: 2,
                                bar : 3,
                                baz : {foobar : -10 }
                                },
                                'MockType');

      MockComp.should.have.property('foo').equal(2)
      MockComp.should.have.property('bar').equal(3)
    });

    it('has object properties', function() {
      var MockComp = Component({
                                foo: 2,
                                bar : 3,
                                baz : {foobar : -10 }
                                },
                                'MockType');

      MockComp.should.have.property('baz')
      MockComp.baz.should.have.property('foobar').equal(-10)

    });

  });

});