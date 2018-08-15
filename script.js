$("#html-field").css("width", `${(($(window).width())/2) - 1}px`);
$("#output-field").css("width", `${(($(window).width())/2) - 1}px`);

function updateOutput() {
    $("#output-field").contents().find("html").html("<html></head><style>"+ ($("#css-field").val()) +"</style></head><body>" + ($("#html-field").val()) + "</body></html>");

    document.getElementById("output-field").contentWindow.eval($("#js-field").val());
}


updateOutput();

fields = Array.from(document.querySelectorAll('.field'));

$("#elements").mousedown(function(event) {
    console.log(event.target.id);
    $(`#${event.target.id}`).toggleClass("active");
    $(`#${event.target.id}-field`).toggleClass("invis");

    numActiveFields = 4 - (Array.from(document.getElementsByClassName("invis")).length);

    for(var i = 0; i < 4; i++) {
        if(!fields[i].classList.contains("invis")) {
            $(`#${fields[i].id}`).css("width", `${String((($(window).width())/numActiveFields)-(1))}px`);
            console.log(`#${fields[i].id}`);
            console.log($(window).width());
        }        
    }
});

/*
$("#html").click(function() {
    $("#html").toggleClass("active");
    $("#html-field").toggleClass("invis");
});

$("#css").click(function() {
    $("#css").toggleClass("active");
    $("#css-field").toggleClass("invis");
});

$("#js").click(function() {
    $("#js").toggleClass("active");
    $("#js-field").toggleClass("invis");
});

$("#output").click(function() {
    $("#output").toggleClass("active");
    $("#output-field").toggleClass("invis");
})
*/

console.log(fields);
$(".fields").click(function(event) {
    if(event.target.classList.contains("field")) {
        for(var i = 0; i < 4; i++) {
            if(fields[i].id !== event.target.id && fields[i].id !== "output-field") {
                fields[i].classList.add("inac");
            }else {
                fields[i].classList.remove("inac"); 
            }
        }
    }
}); 


/*
$(".field").click(function() {
    var fields = document.getElementsByClassName("field");

    for(var i = 0; i < fields.length(); i++) {
        fields[i].toggleClass()
    }
});
*/


$(".field").on("change keyup paste", function(){
    updateOutput();
});