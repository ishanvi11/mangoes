class Ground {
    constructor(){
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(600, 380, 1200, 10, options);
        this.width = 1200;
        this.height = 10;
        
        World.add(world, this.body);
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}