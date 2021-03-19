class World {

    constructor(rows, cols) {
        this.actors = []
        this.rows = rows;
        this.cols = cols;
    }

    addActor(actor) {
        this.actors.push(actor);
    }
}