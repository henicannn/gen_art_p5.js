var n = 256;
var minRad = 50;
var maxRad = 600;
var nfAng = 0.01;
var nfTime = 0.005;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();
    //stroke(random(50), random(100), random(150), random(200));


}

function draw() {

    translate(width / 4, height / 2);
    stroke(255, 152, 203);
    beginShape();
    for (var i = 0; i < n; i++) {
        var ang = map(i, 0, n, 0, 6.283);
        var rad = map(noise(i * nfAng, frameCount * nfTime), 0, 1, minRad, maxRad);
        var x = rad * cos(ang);
        var y = rad * sin(ang);
        curveVertex(x, y);
    }
    endShape(CLOSE);


    translate(width / 4, height / 32);
    beginShape();
    stroke(random(120));
    for (var j = 0; j < n; j++) {
        var ang = map(0, 0, 0, 0, 2);
        var rad = map(noise(j * nfAng, frameCount * nfTime), 0, 1, minRad, maxRad);
        var a = rad * cos(ang);
        var b = rad * sin(ang);
        curveVertex(a, b);
    }
    endShape(CLOSE);

    translate(width / 4, height / 32);
    beginShape();
    stroke(173, 180, 250);
    for (var k = 0; k < n; k++) {
        var ang = map(k, 0, n, 0, 6.283);
        var rad = map(noise(k * nfAng, frameCount * nfTime), 0, 1, minRad, maxRad);
        var c = rad * cos(ang);
        var d = rad * sin(ang);
        curveVertex(c, d);
    }
    endShape(CLOSE);

}

setTimeout(function() {
    location.reload();
}, 5000);