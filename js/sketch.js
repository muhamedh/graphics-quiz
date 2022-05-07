

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
