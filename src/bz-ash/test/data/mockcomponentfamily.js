var mockNodes = require('./mocknodes')


	var NumberNodeFamily 	= FamilyFactory()
								.withNodePrototype( mockNodes.NumberNodePrototype ),
								.withName('NumberFamily')
	StringNodeFamily 		= FamilyFactory()
								.withNodePrototype( mockNodes.StringNodePrototype ),
								.withName('StringFamily')
	StringObjectFamily 		= FamilyFactory()
								.withNodePrototype( mockNodes.StringObjectNodePrototype ),
								.withName('StringObjectFamily')
	UniversalNodeFamily 	= FamilyFactory()
								.withNodePrototype( mockNodes.UniversalNodePrototype ),
								.withName('UniversalFamily')
	NumberObjectFamily 		= FamilyFactory()
								.withNodePrototype( mockNodes.NumberObjectNodePrototype ),
								.withName('NumberObjectFamily')
	ObjectFamily 			= FamilyFactory()
								.withNodePrototype( mockNodes.ObjectNodePrototype )
								.withName('ObjectFamily')


module.exports = {
	numbernodefamily: 		NumberNodeFamily,
	stringnodefamily: 		StringNodeFamily,
	stringobjectfamily: 	StringObjectFamily,
	universalnodefamily: 	UniversalNodeFamily,
	numberobjectfamily: 	NumberObjectFamily,
	objectfamily: 			ObjectFamily
}


