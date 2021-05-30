class paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=200;
		this.paperHeight=213;
		
		
		this.image=loadImage("paper.png")

	}
	display()
	{
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
		
			pop()

    }

}