const RELEASED = 0;
const PRESSED = 1;

export default class Keyboard {
    constructor() {
        this.handlers = new Map();

        ["keydown", "keyup"].forEach(name => {
            document.addEventListener(name, event => {
                if (event.repeat) {
                    return;
                }

                const handler = this.handlers.get(event.code);
                if (handler === undefined) {
                    return;
                }

                const state = (name === "keydown")
                    ? PRESSED
                    : RELEASED;

                handler(state);
            });
        });
    }

    subscribe(key, handler) {
        this.handlers.set(key, handler);
    }
}