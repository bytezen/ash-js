var expect = require('chai').expect,
	NodepoolFactory = require('../nodepoolfactory'),
	NodeFactory = require('../nodefactory'),
	ComponentFactory = require('../componentfactory')



describe('#Nodepool',function(){
	var MockComponentPrototype1, 
		MockNodePrototype,
		mocknode,
		mockcomponent

	beforeEach('',function(){
		MockComponentPrototype1 = ComponentFactory()
								.withName('mockcomponent1')
								.props({foo: {bar :1}})		
		mockcomponent = MockComponentPrototype1.create()
		MockNodePrototype = NodeFactory()
								.withName('mockNode')
								.withComponentTypes( MockComponentPrototype1.type )

		mocknode = MockNodePrototype.create()								
	})

	it('creates an empty nodepool', function(){
		var nodepool = NodepoolFactory().create()
		
		// family = FamilyPrototype.create()
		expect(nodepool).to.have.property('nodePrototype')
		expect(nodepool).to.have.property('tail')
		expect(nodepool).to.have.property('cacheTail')
		expect(nodepool.tail).to.be.null
		expect(nodepool.cacheTail).to.be.null
	})	

	it('can create nodepool with node using fluent style',function(){		
		
		var nodepool = NodepoolFactory().withNodePrototype(MockNodePrototype).create()
			
		expect(nodepool.nodePrototype).to.equal(MockNodePrototype)
	})

	it('nodepool has the same components as the node',function(){
		var nodepool = NodepoolFactory().withNodePrototype( MockNodePrototype ).create(),
			generatedNode = nodepool.get()
		
		generatedNode[MockComponentPrototype1.type] = mockcomponent
		console.log(generatedNode)
		expect( generatedNode[ MockComponentPrototype1.type ] ).to.equal( mockcomponent )
	}) 

	describe('## cache testing',function(){
		var nodepool = NodepoolFactory().withNodePrototype(MockNodePrototype).create()

		it('can cache a node',function(){		
			var mocknode2 = NodeFactory()
								.withName('mocknode2')
								.withComponentTypes( MockComponentPrototype1.create().type ).create()

			nodepool.cache(mocknode)			
			expect(nodepool.cacheTail).to.not.be.null
			expect(nodepool.cacheTail).to.equal(mocknode)
			expect(nodepool.cacheTail.previous).to.be.null
			expect(nodepool.cacheTail.next).to.be.null

			nodepool.cache(mocknode2)
			expect(nodepool.cacheTail).to.equal(mocknode2)
			expect(nodepool.cacheTail.previous).to.equal(mocknode)
			expect(nodepool.cacheTail.next).to.be.null

		})

		it('can dispose of a node')
		it('can release cache of nodes')//,function(){
		// 	nodepool.releaseCache()
		// 	expect(nodepool.cacheTail).to.be.null
		// })
	})

})