class Sling{
    constructor(body1,body2){
        
        var opt = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.08,
            length:9
        }

        this.sling = Constraint.create(opt);
        World.add(world,this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
    
}