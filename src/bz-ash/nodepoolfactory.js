var stampit = require('stampit'),
	NodeFactory = require('./nodefactory')



module.exports = function() {

			return stampit()
					.props({
						nodePrototype: null,
						cacheTail: null,
						tail: null,
						componentMap: null //(componentType, typeName)	
					})
					.methods({
						cache: function cache(node) {
							node.previous = this.cacheTail
							this.cacheTail = node
						},

						get: function get() {
							var node
							if(this.tail) {
								node = this.tail
								this.tail = node.previous
								node.previous = null								
							} else {
								node = this.nodePrototype.create()
							}

							return node
						},

						dispose: function dispose( node ) {
							this.componentMap.forEach( function(componentType, typeName) {
								node[typeName] = null;
							})
							node.entity = null
				            node.next = null
				            node.previous = this.tail
				            this.tail = node							
						}
					})
					.static({
						nodePrototype: null,
						withNodePrototype: function withNodePrototype(prototype) {
							this.nodePrototype = prototype
							return this
						}
					})
					.init(function initNodePrototype (params){					
						this.nodePrototype = params.stamp.nodePrototype
					})
	}