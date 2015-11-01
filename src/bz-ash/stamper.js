const stampit = require('stampit')


/*
  Component Stamper
*/

function makePrototype(stamper_id, stamper_name, props) {
  var ObjectPrototype = stampit().props(props), 
      StamperPrototype = createStamperPrototype(stamper_id, stamper_name)  

  return stampit().compose(ObjectPrototype,StamperPrototype)
}


// @ returns a stampit factory which has properties:
//    .stamperId      => a unique identifier for the stamper
//    .stamperName  => human friendly name for the stamper, not guaranteed to be unique
//
//  , and the factory creates a prototype object with protected properties:
//    .stamperId     => equal to the value above and guaranteed to be unique for each stamper
//    .stamperName   => equal to the value above          

function createStamperPrototye(stamp_id, stamp_name) {

  var config = { id: stamp_id,
                 name: stamp_name },

      stamper = stampit()
          .init( function() {
              Object.defineProperty(this, "stamper", {
                get: function() {return config.id; }
              })

              Object.defineProperty(this, "stamperName", {
                get: function() {return config.name; }
              })
            })
          .static({ 
            stamperId: config.id, 
            stamperName: config.name 
          })

  return stamper;
}


module.exports = makePrototype


// ---- quik test


/*
var chai = require('chai'),
    expect = chai.expect

describe('#Testing component composition',function(){
  it('## should create composed object with proper type', function() {

    var testStamper = module.exports(1234, 'tester')
    var test = testStamper.create()
    expect(testStamper.id).equals(1234)
    expect(testStamper.id).equals(test.stamper)

  });
})
*/
