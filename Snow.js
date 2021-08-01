class Snow {
    constructor(x,y){
       var options = {
            isStatic:false,
            frictionAir:0.1,
        }
        this.body = Bodies.rectangle(random(0,1000),-10,50,50,options);
        World.add(world,this.body);
        this.image = loadImage("snow5.webp");
    }
    display(){
        var pos = this.body.position;
      //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        push();
          translate(pos.x,pos.y);
          strokeWeight(3);
          
          image(this.image,0,-10,30,40);
          pop();
      }

}