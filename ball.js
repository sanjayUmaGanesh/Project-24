class ball{

    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 0.5,
            density: 0.5
        }
        this.body = Bodies.circle(x, y, 20, options);

        World.add(world, this.body);
  

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill("green");
        circle(0, 0, 20,);
        pop();
      }
    }


