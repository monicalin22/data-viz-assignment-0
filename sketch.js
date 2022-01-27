// My code for my abstract clock is below!

function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
}
  
function draw() {
	
	background(222, 229, 229); // Color in RGB.
	// Setting the second, minute, and hour seconds.
	var sec = second();
	var min = minute();
	var hr = hour();
	
	// Center the elements.
	translate(width/2, height/2);

	// Order will be hours, minutes, then seconds as to show up properly in the webpage.
  
	// For the representation of HOURS.
	push();
	rotate((TWO_PI / 12) * hr); // How often this portion should rotate.
	fill(157, 197, 187);
	noStroke();
	arc(0,0, 600, 600,  1, PI + QUARTER_PI, OPEN);
	pop();
  
	// For the representation of MINUTES.
	push();
	rotate((TWO_PI / 60) * min); // How often this portion should rotate.
	fill(23, 184, 144);
	noStroke();
	arc(0,0, 450, 450,  1, PI + QUARTER_PI, OPEN);	
	pop();
  
	// For the representation of SECONDS.
	push();
	rotate((TWO_PI / 60) * sec); // How often this portion should rotate.
	fill(94, 128, 127);
	noStroke();
	arc(0,0, 300, 300, 1, PI + QUARTER_PI, OPEN);
	pop();
  
}
