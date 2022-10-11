$(document).ready(function () {
    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        $.post("http://localhost:5000/api", { username: username, password: password },
            function (data) {
                if (data == 'Login Failed') {
                    $('input[type="text"],input[type="password"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
                    alert(data);
                } else if (data == 'Login Successful') {
                    $("form")[0].reset();
                    $('input[type="text"],input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
                    alert(data);
                } else {
                    alert(data);
                }
            });

    });
});