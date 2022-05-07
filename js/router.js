$("#options").hide();
$("#question").hide();
$("#score").hide();
$("#submit-form").hide();
var myp5 = new p5(welcomeSketch, 'view_container');

var score = 0;

$('body').one( "keypress", function() {
   myp5.remove();
   myp5 = new p5(taskOne, 'view_container');
   $("#options").show();
   $("#question").show();
   $("#score").show();
   
   
   submit(); // comment to t1 when finished testing
   
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
var submit = function(){
    console.log("hello from submit");
    myp5.remove();
    myp5 = new p5(submitUsername, 'view_container');
    $("#score-container").hide();
    $("#options").hide();
    $("#question").hide();
    $("#submit-form").show();
};

var t6 = function(){
    console.log("hello from t6");
    myp5.remove();
    myp5 = new p5(taskSix, 'view_container');
    setQuestion("what is the correct order in the repeat function which will play the above shown animation? (hint : it starts in the top left corner)", "repeat[right(), down(), left(), up()]","repeat[right(), up(), left(), up()]","repeat[right(), down(), right(), up()]","repeat[left(), up(), right(), down()]");
    $('#option1').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE = " + score);
        disableEventHandler();
        submit();
    });
    $('#option2').one("click", function(){
        disableEventHandler();
        submit();
    });
    $('#option3').one("click", function(){
        disableEventHandler();
        submit();
    });
    $('#option4').one("click", function(){
        disableEventHandler();
        submit();
    });
}
var t5 = function(){
    console.log("hello from t5");
    myp5.remove();
    myp5 = new p5(taskFive, 'view_container');
    setQuestion("everything inside repeat[functions go here] will be repeated forever,<br> left() moves our box to the left and right() moves it to the right side,<br> what is the correct order?", "repeat[up(), down()]", "repeat[down(), up()]","repeat[right(), left()]", "repeat[move]");
    $('#option1').one("click", function(){
        disableEventHandler();
        t6();
    });
    $('#option2').one("click", function(){
        disableEventHandler();
        t6();
    });
    $('#option3').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE = " + score);
        disableEventHandler();
        t6();
    });
    $('#option4').one("click", function(){
        disableEventHandler();
        t6();
    });

}
var t4 = function(){
    console.log('hello from t4');
    myp5.remove();
    myp5 = new p5(taskFour, 'view_container');
    setQuestion("what is the correct sequence of instructions to generate this image?", "box(blue), triangle(yellow), circle(red)", "box(blue), yellow(triangle), circle(red)", "box(blue), circle(red), triangle(yellow)", "box(blue), crcle(red), triangle(yelow)");
    $('#option1').one("click", function(){
        disableEventHandler();
        t5();
    });
    $('#option2').one("click", function(){
        disableEventHandler();
        t5();
    });
    $('#option3').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE = " + score);
        disableEventHandler();
        t5();
    });
    $('#option4').one("click", function(){
        disableEventHandler();
        t5();
    });
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
        $("#score-holder").html("SCORE = " + score);
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
        $("#score-holder").html("SCORE = " + score);
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

    setQuestion("circle(red) displays a red circle,<br> select the option which will display a blue circle!","circle(blue)","blue(circle)","circle(bleu)", "circle(red)");
    $('#option1').one("click", function(){
        console.log('correct!');
        score += 100;
        $("#score-holder").html("SCORE = " + score);
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




