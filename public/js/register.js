$(document).ready(function () {
    $("form").hide();
    var button = $("<input>").attr({
        type: "button",
        class: "btn btn-default",
        value: "click here to register"
    }); // end atrr
    $(".col-2-3").append(button);
    $(".col-2-3 :button").click(function () {        
        $(this).hide();
        $("form").fadeIn(400).find(":text:first").focus(slow);
    }); // end click
    $("#reg-form").validate({
        rules: {
            email: {
            required: true,
            email: true
            }
        }, // end rules
        messages: {
            email: {
            required: "field cannot be left blank",
            email: "please enter valid email address"
            }
        }, // end messages
        errorPlacement: function(error, element) { 
            if ( element.is(":radio") || element.is(":checkbox")) {
                error.appendTo( element.parent()); 
            } else {
                error.insertAfter(element);
            } 
        } 
    }); // end validate
}); //end of ready