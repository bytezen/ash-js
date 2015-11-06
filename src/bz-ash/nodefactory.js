var stampit = require('stampit'),
  DEFAULT_TYPE_NAME = "AnonymousNodeFactory"

var testtriggertest = ""



module.exports = function() {
  var prototypeType = { name: DEFAULT_TYPE_NAME,
                      componentTypes: {} }  // object key, val pairs :: (componentTypeName: componentType)

  return stampit()
            .refs({
              type: prototypeType,
              componentTypes: prototypeType.componentTypes  // same as prototype.componentTypes (componentTypeName, componentObj)           
            })            
            .props({
                previous: null,
                next: null,
                entity: {}                    
            })
            .static({
              type: prototypeType,
              withName: function withName(name) {     
                                prototypeType.name = name               
                                return this
                            },
              withComponents: function withComponents(components) {
                                args = []
                                if( Array.isArray(components) ) {
                                  args = components
                                  // components.forEach( function forEachNodeType(t){ 
                                  //                   prototypeType.componentcomponents.push(t)
                                  //               })
                                } else if(arguments.length > 1) {
                                  args = [].slice.call(arguments)
                                  // args.forEach( function forEachArgs(a){
                                  //                   prototypeType.componentcomponents.push(a)
                                  //               })
                                } else  if(arguments.length == 1){                                  
                                  args.push(components)
                                }

                                //register each component name and type with this node
                                args.forEach(function argsForEach(a) {
                                  this.type.componentTypes[a.type.name] = a 
                                }, this)


                              return this
                            }            
            })
            .methods({
              hasComponentName: function hasComponentName(name) {
                return this.type.componentTypes.hasOwnProperty(name)
              }
            })
            .init( function(params){
              // copy the component
              var instance = params.instance,
                  types = instance.type.componentTypes
              
              for(var compName in types) {            //get the components on this node
                if(types.hasOwnProperty(compName)) {
                  for(var componentProp in types[compName]) { //get the properties of this component
                    instance[types[compName]] = types[compName] 
                  }
                }
              }
            })
            // !!!!!!Test this!!!!!!
                    // the "type" property is a prototype level property that
                    // we don't need to copy to the node
                    // if( types[compName].hasOwnProperty(componentProp) && componentProp !== "type") {
                    //     if( instance.hasOwnProperty(componentProp)) {
                    //       console.warn("overwriting component property: " + componentProp + " on node " + this.type.name)
                    //     } else {
                    //        instance[componentProp] = types[compName][componentProp]   //set a property on the node equal to value of the component's prop
                    //     }
                    // }
            //       }
            //     }
            //   }
              
            // })
      }
