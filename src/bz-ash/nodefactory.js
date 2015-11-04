var stampit = require('stampit'),
  DEFAULT_TYPE_NAME = "AnonymousNodeFactory"

var testtriggertest = ""



module.exports = function() {
  var prototypeType = { name: DEFAULT_TYPE_NAME,
                      componentTypes: {} }  

  return stampit()
            .refs({
              type: prototypeType,
              componentTypes: prototypeType.componentTypes             
            })
            .props({
                previous: undefined,
                next: undefined,
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
              
              for(var i in types) {
                if(types.hasOwnProperty(i)) {
                  for(var j in types[i]) {
                    // the "type" property is a prototype level property that
                    // we don't need to copy to the node
                    if( types[i].hasOwnProperty(j) && j !== "type") {
                           instance[j] = types[i][j]
                    }
                  }
                }
              }
              
            })

      }
