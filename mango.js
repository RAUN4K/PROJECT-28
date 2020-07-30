class Mango{
    constructor(x,y,RADIUS){
        var options ={
            isStatic: true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x,y,RADIUS);
    }
    display(){
        var pos = this.body.position;
        circMode(CENTER);

        circ(pos.x,pos.y,RAIDUS);
    }
}