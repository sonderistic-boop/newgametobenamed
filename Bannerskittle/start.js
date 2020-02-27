// C:\Users\siffy\Desktop\Bannerskittle\index.html
// <script src="lib/p5.play.js" type="text/javascript"></script>

let bigmanfont;
var mgr;
function preload() {
	//global preload of all data
	bigmanfont = loadFont("../assets/super-mario-64.otf");

}

function setup() {
	createCanvas(1200,600);
	//global setup of sceneManager.js to use for levels/menu items.
	mgr = new SceneManager();
	mgr.wire();


	mgr.showScene ( mainmenu );
	//mgr.addScene ( mainmenu11 );
	//mgr.addScene ( mainmenu12 );
	

	mgr.showScene( mainmenu );
}

function draw() {

	mgr.draw();	
}

function mousePressed() {

	mgr.handleEvent("mousePressed");
}


// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================
