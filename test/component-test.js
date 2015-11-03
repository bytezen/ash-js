var chai = require('chai'),
    expect = chai.expect,
    stampit = require('stampit')
  

var FooFactory = require('./data/FooComponentFactory'),
    BarFactory = require('./data/BarComponentFactory')


describe('# Component Test', function() {

  describe('## create', function() {
    it('can create a component with default name', function() {
      var mockcomponent = FooFactory.create()

      expect(mockcomponent).to.exist
      expect(mockcomponent.type).to.exist
      expect(mockcomponent.type.name).to.equal('FooComponent')
    });

    it('can create a name using fluent style',function(){
      mockcomponent = FooFactory.create()
      expect(mockcomponent.type.name).to.equal('FooComponent');
    });

    it('has the correct type',function() {
      var mockcomponent =  FooFactory.create()

      expect(mockcomponent.type).to.equal(FooFactory.type)
      
    });

    it('can create and read properties',function() {
      var mockcomponent =  FooFactory.create({x:'foo', y: 'bar'});      

      ['x','y'].forEach( function(prop) {
        expect(mockcomponent).to.have.property(prop)        
      });

      expect(mockcomponent.x).to.equal('foo')
      expect(mockcomponent.y).to.equal('bar')

    });

    it('can write and read new values',function() {
      var mockcomponent =  FooFactory.create({x:'foo', y: 'bar'});      

      mockcomponent.x = 10
      mockcomponent.y = "foobar"
      mockcomponent.z = true


      expect(mockcomponent.x).to.equal(10)
      expect(mockcomponent.y).to.equal('foobar')
      expect(mockcomponent.z).to.be.true


    });

  });


  //-----------

  describe('## Component Types', function() {

    it('components from the same factory have the same type',function() {
      var mockcomponent = FooFactory.create()
          mockcomponent2 = FooFactory.create({x:1, y:'bar'})

      expect(mockcomponent.type).to.equal(FooFactory.type)
      expect(mockcomponent.type).to.equal(mockcomponent2.type)
      
    });


    it('components from different factories have different type', function(){
      var mock1 = FooFactory.create(),
          mock2 = BarFactory.create()
          
          expect(mock1.type).to.not.equal(mock2.type)

    })

  });


  //-----------

});