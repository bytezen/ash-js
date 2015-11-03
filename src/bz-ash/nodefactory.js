var stampit = require('stampit'),
  DEFAULT_TYPE = "AnonymousNodeStamper"


module.exports = function(config) {
    var typeName = config ? (config.typeName || DEFAULT_TYPE) : DEFAULT_TYPE,
      prototypeType = { name: typeName }
      res = stampit()
          .refs({
            type: prototypeType,             
            componentTypes: []
          })
          .props({
              previous: undefined,
              next: undefined,
              entity: {}                    
          })
          .init(function initTypes(param) {
            if(config && config.componentTypes) {
              //for each type put it on the type list for this guy
              obj = param.instance
              
              config.componentTypes.forEach(function(t) {
                this.componentTypes.push(t)
              }, obj)        
            }
          })          
          .static({
            type: prototypeType
          })
          .methods({
            hasComponentType: function hasComponentType(t) {
              return this.componentTypes.indexOf(t) > -1
            }
          })

  
    // var className =  config ? (config.name || DEFAULT_NAME) : DEFAULT_NAME
    // var res = stampit()
    //             .props({
    //                 previous: undefined,
    //                 next: undefined,
    //                 entity: {}                    
    //             })
    //             .refs({
    //               type: {name : className },
    //               componentTypes: []
    //             })
    //             .methods({
    //               isSameClass: function isSameType(node) {
    //                 return node.hasOwnProperty('nodeClass') && 
    //                        node.nodeClass === this.nodeClass
    //               }
    //             })
    //             .init(function initTypes() {
    //               if(config && config.types) {
    //                 //for each type put it on the type list for this guy
    //                 config.types.forEach(function(t) {
    //                   this.componentTypes.push(t)
    //                 })
    //               }
    //             })
    //             .static({
    //               type: this.nodeClass
    //             })

    return res
  } 

