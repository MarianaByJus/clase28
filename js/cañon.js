class Cañon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cañon = loadImage("assets/CANON.png");
        this.base = loadImage("assets/cannon_base.png");
    }

    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rectMode(CENTER);
        image(this.cañon,this.x,this.y,this.width,this.height);
        pop();
        image(this.base,70,20,200,200);
    }
}