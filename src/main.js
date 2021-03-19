var world;
var theater;

require(['src/world', 'src/actor', 'src/theater', 'src/timer'], () => {
    require(['src/test/TestActor'], () => {
        world = new World(10, 10);
        world.addActor(new TestActor(world, 0, 0));
    
        theater = new Theater(world);
        theater.isRunning = true;
        var theaterTimer = new Timer(1000, () => {
            if(theater.isRunning) {
                theater.act();
            }
        });
    
    
        theaterTimer.start();
    });
});

