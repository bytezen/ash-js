var stampit = require('stampit'),
	expect = require('chai').expect,
	NodeFactory = require('../nodefactory')
	EntityPrototype = require('../entity')
	ComponentFactory = require('../componentfactory')


describe('# Node Test',function(){
	var mockNode

	it('can create a default node with default name',function(){
		var node = NodeFactory().create()
		expect(node).to.exist
		expect(node.type).to.exist
		expect(node.type.name).to.equal('AnonymousNodeFactory')
	})


	it('default nodes should not have the same type',function() {
		var mock1 = NodeFactory().create(),
			mock2 = NodeFactory().create()

			expect(mock1.type).to.not.equal(mock2.type)
	})	

	it('can create a node with family using fluent style',function(){		
		mockNode = NodeFactory().withName('lymphNode').create()
		mockNode2 = NodeFactory().withName('soreNode').create()
		expect(mockNode.type.name).to.equal('lymphNode')
	})

	it('can create a node with single component type using fluent style',function(){		
		var MockComponentPrototype = ComponentFactory(),
			mockcomponent = MockComponentPrototype.withName('comp1').create(),
			mockNode = NodeFactory().withComponentTypes(MockComponentPrototype.type).create()

		expect(mockNode.type.componentTypes).to.have.length(1)
		expect(mockNode.hasComponentType(MockComponentPrototype.type))
	})

	it('can create a node with multiple component types using fluent style',function(){
		var CompPrototype1 = ComponentFactory().withName('mockcomp1'),
			CompPrototype2 = ComponentFactory().withName('mockcomp2'),
			CompPrototype3 = ComponentFactory().withName('mockcomp3')
			mocknode = NodeFactory().withComponentTypes(CompPrototype1.type,CompPrototype2.type,CompPrototype3.type).create()

			expect(mocknode.type.componentTypes).to.have.length(3);

			[CompPrototype1.type,
			 CompPrototype2.type,
			 CompPrototype3.type].forEach(function(cp) {
			 								expect(mocknode.hasComponentType(cp)).to.be.true
										})
	})

	it('can create a node with an array of component types using fluent style',function(){
		var CompPrototype1 = ComponentFactory().withName('mockcomp1'),
			CompPrototype2 = ComponentFactory().withName('mockcomp2'),
			CompPrototype3 = ComponentFactory().withName('mockcomp3')
			mocknode = NodeFactory().withComponentTypes([CompPrototype1.type,CompPrototype2.type,CompPrototype3.type]).create()

			expect(mocknode.type.componentTypes).to.have.length(3);

			[CompPrototype1.type,
			 CompPrototype2.type,
			 CompPrototype3.type].forEach(function(cp) {
			 								expect(mocknode.hasComponentType(cp)).to.be.true
										})
	})

	it('can create a nodes with different types',function(){		
		mockNode = NodeFactory().withName('lymphNode').create()
		mockNode2 = NodeFactory().withName('soreNode').create()
		expect(mockNode.type.name).to.not.equal(mockNode2.type.name)
	})

	it('can store and retrieve and entity', function() {
		var mockEntity = EntityPrototype.create(),
		node = NodeFactory().create()
		node.entity = mockEntity

		expect(node.entity).to.exist
	})
})