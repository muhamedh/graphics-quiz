// save this file as sketch.js
// Sketch One
var welcomeSketch = function(p){
    p.preload = function(){
        inconsolata = p.loadFont('assets/inconsolata.ttf');
    }
    p.setup = function(){
        p.createCanvas(document.getElementById("view_container").offsetWidth, 400, p.WEBGL);
        p.textFont(inconsolata);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(400 / 10);
        p.string = 'Welcome! :) To The Hour of Code';
        p.x = 0;
        p.fade = 0;
    }
    p.draw = function(){
        p.background(0);
        if(p.x == 0){
            p.printFadeMessage('Welcome to the Graphics Quiz');
        }else if(p.x == 1){
            p.printFadeMessage('You will learn programming function basics');
        }else if(p.x == 2){
            p.printFadeMessage('Press X to start!')
        }else{
            p.x = 0;
        }
        
    }
    p.printFadeMessage = function(text){
        p.fill(30,182,14, p.fade);
        p.text(text,0,0);
        if(p.fade >= 255){
            p.fade = 0;
            p.x++;
        }else{
            p.fade += 1;
        }
    }
}

var s = function (p) { // p could be any variable name
    var x = 100;
    var y = 100;
    p.setup = function () {
        p.createCanvas(400, 200);
    };

    p.draw = function () {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
    };
};


// Sketch Two
var t = function (p) {
    var x = 100.0;
    var y = 100;
    var speed = 2.5;
    p.setup = function () {
        p.createCanvas(400, 200);
    };

    p.draw = function () {
        p.background(100);
        p.fill(1);
        x += speed;
        if (x > p.width) {
            x = 0;
        }
        p.ellipse(x, y, 50, 50);

    };
};
