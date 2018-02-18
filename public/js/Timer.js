export default class Timer {
    constructor(fps = 1/60)
    {
        this.fps = fps;
    }

    start() {
        let that = this;

        let lastTime = 0;
        let accumulatedTime = 0;

        const update = function update(time) {
            accumulatedTime += (time - lastTime) / 1000;
            lastTime = time;

            if (accumulatedTime >= that.fps) {
                while (accumulatedTime >= that.fps) {
                    accumulatedTime -= that.fps;
                    that.updateState(that.fps);
                }
                that.updateFrame();
            }

            requestAnimationFrame(update);            
        };

        update(0);
    }
}