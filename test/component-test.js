var chai = require('chai')
  , expect = chai.expect
  , should = chai.should()

var ComponentFactory = require('../src/bz-ash/component')


describe('# Component Test', function() {

  describe('## create', function() {
    var MockFactory, MockComponent

    before('create mocks', function() {
      MockFactory = ComponentFactory('MOCK');
      mockcomponent = MockFactory.create({foo: 1, bar: 'ten', baz: {foo : false} })

    });


    it('can create a factory', function() {
      should.exist(MockFactory);
    });

    it('can create a component',function(){
      expect(mockcomponent).to.exist;
    });

    it('has the correct type',function() {
//      expect(mockcomponent.type).to.equal(MockFactory.componentPrototype())
      expect(mockcomponent.id).to.equal('MOCK')
      expect(mockcomponent).to.have.property("type")
    });

    it('can create properties',function() {
      ['foo','bar','baz'].forEach( function(prop) {
        expect(mockcomponent).to.have.property(prop)
      });
      expect(mockcomponent.baz).to.have.property('foo')
    });

    it('can read properties',function() {
      expect(mockcomponent.foo).to.equal(1)
      expect(mockcomponent.bar).to.equal('ten')
      expect(mockcomponent.baz.foo).to.be.false
    });

    it('can write and read new values',function() {
      mockcomponent.foo++
      mockcomponent.bar += "ten"
      mockcomponent.baz.foo = true

      expect(mockcomponent.foo).to.equal(2)
      expect(mockcomponent.bar).to.equal('tenten')
      expect(mockcomponent.baz.foo).to.be.true


    });

  });


  //-----------

  describe('## independent Components', function() {


    it('has different types', function() {
      var MockComp = ComponentFactory('MOCK');
      var MockComp2 = ComponentFactory('MOCK');

      var props = { foo:'foo', bar:'bar'}
      var comp1 = MockComp.create(props)
      var comp2 = MockComp2.create(Object.create(props))

      expect(comp1.type).not.equal(comp2.type);
    });

  });


  //-----------

});