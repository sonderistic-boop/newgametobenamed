function mainmenu() {
	brackets = [];


	this.setup = function() {
		
		

		

		for (menux = -20; menux < 1200; menux = menux + 50) {
			for (let menuy = 0; menuy < 600; menuy = menuy + 145) {
				var movingbrackets = {
				"bracketX" : menux, 
				"bracketY" : menuy}

			brackets.push(movingbrackets);
		}
	}
	}	


	this.draw = function() {
		background(80, 0, 128);

		for (var i = 0; i < brackets.length; i++) {
			fill(90, 10, 138);
			noStroke();
			rect(brackets[i].bracketX,brackets[i].bracketY,10,100);
			rect(brackets[i].bracketX-10,brackets[i].bracketY+100,10,10);
			rect(brackets[i].bracketX-10,brackets[i].bracketY-10,10,10);
			brackets[i].bracketX = brackets[i].bracketX - 1

			if (brackets[i].bracketX < -20) {

				brackets[i].bracketX = 1220
			}


		}


		strokeWeight(5);
		stroke(255, 51, 255);
		
		fill(60,0,108);
		rect(300,150,600,350);

		fill(80, 0, 128);
		
		

		

		rect(500,200,200,50);
		rect(500,300,200,50);
		rect(500,400,200,50);


		if (mouseX > 500 && mouseX < 700 && mouseY > 200 && mouseY < 250) {
			stroke(255, 255, 255)
			fill(218, 70, 125);
			rect(500,200,200,50);}

		if (mouseX > 500 && mouseX < 700 && mouseY > 300 && mouseY < 350) {
			stroke(255, 255, 255)
			fill(218, 70, 125);
			rect(500,300,200,50);}

		if (mouseX > 500 && mouseX < 700 && mouseY > 400 && mouseY < 450) {
			stroke(255, 255, 255)
			fill(218, 70, 125);
			rect(500,400,200,50);}


		noStroke();
		fill(255,255,255);
		textSize(32)
		
		textFont(bigmanfont);
		text('Start',535,240);
		text('Credits',510,340);
		text('Quit',550,440);
		text(mouseY,20,20);
		text(mouseX,20,40);	
	}
}	