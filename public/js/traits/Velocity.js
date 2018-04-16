import Trait from "/js/Trait.js"

export default class Velocity extends Trait {
    
    getName() { 
        return "move"; 
    }

    update(entity, time) {        
        //entity.position.x += entity.velocity.x * time;
        //entity.position.y += entity.velocity.y * time;
        entity.velocity.y += 2000 * time;

    }
}