var serial; 
var portlist ; 
var result = '' ;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	serial = new p5.SerialPort() ; 
	serial.list() ; 
	serial.on('list',printList);
	serial.on('data', printData) ;
}

function draw() {
	background(255);
	text(result, 50,50);
}

function printData() {

}

function printList(serialList) {
	for (var i=0; i<serialList.length; i++){
		console.log(serialList[i]); 
		result = result + serialList[i] + '\n' ; 
	}
}
