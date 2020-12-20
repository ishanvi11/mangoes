class Chain {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.04,
            length:10
        }
     this.chain= Matter.Constraint.create(options)
     this.pointB=pointB
      World.add(world,this.chain);
    }

    Display(){
        strokeWeight(3)
   line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
   console.log("hi");
    }
}
