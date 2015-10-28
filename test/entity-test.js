var chai = require('chai')
  , expect = chai.expect
  , should = chai.should()

const Signal = require('signals')



describe('# Entity', function() {
  var E = require('../src/bz-ash/entity')
  var Component = require('../src/bz-ash/component')

  var mockEntity
  var mockComponent1, mockComponent2, mockComponent3,
      mockComponent4, mockComponent5, mockComponent6



  before('create mock', function() {
    mockEntity = E.create(); //({componentAdded : new Signal(),
//                           componentRemoved : new Signal()
//                          });

  });

  //-----------

  describe('##create', function() {
          it('be able to create entity', function() {
                  var mock2 = E.create()
                  should.exist(mock2)
          });
  });

  //-----------

  describe('##valid properties', function() {
    it('has valid components property', function(){
      should.exist(mockEntity.components)
    });

    it('has valid next property',function() {
      should.exist(mockEntity.next)
    });

    it('has valid previous property',function() {
      should.exist(mockEntity.previous)
    });
  });

  //-----------

  describe('## add / remove components:', function() {

    before('create mock components',function() {
      mockComponent1 = Component('Mock1').create()
      mockComponent2 = Component('Mock2').create()
      mockComponent3 = Component('Mock3').create()
      mockComponent4 = Component('Mock4').create()
      mockComponent5 = Component('Mock5').create()
      mockComponent6 = Component('Mock6').create()
    });



    it('add a component', function() {

      mockEntity.add(mockComponent1)
      mockEntity.should.have.property('components').and.include(mockComponent1)
      mockEntity.components.length.should.equal(1)
    });


    it('add 2 components with chaining',function() {

      mockEntity.add(mockComponent2)
                .add(mockComponent3)

      mockEntity.components.should.include(mockComponent1)
      mockEntity.components.should.include(mockComponent2)
      mockEntity.components.should.include(mockComponent3)

      mockEntity.should.have.property('components').with.length(3)

    });


    it('trigger addHandler for 3 component additions',function(done) {

      var handlerCount = 0;

      mockEntity.componentAdded.add(onAddComponent);

      mockEntity.add(mockComponent4)
                .add(mockComponent5)
                .add(mockComponent6)

      mockEntity.components.should.include(mockComponent4)
      mockEntity.components.should.include(mockComponent5)
      mockEntity.components.should.include(mockComponent6)

      function onAddComponent(c) {
        handlerCount++;

        ['Mock4','Mock5','Mock6'].should.include(c.id);

        if(handlerCount == 2 ) {
          mockEntity.componentAdded.remove(onAddComponent)
          done()
        }
      }


    });

    it('should not add duplicates', function() {
      var len = mockEntity.components.length

      mockEntity.add(mockComponent1)
      mockEntity.add(mockComponent2)
      mockEntity.add(mockComponent3)

      mockEntity.components.length.should.equal(len)

    });


   it('can remove 2 components',function(){

      console.log( "---. " +mockEntity.components.indexOf(mockComponent1))
      console.log(mockComponent1)
      mockEntity.remove(mockComponent1)
      console.log( "---. " +mockEntity.components.indexOf(mockComponent1))

      var len = mockEntity.components.length
      mockEntity.components.should.not.include(mockComponent1)
      mockEntity.components.length.should.equal(len)

      mockEntity.remove(mockComponent6)
      len = mockEntity.components.length

      mockEntity.components.should.include(mockComponent2)
      mockEntity.components.should.include(mockComponent3)
      mockEntity.components.should.include(mockComponent4)
      mockEntity.components.should.include(mockComponent5)
      mockEntity.components.should.not.include(mockComponent6)

      mockEntity.components.length.should.equal(len)
    });

    it('remove 2 components with chaining', function() {
      mockEntity.remove(mockComponent3).remove(mockComponent5)

      mockEntity.components.length.should.equal(2)
      mockEntity.components.should.not.include(mockComponent3)
      mockEntity.components.should.not.include(mockComponent5)

    });

    it('remove 2 components and handle each', function(done) {
      var handleCount = 0

      mockEntity.componentRemoved.add(onDeleteComponent)
      mockEntity.remove(mockComponent4).remove(mockComponent2)


      // handler callback
      function onDeleteComponent(c) {
        handleCount++

        [mockComponent2,mockComponent4].should.include(c)

        if(handleCount == 2) {
          mockEntity.components.length.should.equal(0)
          mockEntity.componentRemoved.remove(onDeleteComponent)
          done()
        }
      }
    });
  });

  //-----------

  describe('## Access entity component properties',function() {
    before('add components to entity', function() {
      mockComponent1 = Component('mock1').create( {foo: 1,
                                   bar: 'xyz',
                                   baz: false,
                                   boo: [1,2,3]
                                  })

      mockComponent2 = Component('mock2').create( {baz : { foo: 3, bar : true } })

      mockEntity.add(mockComponent1).add(mockComponent2)

    });

    it('have accessible primitive properties',function(){

      mockEntity.get(mockComponent1.type).should.equal(mockComponent1)
      mockEntity.get(mockComponent1.type).foo.should.equal(1)
      mockEntity.get(mockComponent1.type).bar.should.equal('xyz')
      mockEntity.get(mockComponent1.type).baz.should.equal(false)
      mockEntity.get(mockComponent1.type).boo[1].should.equal(2)

      mockEntity.get(mockComponent2.type).baz.foo.should.equal(3)
      mockEntity.get(mockComponent2.type).baz.bar.should.equal(true)

    });

/*    it('',function(){ });
    it('',function(){ });
    it('',function(){ });
*/
  });



});



