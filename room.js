function createListener(room, user) {
    return () => {
        if (room.state === 'init') {
            room.removeUser(user)
            return
        }
        if (room.state === 'active') {
            room.state = 'finished'
        }
    }
}

export default class Room {
    constructor() {
        this.users = new Map()
        this.state = 'init'
    }

    addUser(user) {
        if (this.users.has(user)) {
            return this
        }
        if (Array.from(this.users.keys()).length === 4) {
            throw new Error('The room is full.')
        }
        const userListener = createListener(this, user)
        this.users.set(user, userListener)
        user.on('disconnect', userListener)
        if (this.users.size === 4) {
            this.state = 'active'
        }
        return this
    }

    removeUser(user) {
        if (this.state === 'init' && this.users.has(user)) {
            const userListener = this.users.get(user)
            this.users.delete(user)
            user.removeListener('disconnect', userListener)

        } else if (this.state === 'active') {
            throw new Error('can\'t remove user, while room is in active state')
        }
        return this
    }
}