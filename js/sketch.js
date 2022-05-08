var welcomeSketch = function (p) {

    var width = document.getElementById("view_container").offsetWidth;

    p.preload = function () {
        inconsolata = p.loadFont('assets/inconsolata.ttf');
    }
    p.setup = function () {
        p.createCanvas(width, 400, p.WEBGL);
        p.textFont(inconsolata);
        p.textAlign(p.CENTER);
        p.textSize(400 / 10);
        p.x = 0;
        p.fade = 0;
    }
    p.draw = function () {
        p.background(0);
        if (p.x == 0) {
            p.printFadeMessage('Welcome to the Graphics Quiz');
        } else if (p.x == 1) {
            p.printFadeMessage('You will learn programming function basics');
        } else if (p.x == 2) {
            p.printFadeMessage('Press [any key] to start!')
        } else {
            p.x = 0;
        }

    }
    p.printFadeMessage = function (text) {
        p.fill(30, 182, 14, p.fade);
        p.text(text, 0, 0);
        if (p.fade >= 255) {
            p.fade = 0;
            p.x++;
        } else {
            p.fade += 1;
        }
    }
};

var submitUsername = function(p){
    var width = document.getElementById("view_container").offsetWidth;

    p.preload = function () {
        inconsolata = p.loadFont('assets/inconsolata.ttf');
    }
    p.setup = function () {
        p.createCanvas(width, 400, p.WEBGL);
        p.textFont(inconsolata);
        p.textAlign(p.CENTER);
        p.textSize(400 / 10);
        p.x = 0;
        p.fade = 0;
    }
    p.draw = function () {
        p.background(0);
        if (p.x == 0) {
            p.printFadeMessage('You did well!');
        } else if (p.x == 1) {
            p.printFadeMessage('Total score: ' + score);
        } else if (p.x >= 2) {
            p.printFadeMessage('Enter your username to submit')
        }

    }
    p.printFadeMessage = function (text) {
        p.fill(30, 182, 14, p.fade);
        p.text(text, 0, 0);
        if (p.fade >= 255) {
            p.fade = 0;
            p.x++;
        } else {
            p.fade += 1;
        }
    }
}

var taskTen = function(p){
    var width = document.getElementById("view_container").offsetWidth;
    var height = 400;
    var x = 0;
    var xPositive = true;

    p.setup = function(){
        p.createCanvas(width,height);
    }
    p.draw = function(){
        p.background(0);
        p.fill(0,0,255);
        p.rect(width - 150, 0, 150,150);
        p.fill(255,0,0);
        p.circle(width - 75, 75, 75);
        if(x + 50 >= width){
            xPositive = false;
        }else if(x <= 0){
            xPositive = true;
        }
        if(xPositive == true){
            x += 2;
        }else{
            x -= 2;
        }
        p.fill(249,242,83);
        p.rect(x,height/2, 50,50);
    }
}

var taskNine = function(p){
    var width = document.getElementById("view_container").offsetWidth;
    var height = 400;

    p.setup = function(){
        p.createCanvas(width, height);
    }

    p.draw = function(){
        p.fill(255,0,0);
        p.rect(width-100, 0, 100,100);
        p.fill(0,255,0);
        p.rect(width-100,height-100,100,100);
        p.fill(0,0,255);
        p.rect(0,height-100,100,100);
    }
}
var taskEight = function(p){
    var width = document.getElementById("view_container").offsetWidth;
    var height = 400;
    var x = 0;
    var y = height - 50;
    var stage = 0;

    p.setup = function(){
        p.createCanvas(width, height);
    }

    p.draw = function(){
        p.background(0);
        p.fill(255);
        p.rect(width/4, height/2, 30, height/2);
        p.rect(width * 2/4, 0, 30, height /2 );
        p.rect(width * 3/4, height/2, 30, height /2 );
        p.fill(255,0,0);
        p.rect(width - 50, 0, 50,50);
        if(stage == 0){
            if(y <= 0){
                stage = 1;
            }
            y -= 3;
        }else if(stage == 1){
            if(x + 50 >= (width * 2/4)){
                stage = 2;
            }
            x += 3;
        }else if(stage == 2){
            if(y + 50 >= height){
                stage = 3;
            }
            y += 3;
        }else if(stage == 3){
            if(x + 50 >= (width * 3/4)){
                stage = 4;
            }
            x += 3;
        }else if(stage == 4){
            if(y <= 0){
                stage = 5;
            }
            y -= 2;
        }else if(stage == 5){
            if(x + 50 >= width){
                stage = 6;
            }
            x += 2;
        }else{
            stage = 0;
            x = 0;
            y = height - 50;
        }
        p.fill(0,0,255);
        p.rect(x,y,50,50);
    }
}

var taskSeven = function(p){
    var width = document.getElementById("view_container").offsetWidth;
    var xBlue = 0;
    var xRed = width ;
    var xBluePositive = true;
    var xRedPositive = false;

    p.setup = function(){
        p.createCanvas(width,400);
    }

    p.draw = function(){
        p.background(0);
        if(xBluePositive == true){
            xBlue += 2;
        }else{
            xBlue -= 2;
        }
        if(xBlue + 50 > width){
            xBluePositive = false;
        }
        if(xBlue - 50 <= 0){
            xBluePositive = true;
        }
        if(xRedPositive == true){
            xRed += 2;
        }else{
            xRed -= 2;
        }
        if(xRed + 50 > width){
            xRedPositive = false;
        }
        if(xRed - 50 <= 0){
            xRedPositive = true;
        }
        p.fill(0,0,255);
        p.rect(xBlue,50,50,50);
        p.fill(255,0,0);
        p.rect(xRed, 200, 50, 50);
    }
}

var taskSix = function (p) {
    var width = document.getElementById("view_container").offsetWidth;
    var height = 400;
    var x = 0;
    var y = 1;
    var xPositive = true;
    var yPositive = true;
    var move = true;
    p.setup = function () {
        p.createCanvas(width, height);
    }

    p.draw = function () {
        p.background(0);
        if (xPositive == true && move == true) {
            x += 4;
            if (x + 50 > width) {
                xPositive = false;
                move = false;
            }
        }
        if (yPositive == true && move == false) {
            y += 4;
            if (y + 50 > height) {
                yPositive = false;
                move = true;
            }
        }
        if (xPositive == false && move == true) {
            x -= 4;
            if (x <= 0) {
                xPositive = true;
                move = false;
            }
        }
        if (yPositive == false && move == false) {
            y -= 4;
            if (y <= 0) {
                yPositive = true;
                move = true;
            }
        }
        p.fill(228, 2, 0);
        p.rect(x, y, 50, 50);

    }
};

var taskFive = function (p) {
    var width = document.getElementById("view_container").offsetWidth;
    var x = 0;
    var xPositive = true;

    p.setup = function () {
        p.createCanvas(width, 400);
    }
    p.draw = function () {
        p.background(0);
        if (x + 50 > width) {
            xPositive = false;
        } else if (x - 50 <= 0) {
            xPositive = true;
        }
        if (xPositive) {
            x += 2;
        } else {
            x -= 2;
        }
        p.fill(228, 2, 0);
        p.rect(x, 200, 50, 50);
    }
};

var taskFour = function (p) {
    var width = document.getElementById("view_container").offsetWidth;

    p.setup = function () {
        p.createCanvas(width, 400);
    }

    p.draw = function () {
        p.background(0);
        p.fill(14, 39, 182);
        p.rect(width / 2 - 100, 50, 200, 200);
        p.fill(228, 2, 0);
        p.circle(width / 2, 150, 120);
        p.fill(243, 234, 51);
        p.triangle(width / 2, 80, width / 2 - 70, 200, width / 2 + 70, 200);
    }
};

var taskThree = function (p) {
    var width = document.getElementById("view_container").offsetWidth;

    p.setup = function () {
        p.createCanvas(width, 400);
    };

    p.draw = function () {
        p.background(0);
        p.fill(243, 234, 51);
        p.triangle(width / 2, 80, width / 2 - 70, 250, width / 2 + 70, 250);
    };
};
var taskTwo = function (p) {
    var width = document.getElementById("view_container").offsetWidth;

    p.setup = function () {
        p.createCanvas(width, 400);
    };

    p.draw = function () {
        p.background(0);
        p.fill(14, 39, 182);
        p.rect(width / 2 - 50, 150, 100);
        p.fill(228, 2, 0);
        p.rect(width / 2 - 50 + 30, 180, 100);
    };
};
var taskOne = function (p) {
    var width = document.getElementById("view_container").offsetWidth;

    p.setup = function () {
        p.createCanvas(width, 400);
    };

    p.draw = function () {
        p.background(0);
        p.fill(14, 39, 182);
        p.circle(width / 2 - 50, 150, 100);
    };
};
