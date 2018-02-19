import Entity from "/js/Entity.js"
import Velocity from "/js/traits/Velocity.js"
import Jump from "/js/traits/Jump.js"

export function createMario(sprite) {
    const mario = new Entity();

    mario.position.set(64, 180);
    mario.velocity.set(200, 0);

    mario.addTrait(new Velocity());
    mario.addTrait(new Jump());

    mario.draw = function(context) {        
        sprite.draw("idle", context, this.position.x, this.position.y);
    }

    return mario;   
}