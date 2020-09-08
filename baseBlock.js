class Bblock{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image =loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){ 
        imageMode(CENTER);
        


        image(this.image, this.body.position.x, this.body.position.y, 200,200);
        
      }
}