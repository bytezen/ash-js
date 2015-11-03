var stampit = require('stampit'),
  DEFAULT_TYPE_NAME = "AnonymousNodeFactory"

var testtriggertest = ""

module.exports = function() {
  var prototypeType = { name: DEFAULT_TYPE_NAME,
                      componentTypes: [] }  
  return stampit()
            .refs({
              type: prototypeType,             
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
              withComponentTypes: function withNodeTypes(types) {
                                if( Array.isArray(types) ) {
                                  types.forEach( function forEachNodeType(t){ 
                                                    prototypeType.componentTypes.push(t)
                                                })
                                } else if(arguments.length > 1) {
                                  var args = [].slice.call(arguments)
                                  args.forEach( function forEachArgs(a){
                                                    prototypeType.componentTypes.push(a)
                                                })
                                } else {
                                  prototypeType.componentTypes.push(types)
                                }
                              return this
                            }            
            })
            .methods({
              hasComponentType: function hasComponentType(t) {
                return this.type.componentTypes.indexOf(t) > -1
              }
            })
          }
