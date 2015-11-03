var stampit = require('stampit'),
	TYPENAME = 'FooComponent'



module.exports = (function () {
					var prototypeType = { name: TYPENAME }
					return stampit()
		            		.refs({
		            			type: prototypeType           			            	
		            		})
							.static({
								type: prototypeType,
							})
			})()