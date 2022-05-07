$("#options").hide();
$("#question").hide();
$("#score").hide();

var myp5 = new p5(welcomeSketch, 'view_container');
var taskCounter = 0;
var score = 0;

$('body').one( "keypress", function() {
   myp5.remove();
   myp5 = new p5(taskOne, 'view_container');
   $("#options").show();
   $("#question").show();
   $("#score").show();
   taskCounter = taskCounter + 1;
   
   t1();
   
});

var setQuestion = function(taskText, option1, option2,option3,option4){
    $("#task-description").html(taskText);
    $('#option1').text(option1);
    $('#option2').text(option2);
    $('#option3').text(option3);
    $('#option4').text(option4);
}
var disableEventHandler = function(){
    $("#option1").off();
    $("#option2").off();
    $("#option3").off();
    $("#option4").off();
}
var t4 = function(){
    console.log('hello from t4');
}
var t3 = function(){
    console.log("hello from t3");
    myp5.remove();
    myp5 = new p5(taskThree, 'view_container');
    setQuestion("a box is blue, a circle is red, if we want a yellow triangle we type?", "yellow(triange)", "triangle(yellow)", "star(yellow)", "box(red)");
    $('#option1').one("click", function(){
        disableEventHandler();
        t4();
    });
    $('#option2').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE =" + score);
        disableEventHandler();
        t4();
    });
    $('#option3').one("click", function(){
        console.log('incorrect!');
        
        disableEventHandler();
        t4();
    });
    $('#option4').one("click", function(){
        console.log('incorrect!');
        disableEventHandler();
        t4();
    });
}
var t2 = function(){
    myp5.remove();
    myp5 = new p5(taskTwo, 'view_container');
    console.log('hi from t2'); 
    setQuestion("one object draws over the first, how did we end up with this picture?", "blue(box), red(box)", "box(blue), box(yellow)", "box(blue), box(red)", "circle(red), blue(box)");
    $('#option1').one("click", function(){
        console.log('incorrect!');
        disableEventHandler();
        t3();
    });
    $('#option2').one("click", function(){
        console.log('incorrect!');
        disableEventHandler();
        t3();
    });
    $('#option3').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE =" + score);
        disableEventHandler();
        t3();
    });
    $('#option4').one("click", function(){
        console.log('incorrect!');
        disableEventHandler();
        t3();
    });
}

var t1 = function(){
    taskCounter++;

    setQuestion("circle(red) displays a red circle,<br> select the option which will display a blue circle!","circle(blue)","blue(circle)","circle(bleu)", "circle(red)");
    $('#option1').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE =" + score);
        disableEventHandler();
        t2();
    });
    $('#option2').one("click", function(){
        console.log('incorrect!');
        disableEventHandler();
        t2();
    });
    $('#option3').one("click", function(){
        console.log('incorrect');
        disableEventHandler();
        t2();
    });
    $('#option4').one("click", function(){
        console.log('incorrect!');
        disableEventHandler();
        t2();
    });
}




