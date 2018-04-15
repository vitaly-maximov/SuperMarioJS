import Trait from "/js/Trait.js"

export default class Velocity extends Trait {
    
    getName() { 
        return "move"; 
    }

    update(entity, time) {
        const x = entity.position.x + entity.velocity.x * time;
        const y = entity.position.y + entity.velocity.y * time;

        if (x < 0 || x > 386)
        {
            entity.velocity.x *= -1;
        }

        entity.position.x += entity.velocity.x * time;
        entity.position.y += entity.velocity.y * time;
        entity.velocity.y += 2000 * time;

/*
        if (y > 176)
        {
            entity.velocity.y =  0;
        }

        if (entity.position.y > 176)
        {
            entity.position.y = 176;
        }
        */
    }
}