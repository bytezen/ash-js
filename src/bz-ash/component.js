const stampit = require('stampit')



const Component = stampit()
  .init( function(params){       // obj is {instance stamp args } from documentation
      // private componentType
      const componentType = params.args[0]

      //get the component Type
      params.instance.type = (function() {
        return componentType;
      })()
    })




module.exports = Component

// ---- quik test
/*
var myComp = Component({bar:'baz'},'Point2D')
console.log(myComp.componentType())
console.log(myComp.bar)


var comp2 = Component(null,'Point3D')
console.log(comp2.componentType())

console.log(comp2.componentType() === myComp.componentType())


var comp3 = Component(null,'Point2D')
console.log(comp3.componentType())

console.log(comp3.componentType() === myComp.componentType())
*/
