import Compositor from "/js/Compositor.js"
import {Matrix} from "/js/math.js"
import TileCollider from "/js/TileCollider.js"

export default class Level {
    constructor() {
        this.compositor = new Compositor();
        this.entities = new Set();
        this.tiles = new Matrix();
        this.tileCollider = new TileCollider(this.tiles);
    }

    update(time) {
        this.entities.forEach(entity => { 
            entity.update(time);

            this.tileCollider.test(entity);
        });
    }
}