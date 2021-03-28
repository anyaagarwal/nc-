class string {
    constructor (body1, body2,X,Y) {
        this.X= X
        this.Y= Y
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.X, y:this.Y}
        }
        
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        stroke("grey");

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
        var Anchor2X = pointB.x + this.X;
        var Anchor2Y = pointB.y + this.Y;
        
        
        line(Anchor1X, Anchor1Y,Anchor2X, Anchor2Y);
    }

}