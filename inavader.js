function Invader() {
	this.x = random(0 + 20, height - 20);
	this.y = random(-50, 0);
	this.width = 60;
	this.height = 60;
	this.velocity = 3
	
	this.show = function() {
		rectMode(CENTER);
		console.log(this.velocity);
		rect(this.x, this.y, this.width, this.height);
	}
	
	this.update = function() {
		this.y = this.y + this.velocity;
		
		if (frameCount % 50 === 0) {
			this.velocity += 1;
		}

		if (this.y > 400) {
			this.x = random(0,400);
			this.y = random(-50, 0);
			score--;
		}

		if (this.velocity === 16) {
			this.velocity = 3;
		}
	}

	this.first = function() {
		this.x = random(0 + 20, height - 20);
		this.y = random(-250, -150);	
	}
	
}