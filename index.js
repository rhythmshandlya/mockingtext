$("#out").css("width", $("#in").css("width"));
$("#out").css("height", $("#in").css("height"));

$("#bt-1").click(function () { 
    var x = document.getElementById("in").value;
    $("#out").html(mock(x));
});

$("#bt-2").click(function () { 
    $("#copied").css("opacity", "1");
    $("#out").select();
    document.execCommand("Copy");
    setTimeout(() => {
    $("#copied").css("opacity", "0");
    }, 500);
});

$(window).resize(function(){
    $("#out").css("width", $("#in").css("width"));
    $("#out").css("height",  $("#in").css("height"));
});
function mock(str) {
    let count1 = 0, count2 = 0;
    for (let i = 0; i < str.length; i++){
        let x = Math.floor(Math.random() * 2);
        if (count1 >= 2) { x = 0; count1 = 0;}  
        if (count2 >= 2) { x = 1; count2 = 0;}
        if ( x== 1) {
            str = str.substring(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
            count1++;
        }
        else {
            count2++;
        }
    }
    return str;
}
