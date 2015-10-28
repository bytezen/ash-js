const stampit = require('stampit')


/*
const Component = stampit()
  .init( function(params){       // obj is {instance stamp args } from documentation
      // private componentType
      //const componentType = params.args[0]
    this.type = Component.type || {id:'Default Component'}
      //get the component Type
//      params.instance.type = (function() {
        //return componentType;
//        return Component.type;

//      })()

    })
  .static({
    makePrototype : function(type) { this.type = {id: type}; return this; }
  })
*/


function makeStamp(componentId) {
  var type = { id: componentId };

  const stamp = stampit()
  .init( function() {
      Object.defineProperty(this, "type", {
        get: function() {return type; }
      })

      Object.defineProperty(this, "id", {
        get: function() {return type.id; }
      })
    })
  .props( {
    label : componentId
  })

  return stamp;
}


module.exports = makeStamp

// ---- quik test
/*
var chai = require('chai'),
    expect = chai.expect

describe('#Testing component composition',function(){

  it('## should create composed object with proper type', function() {
    var Point2D = makeStamp('POINT2D')
    var myPt = Point2D.create({x: 100, y: 200});
    expect(myPt.componentType()).to.equal(Point2D.componentPrototype())
    console.log(myPt.x + myPt.componentId() )

  });
})
*/
