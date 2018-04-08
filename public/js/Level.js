import Compositor from "/js/Compositor.js"

export default class Level {
    constructor() {
        this.compositor = new Compositor();
        this.entities = new Set();
    }

    update(time) {
        this.entities.forEach(entity => entity.update(time));
    }
}