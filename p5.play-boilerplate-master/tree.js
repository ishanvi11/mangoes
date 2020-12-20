class Tree {
    constructor(){
        var options = {
        'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(1000, 220, 400, 330, options);
        this.width = 400;
        this.height = 330;
        this.image = loadImage("plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}