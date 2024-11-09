$(document).ready(function(){
    $("#smalldiv").scroll(function(){
        console.log("you are scrolling.....");
    })

    $(window).scroll(function(){
        console.log("your window are scrolling.....");
    })

    $(window).resize(function(){
        console.log("your window is resizing");
    })


});