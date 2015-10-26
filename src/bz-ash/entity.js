const stampit = require('stampit')
const Signal = require('signals')



var added = new Signal(), removed = new Signal()

var Entity = stampit({
  props: {
    previous :   Object.create(null),
    next     :   Object.create(null),
    components : []
  },

  methods : {
    log : console.log,
    add : function addComponent(comp) {
            this.log('called  add')
            this.componentAdded.dispatch(comp)
          },
    remove: function removeComponent() { this.log('called remove')}
  },

  refs : {
    componentAdded    :   added,
    componentRemoved  :   removed
  }
})


function hasComponent(e, comp) {

  return e.components.indexOf(comp) > -1
}


module.exports = Entity

//---- quick testing
/*
function onAdded() { console.log('handling an added component') }

var test = module.exports.create()
test.componentAdded.add(onAdded)

test.components.push(1)
test.components.push(2)
test.add()
test.remove()

console.log(test.components)
*/