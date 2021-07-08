class Cons {

constructor(pointA, bodyB){

    var options = {pointA: pointA, bodyB: bodyB, stiffness: .2, length: 3,}

    this.pointA = pointA
    this.sling = Constraint.create(options)

    World.add(world, this.sling)

    



}

fly(){
this.sling.bodyA = null
}



display(){
if(this.sling.bodyA){
    var pointA = this.pointA
    var pointB = this.sling.bodyB.position
    strokeWeight(4)
    
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    


}
    
    
}

}