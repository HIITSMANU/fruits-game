var play = false
var score  = 0
var trials;
var fruit = ['apple','banana1','mango','pineapple','grapes','apple1','watermelon','cherry1'];
var action;
$(function(){
    $("#start_reset").click(function(){
        if(play == true){
            location.reload();
        }
        else{
            play = true;
            score = 0;
            $("#scorevalue").html(score);
            $("#trials").show();
            trials = 3;
            addhearts();
            $("#Game").hide();
            $("#start_reset").html("Reset game");
            startaction();
            $("#fruits1").mouseover(function(){
                score++;
                $("#scorevalue").html(score);
                document.getElementById("slicesound").play();
                clearInterval(action);
                $("#fruits1").hide("explode",200);
                setTimeout(startaction,200);

            })
       } 

})

function addhearts(){
    $("#trials").empty();
    for(i=0;i<trials;i++)
    {
        $("#trials").append('<img src="images/heart.jpg" class="life">');
    }
}
function startaction(){
    $("#fruits1").show();
    choosefruit();
    $("#fruits1").css({'left':Math.round(570*Math.random()),'top':-70});
    step = 1+Math.round(8*Math.random())
    action = setInterval(function(){
        $("#fruits1").css('top',$("#fruits1").position().top+step)
        if($("#fruits1").position().top > $("#fruits_container").height()){
            if(trials>1){
                $("#fruits1").show();
                choosefruit();
                $("#fruits1").css({'left':Math.round(670*Math.random()),'top':-70});
                step = 1+Math.round(8*Math.random());
                trials--;
                addhearts();

            }else{
                play = false;
                $("#start_reset").html("Start game");
                $("#Game").show();
                $("#Game").html('<p>Game over</p><p>Your score is '+ score + '</p>');
                $("#trials").hide();
                stopaction();

            }
        }
    },100)
}
function choosefruit(){
    $("#fruits1").attr('src','images/'+ fruit[Math.round(8*Math.random())]  +'.png')
}
function stopaction(){
    clearInterval(action);
    $("#fruits1").hide();
}
});