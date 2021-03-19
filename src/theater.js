

class Theater {

    constructor(world) {
        this.world = world;
        this.renderMap();
        this.isRunning = false;
    }

    act() {
        for(var i = 0; i < this.world.actors.length; i++) {
            const actor = this.world.actors[i];
            actor.act();
            this.renderMap();
        }
    }

    renderMap() {
        //Render map and actors here       
    }
}