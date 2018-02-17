import Entity from "/js/Entity.js"

export function createMario(sprite) {
    const mario = new Entity();

    mario.position.set(50, 50);
    mario.velocity.set(2, 2);

    mario.draw = function(context) {        
        sprite.draw("idle", context, this.position.x, this.position.y);
        this.update();
    }

    mario.update = function() {
        if (this.position.x + this.velocity.x < 0 || this.position.x + this.velocity.x > 386)
        {
            this.velocity.x *= -1;
        }
        if (this.position.y + this.velocity.y < 0 || this.position.y + this.velocity.y > 176)
        {
            this.velocity.y =  -10 * this.velocity.y / this.velocity.y;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y += 0.5;
    }

    return mario;   
}