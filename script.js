console.log("This is coming from script.js");
$(document).ready(function () {
    $("#send-btn").on("click", function () {
        $value = $("#data").val();
         $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
                $(".form").append($msg);
                $("#data").val('');
    });
})

