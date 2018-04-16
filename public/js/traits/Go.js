import Trait from "/js/Trait.js"

export default class Go extends Trait {
    constructor() {
        super();

        this.direction = 0;
        this.speed = 8000;
    }

    getName() { 
        return "go"; 
    }

    update(entity, time) {
        entity.velocity.x = this.speed * this.direction * time;
    }
}