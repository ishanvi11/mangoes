class Boy {
    constructor(){
        var options = {
        'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(100, 325, 100, 200, options);
        this.width = 100;
        this.height = 200;
        this.image = loadImage("plucking mangoes/boy.png");
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