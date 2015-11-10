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
	stringComp1 = StringComponentPrototype.create({value:'bar'}),

	numberComp = NumberComponentPrototype.create(),
	numberComp1 = NumberComponentPrototype.create(),
	numberComp2 = NumberComponentPrototype.create(),

	objComp = ObjectComponentPrototype.create({foo:'bar', bar: 300}),
	objComp1 = ObjectComponentPrototype.create({bar:'foo'}),
	objComp2 = ObjectComponentPrototype.create()

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
							.create(),
	objectEntity = EntityFactory()
							.withComponents(objComp1)
							.create(),
	objectEntity1 = EntityFactory()
							.withComponents(objComp2)
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
								.withName( 'UniversalNode'),
	NumberObjectNodePrototype = NodeFactory()
									.withComponentTypes( NumberComponentPrototype.type, ObjectComponentPrototype.type)
									.withName( 'NumberObjectNode' ),
	ObjectNodePrototype = NodeFactory()
								.withName('ObjectNode')
								.withComponentTypes( ObjectComponentPrototype.type )


var numberNode = NumberNodePrototype.create(),
	stringNode = StringNodePrototype.create(),
	stringObjectNode = StringObjectNodePrototype.create(),
	universalNode = UniversalNodePrototype.create(),
	numberObjectNode = NumberObjectNodePrototype.create(),
	objectNode = ObjectNodePrototype.create()



module.exports = {
	nodes : [numberNode, 
			 stringNode, 
			 stringObjectNode, 
			 universalNode, 
			 numberObjectNode,
			 objectNode],

	entities: [numberEntity, 
			   stringEntity, 
			   stringEntity1, 
			   nameNumberEntity, 
			   numberObjectEntity,
			   objectEntity,
			   objectEntity1],

	components: [stringComp,
				 stringComp1, 
				 numberComp, 
				 numberComp1, 
				 numberComp2, 
				 objComp,
				 objComp1,
				 objComp2],

	nodePrototypes: [NumberNodePrototype, 
					 StringNodePrototype, 
					 StringObjectNodePrototype, 
					 UniversalNodePrototype,
					 NumberObjectNodePrototype,
					 ObjectNodePrototype]
}
