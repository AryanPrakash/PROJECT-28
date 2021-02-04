class tree
{
    constructor(x,y,w,h)
    {
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(this.x,this.y,this,w,this.h)
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }
    display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}
}