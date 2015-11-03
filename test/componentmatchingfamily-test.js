var expect = require('chai').expect,
	FamilyFactory = require('../src/bz-ash/componentmatchingfamily')


describe('#Component Matching Family',function(){
	var family

	beforeEach('',function(){
		FamilyPrototype = FamilyFactory({name:'miFamilia'})
		family = FamilyPrototype.create()
	})


	it('creates a default named family', function(){
		FamilyPrototype = FamilyFactory()
		family = FamilyPrototype.create()
		expect(family.name).to.equal('AnonymousMatchingFamily')		
	})	

	it('uses configuration to create a named family', function(){
		expect(family.name).to.equal('miFamilia')		
	})	

	it('family created with empty nodelist', function(){
		expect(family.nodelist.head).to.not.be.ok		
	})

	it('adds the correct entity to the family nodelist', function() {
		var mockFamily,
			MockNodePrototype = require('../src/bz-ash/node')
			mockNode = MockNodePrototype.create()



		mockFamily = FamilyFactory({name:'mockFamily'})
							.create({types: 'something'})

		// console.log(mockFamily.types)
		entity = require('../src/bz-ash/entity').create(),
			nodelist = family.nodelist

		family.newEntity(entity)

		expect(nodelist.head.entity).to.equal(entity)

	})
	// it('creates empty nodelist', function(){

	// 	expect(family.nodelist).to.be.undefined

	// })
})