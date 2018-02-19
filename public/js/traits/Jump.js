import Trait from "/js/Trait.js"

export default class Jump extends Trait {
    construtor() {
        this.time = 0;
    }

    getName() { 
        return "jump"; 
    }

    start() {
        this.time = 0.5;
    }

    cancel() {
        this.time = 0;
    }

    update(entity, time) {
        if (this.time > 0) {
            entity.velocity.y = -200;
            this.time -= time;
        }
    }
}