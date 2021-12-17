function sendContact() {
    var valid;
    valid = validateContact();


    $('#mail-stauts').html('<p class="text-center text-success"><strong>Please wait...</strong></p>');

    if(valid) {
        jQuery.ajax({
            url: "mail.php",
            type: "POST",
            data: 'name='+$("#name").val()+'&email='+$("email").val()+'&phone='+$("#phone").val()+'&message='+$("message").val(),

            success: function(data) {
                $("#mail-status").html(data);
                dataclear();

            },
            error:function(data) {
                $("#mail-status").html(data);
            }
        });
    }
}

function dataclear() {
    $("#name").val('');
    $("#email").val('');
    $("#phone").val('');
    $("#message").val('');
}

function validateContact(){
    var valid = true;

    if(!$("#name").val()) {
        $("#name-info").html("required");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val()) {
        $("#email-info").html("required");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email-info").html("invalid");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#phone").val()) {
        $("#phone-info").html("required");
        $("#phone").css('background-color', '#FFFFDF');
        valid = false;
    }
    if(!$("#phone").val().match(/^[0-9]{10}$/)) {
        $("#phone-info").html("invalid");
        $("#phone").css('background-color', '#FFFFDF');
        valid = false;
    }

    return valid;
}