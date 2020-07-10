import Room from './room.js'
import User from './user.js'

let room = new Room();
let user1 = new User('user1')
let user2 = new User('user2')
let user3 = new User('user3')
let user4 = new User('user4')
let user5 = new User('user5')


room
    .addUser(user1)
    .addUser(user2)
    .addUser(user3)
room.removeUser(user3)
console.log(room.state)
// room.addUser(user4)
// room.addUser(user5)
// console.log(room.state)
// user5.disconnect()
// console.log(room.state)
//
// user1.once('foo', console.log)
// user1.on('foo', console.log)
// setInterval(() => {
//     user1.emit('foo', { foo: 'bar' })
// }, 1000)