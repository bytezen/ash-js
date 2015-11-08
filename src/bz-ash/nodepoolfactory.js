var stampit = require('stampit'),
	NodeFactory = require('./nodefactory')



module.exports = function() {

			return stampit()
					.props({
						nodePrototype: null,
						cacheTail: null,
						tail: null,
						component: null //TODO: component dictionary passed in as prototype maker ?
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

						}
					})
					.static({
						nodePrototype: null,
						withNodePrototype: function withNodePrototype(prototype) {
							this.nodePrototype = prototype
							return this
						}
					})
					.init(function(params){					
						this.nodePrototype = params.stamp.nodePrototype
						
					})
	}