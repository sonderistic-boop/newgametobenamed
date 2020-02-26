// C:\Users\siffy\Desktop\Bannerskittle\index.html
// <script src="lib/p5.play.js" type="text/javascript"></script>
let bigmanfont;

function preload() {
	bigmanfont = loadFont("../Bannerskittle/data/super-mario-64.otf");


}



function mainmenu() {
	background(80, 0, 128);

	fill(80, 0, 128);
	
	strokeWeight(5);
	stroke(255, 51, 255);

	rect(500,200,200,50);
	rect(500,300,200,50);
	rect(500,400,200,50);


	if (mouseX > 500 && mouseX < 700 && mouseY > 200 && mouseY < 250) {
		stroke(255, 255, 255)
		fill(218, 70, 125);
		rect(500,200,200,50);
	}

	if (mouseX > 500 && mouseX < 700 && mouseY > 300 && mouseY < 350) {
		stroke(255, 255, 255)
		fill(218, 70, 125);
		rect(500,300,200,50);
	}

	if (mouseX > 500 && mouseX < 700 && mouseY > 400 && mouseY < 450) {
		stroke(255, 255, 255)
		fill(218, 70, 125);
		rect(500,400,200,50);
	}
	noStroke();
	fill(255,255,255);
	textSize(32)
	

	
	textFont(bigmanfont);
	text('Start',535,240);
	text('Credits',510,340);
	text('Quit',550,440);	
	text(mouseY,20,20);


}







function setup() {
  createCanvas(1200,600);

}

function draw() {
 // background("blue"); 
 	mainmenu()

}