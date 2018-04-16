import Keyboard from "/js/Keyboard.js"

export function setupKeyboard(entity) {
        const keyboard = new Keyboard();

        keyboard.subscribe("Space", state => {
            if (state === 0) {
                entity.jump.cancel();
            } else {
                entity.jump.start();
            }
        });

        keyboard.subscribe("ArrowLeft", state => {
            entity.go.direction = -state;            
        });

        keyboard.subscribe("ArrowRight", state => {
            entity.go.direction = state;            
        });
}