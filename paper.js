class paper{
    constructor(x, y) {
        var paper_options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
            isStatic: false
    
        }
        this.body = Bodies.circle(x, y, 40, paper_options);
        this.image = loadImage("paper2.png");

        World.add(world, this.body);
      }
      display(){ 
        imageMode(CENTER);
        
        fill("indigo");

        image(this.image, this.body.position.x, this.body.position.y, 20,20);
      }
}