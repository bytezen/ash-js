var expect = require('chai').expect,
	FamilyFactory = require('../componentmatchingfamilyfactory'),
	MockData = require('./data/mocks'),
	NodeFactory = require('../nodefactory'),
	ComponentFactory = require('../componentfactory'),
	EntityFactory = require('../entityfactory'),
	EntityPrototype = EntityFactory()



describe('#Component Matching Family',function(){
	var family

	// beforeEach('',function(){
	// 	FamilyPrototype = FamilyFactory({name:'miFamilia'})
	// 	family = FamilyPrototype.create()
	// })

	it('creates a default named family', function(){
		family = FamilyFactory().create()
		// family = FamilyPrototype.create()
		expect(family.type).to.exist
		expect(family.type.name).to.equal('AnonymousMatchingFamily')
		expect(family.nodePrototype).to.be.null
		expect(family.nodePool).to.be.ok

	})	

	it('uses fluent style naming', function(){
		family = FamilyFactory().withName('miFamilia').create()		
		expect(family.type.name).to.equal('miFamilia')		
	})	

	it('uses fluent style typing', function(){
		var MockNodePrototype = NodeFactory()
		var node = MockNodePrototype.create()

		family = FamilyFactory().withNodePrototype( MockNodePrototype )

		expect(family.type.nodePrototype).to.equal( MockNodePrototype)		

	})

	it('family created with empty nodelist', function(){
		var ComponentPrototype = ComponentFactory().withName('comp1').props({foo:'foo'})
		var MockNodePrototype = NodeFactory().withName('Comp1Node').withComponentTypes(ComponentPrototype.type)

		family = FamilyFactory().withNodePrototype(MockNodePrototype).create()	

		expect(family.nodelist.head).to.not.be.ok		
	})

	it('can create and access a component type', function(){
		var MockComp1Prototype = ComponentFactory()
								.withName('comp1')
								.props({foo:1, bar: 2}),
			mockcomponent1 = MockComp1Prototype.create(),
			MockComp2Prototype = ComponentFactory()
								.withName('comp2')
								.props({
									foo:[1,2,3], 
									bar:{ foo: 3, 
										  bar: 'bar'}
								}), 
			mockcomponent2 = MockComp2Prototype.create()

			MockNodePrototype = NodeFactory()
							.withName('mocknode')
							.withComponentTypes( MockComp1Prototype.type ,MockComp2Prototype.type )
							

			family = FamilyFactory().withNodePrototype( MockNodePrototype ).create()

			expect(family.componentMap.get(mockcomponent1.type)).to.be.ok
			expect(family.componentMap.get(mockcomponent2.type)).to.be.ok

	})

	it('adds the correct entity to the family nodelist', function() {
		var mockFamily,
			ComponentPrototype1 = ComponentFactory().withName('comp1').props({foo: 23}), 
			ComponentPrototype2 = ComponentFactory().withName('comp2').props({bar:'something'}), 
			ComponentPrototype3 = ComponentFactory().withName('comp3'), 

			component1 = ComponentPrototype1.create(),	
			component2 = ComponentPrototype2.create(),
			component3 = ComponentPrototype3.create(),

			MockNodePrototype = NodeFactory()
							.withName('Comp1Comp2Node')
							.withComponentTypes([ ComponentPrototype1.type, ComponentPrototype2.type]),
			mockNode = MockNodePrototype.create()

		mockFamily = FamilyFactory()
						.withName('Comp1Comp2Family')
						.withNodePrototype( MockNodePrototype )
						.create()								
		
		entity = EntityFactory().withComponents( [component1, component2] ).create()

		mockFamily.newEntity(entity)
		expect(mockFamily.nodelist.head.entity).to.equal(entity)

	})

	it('will not add entity that does not have matching components',function(){
		var stringNodePrototype = MockData.nodePrototypes[1],
			stringEntity = MockData.entities[1],
			stringEntity1 = MockData.entities[2],
			numberEntity = MockData.entities[0]

		family = FamilyFactory().withNodePrototype( stringNodePrototype ).create()
		family.newEntity( stringEntity )
		family.newEntity( stringEntity1 )
		family.newEntity( numberEntity )

		expect(family.nodelist.head.entity).to.equal( stringEntity )
		expect(family.nodelist.tail.entity).to.equal( stringEntity1 )


	})
	// it('creates a node of the correct type when a valid entity is added',function(){
	// 	throw Error('not implemented')
	// })

	// it('does not create a node for non matching entities',function(){
	// 	throw Error('not implemented')
	// })


	// it('creates empty nodelist', function(){

	// 	expect(family.nodelist).to.be.undefined

	// })
})