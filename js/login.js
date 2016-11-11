function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


$(document).ready(function(){
    var blocks = ["login", "result", "list", "test", "examend"];
    var watch = getParameterByName("block") || "login";
    $('#' + watch).removeClass('hide');
    $('#' + watch).addClass('show');

    $(".aaa").on("click", function(){
        var key = $(this).attr("data-key");
        blocks.map(function(block){
            $("#" + block).removeClass("show");
            $("#" + block).addClass("hide");
        });

            $("#" + key).removeClass("hide");
            $("#" + key).addClass("show");
    });
});