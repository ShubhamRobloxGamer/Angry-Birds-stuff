class Chain {
    constructor(bodyA,bodyB){

    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length : 10,
        stifness : 0.04
    }
    this.chain = Constraint.create(options)
World.add(world,chain);
}
display() {
    var pointA = this.chain.bodyA.position;
    var PointB = this.chain.bodyB.position;
    strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y)
}  
}