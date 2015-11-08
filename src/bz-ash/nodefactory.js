var stampit = require('stampit'),
  DEFAULT_TYPE_NAME = "AnonymousNodeFactory"

var testtriggertest = ""



module.exports = function() {
  var config = { name: DEFAULT_TYPE_NAME,
                      componentTypes: []} //{} }  // object key, val pairs :: (componentTypeName: componentType)

  return stampit()
            .refs({
              type: config,
              componentTypes: []
            })            
            .props({
                previous: null,
                next: null,
                entity: {}                    
            })
            .static({
              //TODO: Use config pattern here, but remember we need to have closure over the config
              //type
              type: config,
              components: [],
              withName: function withName(name) {     
                                config.name = name               
                                return this
                            },
              withComponents: function withComponents(components) {
                                args = []
                                if( Array.isArray(components) ) {
                                  args = components
                                  // components.forEach( function forEachNodeType(t){ 
                                  //                   config.componentcomponents.push(t)
                                  //               })
                                } else if(arguments.length > 1) {
                                  args = [].slice.call(arguments)
                                  // args.forEach( function forEachArgs(a){
                                  //                   config.componentcomponents.push(a)
                                  //               })
                                } else  if(arguments.length == 1){                                  
                                  args.push(components)
                                }

                                //register each component name and type with this node
                                //TODO: Refactor to   Use the pattern from Entity
                                args.forEach(function argsForEach(a) {
                                  config.componentTypes.push(a.type)
                                  this.components.push(a)
                                }, this)


                              return this
                            }                
            })
            .methods({
              hasComponentName: function hasComponentName(name) {
                return this.type.components.hasOwnProperty(name)
              }
            })
            .init( function(params){
              // copy the component
              var instance = params.instance,
                  comp
                  //types = instance.type.components  //(componentTypeName, componentType)
                
              this.componentTypes = params.stamp.componentTypes
              this.componentTypes.forEach(function (type) {
                                //this.components = params.stamp.type.components
                                comp = params.stamp.
                                this[type] = 
                                instance[type] = c
                              },this)

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
