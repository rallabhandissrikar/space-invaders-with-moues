function Bullet() {
	this.x = ship.x;
	this.y = ship.y;
	this.width = 20;
	this.height = 30;

    this.kill = function(pos) {
		let a = this.x; 
		let b = this.y;
		let c = pos.x;
		let d = pos.y;

		if (a + 5 > c - 30 && a - 5 < c + 30 && b + 10 > d - 30 && b - 10 < d + 30) {
			return  true;
		}else {
			return false;
		}
	}

	this.show = function() {
		rectMode(CENTER);
		rect(this.x, this.y, this.width, this.height, 30,30);
	}
	
	this.update = function() {
		this.y = this.y - 8;
	}
	
	this.out = function() {
		if (this.y < 0) {
			return true;
		}else {
			return false;
		}
	}

	
	
}