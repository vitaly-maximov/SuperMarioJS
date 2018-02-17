import {Vector} from "/js/math.js"

export default class Entity {
    constructor() {
        this.position = Vector.empty();
        this.velocity = Vector.empty();
    }
}