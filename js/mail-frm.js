// Mail form with input validation and captcha integration

function sendContact()
{
    // We are passing the mail script name/path from myCaptcha.js on success of challenge
    var mailscript = localStorage.getItem('mailerScript');
    var valid;
    valid = validateContact();
    if(valid) {
        $.ajax({
            url : "./"+mailscript+"",
            data:'contact-fname='+$("#contact-fname").val()+'&msgmail='+
            $("#msgmail").val()+'&mstel='+
            $("#mstel").val()+'&contact-message='+
            $("#contact-message").val()+'&contact-company='+
            $("#contact-company").val()+'&request_cv='+
            $("#request_cv").val(),
            type: "POST",
            success: function (data)
            {                
                $("#contactFRM").trigger("reset");
                var html = '<span style="color:#2098d1; font-size:1.5em;">Thank you for your message, I will reply to you soon!</span>'
                $("#mail-status").append(html);

                $("#contact-fname").blur();
                $("#contact-company").blur();
                $("#msgmail").blur();
                $("#mstel").blur();
                $("#contact-message").blur();

                $("#fname-label").text("");
                $("#email-label").text("");
                $("#company-label").text("");
                $("#phone-label").text("");
                $("#message-label").text("");

            },
            error: function ()
            {
                var html = '<span style="color:red; font-size:1.5em;">Something went wrong, please check the form and try again.</span>'
                $("#mail-status").append(html);

                $("#contact-fname").blur();
                $("#contact-company").blur();
                $("#msgmail").blur();
                $("#mstel").blur();
                $("#contact-message").blur();
                
            }
        });
    }
}

// validation

function validateContact() {
    var valid = true;	
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if (!$("#contact-fname").val())
    {
        $("#fname-label").text("Please enter your name");
        $("#contact-fname").css('background-color','#FFFFDF');
        valid = false;
    }
    if (!$("#msgmail").val())
    {
        $("#email-label").text("Please enter your email");
        $("#msgmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email-label").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {        
        $("#company-label").text("Please enter a valid email");
        $("#msgmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#contact-company").val()) {
        $("#company-label").text("Please enter your company name");
        $("#contact-company").css('background-color','#FFFFDF');
        valid = false;
    }
    if (!$("#mstel").val())
    {
        $("#phone-label").text("Please enter your phone number");        
        $("#mstel").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#mstel").val().match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {  
        $("#phone-label").text("Please enter a valid phone number");
        $("#mstel").css('background-color','#FFFFDF');
        valid = false;
    }
    if (!$("#contact-message").val())
    {
        $("#message-label").text("Please enter a message");
        $("#contact-message").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}