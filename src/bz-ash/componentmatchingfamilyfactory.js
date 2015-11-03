var stampit = require('stampit'),
	DictionaryPrototype = require('../bzutil/dictionary'),
	NodelistPrototype = require('./nodelist'),
	NodeFactoryPrototype = require('./nodefactory'),
	DEFAULT_TYPE_NAME = "AnonymousMatchingFamily"
	DEFAULT_NODE_TYPE = "AnonymousMatchingFamily"



module.exports = function(config) {
    var typeName = config ? (config.typeName || DEFAULT_TYPE_NAME) : DEFAULT_TYPE_NAME,
    	type     = config ? (config.nodeType || DEFAULT_NODE_TYPE) : DEFAULT_NODE_TYPE,
      	
      	prototypeType = { name: typeName,
      					  nodeType: type },
		res = stampit()
		  .refs({
		    type: prototypeType,             
		    nodeType: prototypeType.nodeType
		  })
		  .init(function initTypes(param) {

			this.entityNodeMap = DictionaryPrototype.create()
			this.nodelist = NodelistPrototype.create()
			this.components = DictionaryPrototype.create()
		  })          
		  .static({
		    type: prototypeType
		  })
		  .methods({
			newEntity: function newEntity(e) {
							if( this.entityNodeMap.has(e) ){
								addIfMatch(entity)		
							}								
						},
			addIfMatch: function addIfMatch(e) {
				//create node
				//add entity to the node
				//add the entity, node pair to the dictionary
			}
		  })

	return res;
}
	