function setup() {
    createCanvas(windowWidth,400);
   // angleMode(DEGREES);
}

function draw() {

    background(81);
    var atlamaSayisi = map(mouseX,0,windowWidth,3,100);

    stroke(255);
    noFill();
    beginShape();
    for(let noktaSayisi=0;noktaSayisi<360;noktaSayisi+=atlamaSayisi)
    {
        let x = 100*sin(noktaSayisi)+windowWidth/2;
        let y = 100*cos(noktaSayisi)+200;
        //vertex(x, y);
        curveVertex(x, y);
    }
    endShape(CLOSE);


    //

}