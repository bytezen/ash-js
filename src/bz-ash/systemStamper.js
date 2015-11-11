"use strict"
var stampit = require('stampit'),
	TypeStamper = require('./typeStamper'),
	uuid = require('uuid')


module.exports = function() {
	var SystemStamper = stampit()
							.methods({
								addToEngine: function addToEngine(engine) {
											 },
								removeFromEngine: function removeFromEngine(engine) {
											 },										 
								update: function update(time) {
											 }
							})				
	return stampit.compose(TypeStamper(), SystemStamper)						
}



// -- demo use creating 2 different SystemStampers with unique IDs
/*
var  SystemStamper = module.exports,
	 SystemFactory1 = SystemStamper(),
	 SystemFactory2 = SystemStamper()

var sys1 = SystemFactory1.create()
var sys2 = SystemFactory2.withName('sys').create()
console.log(sys1.type)
console.log(sys2.type)
*/
