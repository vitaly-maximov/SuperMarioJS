import Entity from "/js/Entity.js"

export function createMario(sprite) {
    const mario = new Entity();

    mario.position.set(64, 180);
    mario.velocity.set(200, -600);

    mario.draw = function(context) {        
        sprite.draw("idle", context, this.position.x, this.position.y);
    }

    mario.update = function(time) {
        const x = this.position.x + this.velocity.x * time;
        const y = this.position.y + this.velocity.y * time;

        if (x < 0 || x > 386)
        {
            this.velocity.x *= -1;
        }
        if (y < 0 || y > 176)
        {
            this.velocity.y =  -600 * (this.velocity.y / this.velocity.y);
        }

        this.position.x += this.velocity.x * time;
        this.position.y += this.velocity.y * time;
        this.velocity.y += 30;
    }

    return mario;   
}