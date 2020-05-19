var invader;
var ship;
var bullets = [];
var score = 0;
var snd;

function preload() {
	snd = loadSound("snd.mp3")
}

function setup() {
	createCanvas(400, 400);
	invader = new Invader();
	ship = new Ship();
	snd.play();
}

function draw() {
	background(150);
	textSize(100)
	text(score, 200,200);
	invader.show();
	invader.update();
	ship.show();
	ship.update();
	
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show();
		bullets[i].update();

		if (bullets[i].out()) {
			bullets.splice(i,1);
		}

		
	}

	for (var a = 0; a < bullets.length; a++) {
		if (bullets[a].kill(invader)) {
			bullets.splice(a, 1);
			invader.first();
			score += 1;
		}
	}
}

function mousePressed() {
	bullets.push(new Bullet());
}