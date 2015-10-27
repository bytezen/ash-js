const stampit = require('stampit')
const Signal = require('signals')



//var added = new Signal(), removed = new Signal()

var Entity = stampit({
  props: {
    previous :   Object.create(null),
    next     :   Object.create(null),
    components : []
  },

  methods : {
    log : console.log,

    add : function addComponent(comp) {
            if(this.components.indexOf(comp) === -1) {
              this.log('adding component ... ' + comp.type)
              this.components.push(comp)
              this.componentAdded.dispatch(comp)
            }
            return this
    },

    remove: function removeComponent(comp) {
            var index = this.components.indexOf(comp)
            if( index !== -1 ) {
              this.components.splice(index,1)
              this.componentRemoved.dispatch(comp)
            }
            return this
    },

    // return a component of the specified type if it exists
    // or null
    get : function get(type) {
      if(this.has(type)) {
        var res = this.components.filter(
          function filterType(c) {
              return isType(c,type)
          });

        if(res.length > 0) {
          return res[0];
        } else {
          return null;
        }
      }
    },

    has : function has(type) {
      return this.components.some(
        function someType(c) {
          return isType(c,type)
        });
    }

  },

  refs : {
    componentAdded    :   added,
    componentRemoved  :   removed
  },

  init : function() {
    this.componentAdded = new Signal()
    this.componentRemoved = new Signal()
  }
})


  function isType(component,type) {
    return component.type === type;
  }


module.exports = Entity
