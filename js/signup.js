$(document).ready(function () {
    // predefine elements 
    $("#signupBtnChange").css('border-bottom', '2px solid black')
    $("#loginSection").css('display', 'none')


    $('#signupBtnChange').click(function (e) {
        e.preventDefault();
        $("#signupBtnChange").css('border-bottom', '2px solid black')
        $("#LogInBtnChange").css('border-bottom', 'none')

        $("#signupSection").css('display', 'block')
        $("#loginSection").css('display', 'none')
    });

    $('#LogInBtnChange').click(function (e) {
        e.preventDefault();
        $("#LogInBtnChange").css('border-bottom', '2px solid black')
        $("#signupBtnChange").css('border-bottom', 'none')

        $("#loginSection").css('display', 'block')
        $("#signupSection").css('display', 'none')
    });

    $('#signUpForm').submit(function (e) {
        e.preventDefault();

        console.log($('#signUpForm').serialize())
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8080/adduser",
            data:
            {
                FirstName: $('#firstName').val(),
                LastName: $('#lastName').val(),
                Password: $('#password').val(),
                Gender: $('#gender').val(),
                Address: $('#address').val(),
                Email: $('#emailid').val(),
                mobileNumber: $('#mobileNumber').val()
            }
            ,
            // data: $('#signUpForm').serialize(),
            success: function (response) {
                // console.log(data);
            }
        });
    });
});

