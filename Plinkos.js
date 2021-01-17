class Plinkos{
    constructor(x,y,r){

        var options={
            isStatic:true
        }
        this.r=r;

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        //added below lines till line no 21
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
       
        fill (255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();


    }
}