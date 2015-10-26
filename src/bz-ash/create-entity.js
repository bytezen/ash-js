var Entity = require('./entity.js')

console.log(Entity)


for(prop in Entity) {
  if(Entity.hasOwnProperty(prop)) {
    console.log(prop)
  }
}
