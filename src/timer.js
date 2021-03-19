class Timer {

    constructor(interval, runnable) {
        this.running = false;
        this.lastRun = -1;
        this.interval = interval;
        this.runnable = runnable;
    }

    start() {
        this.running = true;
        this.lastRun = Date.now();
        this.checkTimer();
    }

    stop() {
        this.running = false;
    }

    checkTimer() {
        if(this.running) {
            setTimeout(() => {
                if(Date.now() - this.lastRun >= this.interval) {
                    this.lastRun = Date.now();
                    this.runnable();
                }
                this.checkTimer();
            }, 1)
        }
    }
}