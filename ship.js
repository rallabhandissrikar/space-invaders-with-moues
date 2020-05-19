function Ship() {
	this.x = 0;
	this.y = 300;
	this.width = 60;
	this.height = 60;
	
	this.show = function() {
		rectMode(CENTER);
		rect(this.x, this.y, this.width, this.height);
	}
	
	this.update = function() {
		this.x = mouseX;
		this.x = constrain(this.x, 0 + 30, height - 30);
	}
}