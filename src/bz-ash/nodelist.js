var stampit = require('stampit'),
	Signal = require('signals')
	


module.exports = stampit().props({
	head: null,
	tail: null
})
.init(function(){
	this.nodeAdded = new Signal()
	this.nodeRemoved = new Signal()
})
.methods({
	add: function addNode( node ) {
		if( !this.head ) {
			this.head = this.tail = node
		} else {
			this.tail.next = node
			node.previous = this.tail
			this.tail = node
		}
		this.nodeAdded.dispatch(node)
	},
	remove: function removeNode( node ) {
		var prevNode

		if( this.head === node ) {
			//replace the head
			this.head = node.next

			if(this.head) {
				this.head.previous = null
				prevNode = null
			}			
		}
		else if( this.tail === node ) {
			this.tail = node.previous

			if(this.tail) {
				this.tail.next = null
				prevNode = this.tail.previous
			}

		} else {
			//the previous node's next property should point to 
			// this nodes next property
			if(node.previous !== undefined && node.previous !== null) {
				node.previous.next = node.next
			}

			if(node.next !== undefined && node.next !== null) {
				node.next.previous = node.previous
			}

			prevNode = node.previous
		}
		
		//clear up the old node
		// node.previous = null
		// node.next = null		

		this.nodeRemoved.dispatch(node)	
		
	},
	removeAll: function removeAll() {
		while(this.head) {
			this.remove(this.head)
		}
	},
	addNodeAddListener: function addNodeAddListener(fn) {
		this.nodeAdded.add(fn)
	},
	removeNodeAddListener: function removeNodeAddListener(fn) {
		this.nodeAdded.remove(fn)
	},
	addNodeRemoveListener: function addNodeRemoveListener(fn) {
		this.nodeRemoved.add(fn)
	},
	removeNodeRemoveListener: function removeNodeRemoveListener(fn) {
		this.nodeRemoved.remove(fn)
	}
})


//-------- Quik Test
/*
var NodelistPrototype = module.exports,
	list = NodelistPrototype.create()

	list.add({next: null, previous: null})


*/	



