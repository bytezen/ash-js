const stampit = require('stampit')



const Node = stampit()
.refs({
  foo: 1
  });





module.exports = Node

// ---- quik test
var chai = require('chai')
        , expect = chai.expect

describe('Node quik test',function() {
  it('should create prototype properties', function() {
    var node = Node()

    expect(node).to.have.property('foo')
    expect(node.foo).to.equal(1)

    node.foo = 'bar'


    var node1 = Node()
    expect(node1.foo).to.equal(1)

    expect(node.foo).to.equal('bar')

  });

});

