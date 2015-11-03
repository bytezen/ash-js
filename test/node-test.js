var stampit = require('stampit'),
	expect = require('chai').expect,
	NodeFactory = require('../src/bz-ash/nodefactory')
	EntityPrototype = require('../src/bz-ash/entity')
	ComponentFactory = require('../src/bz-ash/componentfactory')


describe('# Node Test',function(){
	var mockNode

	it('can construct default node',function(){
		var node = NodeFactory().create()
		expect(node).to.exist
	})

	it('default nodes should not have the same type',function() {
		var mock1 = NodeFactory().create(),
			mock2 = NodeFactory().create()

			expect(mock1.type).to.not.equal(mock2.type)


	})

	it('can create a node',function(){		
		var PointComponentPrototype = stampit().compose( 
												ComponentFactory({typeName: 'point'},
												stampit().props({ x: 0, y: 0, z: 0})))
		var point = PointComponentPrototype.create()

		 PointNodePrototypeFactory = NodeFactory({typeName: 'point3d', 
		 										  componentTypes: [point.type]})
		 pointNode = PointNodePrototypeFactory.create()

		 expect(pointNode).to.exist
		 expect(PointComponentPrototype.type).to.equal(point.type)
		 expect(pointNode.componentTypes).to.have.length(1)
		 expect(pointNode.hasComponentType(point.type)).to.be.true		 

	})

	it('can store and retrieve and entity', function() {
		var mockEntity = EntityPrototype.create(),
		node = NodeFactory().create()
		node.entity = mockEntity

		expect(node.entity).to.exist
	})
})