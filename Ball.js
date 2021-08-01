class Ball {
    constructor(x,y){
       var options = {
            isStatic:false,
            frictionAir:0.1,
        }
        this.body = Bodies.rectangle(random(0,600),-15,50,50,options);
        World.add(world,this.body);
        this.image = loadImage("snow4.webp");
    }
    display(){
        var pos = this.body.position;
      //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        push();
          translate(pos.x,pos.y);
          strokeWeight(3);
          
          image(this.image,0,-15,50,50);
          pop();
      }

}