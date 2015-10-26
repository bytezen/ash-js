var chai = require('chai')
  , expect = chai.expect
  , should = chai.should()

//const stampit = require('stampit')


describe('# Entity', function() {
  var E = require('../src/bz-ash/entity')
  var mockEntity

  before('create mock', function() {
    mockEntity = E.create()
  });

  describe('##create', function() {
          it('be able to create entity', function() {
                  var mock2 = E.create()
                  should.exist(mock2)
          });
  });

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

  describe('## add components', function() {

    it('adds to components array',function() {

    });

  });


});



