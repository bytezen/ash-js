var stampit = require('stampit'),
    Signal = require('signals'),
    Dictionary = require('../bzutil/dictionary')



//var added = new Signal(), removed = new Signal()

var Entity = stampit({
  //TODO: Protect Components
  props: {
    previous :   null, //entity
    next     :   null //entity
  },

  methods : {
    log : console.log,

    add : function addComponent(component) {
            if( !this.components.has(component) ) {
              this.components.add(component.type, component)
              this.componentAdded.dispatch(component)

              return this
            } else {
              //throw Error("Component, " + comp.id + " already exists on this entity")
            }

    },

    remove: function removeComponent(component) {            
            if( this.components.has(component.type) ) {              
              this.components.remove(component.type)
              this.componentRemoved.dispatch(component)
            }
            return this
    },

    // return a component of the specified type if it exists
    // or null
    get : function getComponent(componentType) {
      if(this.components.has(componentType)) {
        return this.components.get(componentType)
      }

      return null
    },

    has : function has(componentType) {
      return this.components.has(componentType)
    },

    componentCount : function componentCount() {
      return this.components.size()
    }

  },

  init : function() {
    this.componentAdded = new Signal()
    this.componentRemoved = new Signal()
    this.components = Dictionary.create()
  }
})


  function isType(component,type) {
    return component.type === type;
  }


module.exports = Entity
