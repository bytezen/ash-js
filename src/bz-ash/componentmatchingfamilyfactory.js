var stampit = require('stampit'),
	DictionaryPrototype = require('../bzutil/dictionary'),
	NodelistPrototype = require('./nodelist'),
	NodePoolFactory = require('./nodepoolfactory'),
	DEFAULT_TYPE_NAME = "AnonymousMatchingFamily"




module.exports = function() {
	var config
	 = { name: DEFAULT_TYPE_NAME,
						  nodePrototype: null }


	return stampit()
			  .refs({
			    type: config
			  })
			  .init(function initStateVars() {
				this.entityNodeMap = DictionaryPrototype.create() // (entity, node) map
				this.nodelist = NodelistPrototype.create()
				this.componentMap = DictionaryPrototype.create()  // (componentType, typeName)	
				this.nodePrototype = undefined
			  })
			  .init(function initNodeType(params) {
			  	this.nodePrototype = config.nodePrototype
			  	})
			  .init(function initComponentMap(params){
			  	if(this.nodePrototype) {
				  	this.nodePrototype.componentTypes.forEach(function forEachInitTypes(t) {
				  												this.componentMap.add(t, t.name)
				  											}, this)
				}
			  })
			  .init(function initNodePool() {
			  	this.nodePool = NodePoolFactory()
			  						.withNodePrototype(this.type.nodePrototype)
			  						.create({componentMap: this.componentMap})
			  })
			  .static({
			    type: config,
			    withName: function withName(name) {			
								config.name = name								
								return this
							},
				withNodePrototype: function withNodePrototype(nodeProto) {
								config.nodePrototype = nodeProto
								return this
							}
			  })
			  .methods({
				newEntity: function newEntity(e) {
								if( !this.entityNodeMap.has(e) ){
									this.addIfMatch(e)		
								}								
							},
				removeEntity: function removeEntity(e) {
								this.removeIfMatch(e)
							},			
				addIfMatch: function addIfMatch(e) {
								//if the entity's components match all of the components 
								//that this family has registered then
								//create a node (or get it from the pool)
								// set its entity to e
								// set its properties to e.component.property values
								//create node
								if(!this.entityNodeMap.has(e)) {
									//does this entity have all of the necessary components to be in the family
									// console.log(this.componentMap)
									var shouldAdd = e.componentMap.size() > 0 && 
													this.componentMap.keys.every(function (familyCompType) {
																				return e.componentMap.has(familyCompType)
																			}, this)									
									if(shouldAdd) {
										//get a new node from the node pool
										var node = this.nodePool.get()
										node.entity = e
										//set node componentType property equal to entity component
										
										this.componentMap.forEach( function(k,v){
											node[k.name] = e.componentMap.get(k)
										})

										//add entity and node to entity node map
										this.entityNodeMap.add(e,node)
										//add component removed listener to the entity component
										e.componentRemoved.add(this.componentRemovedFromEntity,this)
										//add node to this.nodelist
										this.nodelist.add(node)
										
									}											
									

									//this.entityNodeMap.add(e,node)
								}
								//add entity to the node
								//add the entity, node pair to the dictionary
							},
				removeIfMatch: function removeIfMatch(e) {
									if(this.entityNodeMap.has(e)) {
										var node = this.entityNodeMap.get(e)
										//remove handler
										e.componentRemoved.remove(this.componentRemovedFromEntity)
										console.log(this.nodelist)
										this.nodelist.remove(node)
										console.log('----------')
										console.log(this.nodelist)
										this.entityNodeMap.remove(e)

						                // if (this.engine.updating) {
						                    // nodePool.cache(node);
						                    // engine.updateComplete.add(this.releaseNodePoolCache, this);
						                // } else {
						                	this.nodePool.dispose(node);
						                // }										
									}
							},
				componentAddedToEntity: function onComponentAddedToEntity(entity, componentType) {
											this.addIfMatch(entity)
										},
				componentRemovedFromEntity: function onComponentRemovedFromEntity(entity, componentType) {
															}
			  })
	}
