import Trait from "/js/Trait.js"
import {Vector} from "/js/math.js"

export default class Entity {
    constructor() {
        this.position = Vector.empty();
        this.velocity = Vector.empty();

        this.traits = [];
    }

    addTrait(trait) {
        this.traits.push(trait);
        this[trait.getName()] = trait;
    }

    update(time) {
        this.traits.forEach(trait => trait.update(this, time));
    }
}