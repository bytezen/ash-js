var stampit = require('stampit'),	
	DEFAULT_TYPE = "anonymousComponentType"



module.exports = function(config) {


	var typeName = config ? (config.typeName || DEFAULT_TYPE) : DEFAULT_TYPE,
		prototypeType = { name: typeName },
		res= stampit()
            .refs({
            	type: prototypeType           	
            	
            })
			.static({
				type: prototypeType				
			})

	return res;
}
