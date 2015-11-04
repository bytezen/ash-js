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
			mockNode = NodeFactory().withComponents(mockcomponent).create()
			
		expect(mockNode.componentTypes).to.have.property(MockComponentPrototype.type.name)
		expect(mockNode.hasComponentName(MockComponentPrototype.type.name))
	})

	it('can create a named node with a component using fluent style', function() {
		var MockComponentPrototype = ComponentFactory(),	
			mockcomponent = MockComponentPrototype.withName('comp1').create(),
			mockNode = NodeFactory().withComponents(mockcomponent)
							.withName('Comp1Node')
							.create()

		expect(mockNode.type.name).to.equal('Comp1Node')	
		expect(mockNode.componentTypes).to.have.property(MockComponentPrototype.type.name)
		expect(mockNode.hasComponentName(MockComponentPrototype.type.name))
	})

	it('can create a node with multiple component types using fluent style',function(){
		var comp1 = ComponentFactory().withName('mockcomp1').create(),
			comp2 = ComponentFactory().withName('mockcomp2').create(),
			comp3 = ComponentFactory().withName('mockcomp3').create()
			mocknode = NodeFactory().withComponents(comp1,comp2,comp3).create()

			expect(mocknode.componentTypes[comp1.type.name]).to.be.ok;
			expect(mocknode.componentTypes[comp2.type.name]).to.be.ok;
			expect(mocknode.componentTypes[comp3.type.name]).to.be.ok;

			expect(mocknode.componentTypes[comp1.type.name]).to.equal(comp1)		
			expect(mocknode.componentTypes[comp2.type.name]).to.equal(comp2)			
			expect(mocknode.componentTypes[comp3.type.name]).to.equal(comp3)			
	})

	it('can create a node with an array of component types using fluent style',function(){
		var comp1 = ComponentFactory().withName('mockcomp1').create(),
			comp2 = ComponentFactory().withName('mockcomp2').create(),
			comp3 = ComponentFactory().withName('mockcomp3').create()
			mocknode = NodeFactory().withComponents([comp1,comp2,comp3]).create()

			expect(mocknode.componentTypes[comp1.type.name]).to.be.ok;
			expect(mocknode.componentTypes[comp2.type.name]).to.be.ok;
			expect(mocknode.componentTypes[comp3.type.name]).to.be.ok;

			expect(mocknode.componentTypes[comp1.type.name]).to.equal(comp1)		
			expect(mocknode.componentTypes[comp2.type.name]).to.equal(comp2)			
			expect(mocknode.componentTypes[comp3.type.name]).to.equal(comp3)			

	})

	it('node inherits properties from components', function() {
		var CompPrototype1 = ComponentFactory().props({foo: 'foo', bar:'bar', baz : {foo:'foobarbaz'}}).withName('fooComponent'),
			component1 = CompPrototype1.create(),
			node = NodeFactory().withName('FooNode').withComponents(component1).create()

			expect(node).to.have.property('foo')
			expect(node).to.have.property('bar')
			expect(node.foo).to.equal(component1.foo)
			expect(node.bar).to.equal(component1.bar)

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