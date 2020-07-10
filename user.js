import { EventEmitter } from 'events'

export default class User extends EventEmitter {
    constructor(name) {
        super();
        this.name = name
    }

    disconnect() {
        this.emit("disconnect")
    }
}
