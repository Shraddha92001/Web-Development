$(document).ready(function(){
    $('#sname, #sclass, #scountry').focus(function(){
        $(this).css("background-color", "pink ")
    })

    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css("background-color", '');
    })

    $('#scountry').change(function(){
        $(this).css("background-color", 'blue');
    })

    $('#scountry').select(function(){
        $(this).css("background-color", 'red');
    })

    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css("background-color", '');
    })
})