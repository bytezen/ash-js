var ComponentFactory = require('../../componentfactory'),
	NodeFactory = require('../../nodefactory'),
	EntityFactory = require('../../entityfactory')

//---
// components
//---

var StringComponentPrototype = ComponentFactory().withName('stringcomponent').props({value:'foo'}),
	NumberComponentPrototype = ComponentFactory().withName('numbercomponent').props({value: 1}),
	ObjectComponentPrototype = ComponentFactory().withName('objectcomponent').props({bar: {foo: 'what', bar: 200}})

var stringComp = StringComponentPrototype.create(), 
	stringComp1 = StringComponentPrototype.create(),

	numberComp = NumberComponentPrototype.create(),
	numberComp1 = NumberComponentPrototype.create(),
	numberComp2 = NumberComponentPrototype.create(),

	objComp = ObjectComponentPrototype.create()

//---
// entities
//---

var nameNumberEntity = EntityFactory()
							.withComponents(stringComp,numberComp)
							.create(),
	numberObjectEntity = EntityFactory()
							.withComponents(numberComp1,objComp)
							.create(),
	numberEntity = EntityFactory()
							.withComponents(numberComp2)
							.create(),
	stringEntity = EntityFactory()
							.withComponents(stringComp1)
							.create(),
	stringEntity1 = EntityFactory()
							.withComponents(stringComp)
							.create()


//---
// nodes
//---

var NumberNodePrototype = NodeFactory()
							.withComponentTypes( NumberComponentPrototype.type )
							.withName( 'NumberNode'),
	StringNodePrototype = NodeFactory()
							.withComponentTypes( StringComponentPrototype.type )
							.withName( 'StringNode'),
	StringObjectNodePrototype = NodeFactory()
									.withComponentTypes( StringComponentPrototype.type, ObjectComponentPrototype.type)
									.withName( 'ObjectStringNode'),
	UniversalNodePrototype = NodeFactory()
								.withComponentTypes( StringComponentPrototype.type, 
													 ObjectComponentPrototype.type,
													 NumberComponentPrototype.type)
								.withName( 'UniversalNode')

var numberNode = NumberNodePrototype.create(),
	stringNode = StringNodePrototype.create(),
	stringObjectNode = StringObjectNodePrototype.create(),
	universalNode = UniversalNodePrototype.create()






module.exports = {
	nodes : [numberNode, stringNode, stringObjectNode, universalNode],
	entities: [numberEntity, stringEntity, stringEntity1, nameNumberEntity, numberObjectEntity],
	components: [stringComp, numberComp, objComp],
	nodePrototypes: [NumberNodePrototype, StringNodePrototype, StringObjectNodePrototype, UniversalNodePrototype]
}
