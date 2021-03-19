class Actor {

    constructor(x, y) {
        this.world = world;
        this.x = this.checkBound(x, world.rows);
        this.y = this.checkBound(y, world.cols);
        this.rotation = 0;
    }

    act() {
        console.log('Default Actor')
    }


    checkBound(cord, upperBound) {
        if(cord > upperBound || cord < 0) {
            throw 'Invalid bound ' + cord + ' for defined world!'
        }
        return cord;
    }
}