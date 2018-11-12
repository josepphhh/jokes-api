$(document).ready(function () {
    var url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";// här lägger du url till api
   

    $.getJSON(url, function (data) {
        console.log(data);
        $("#punch").text('"' + data.punchline + '"');
        $("#joke").text("-" + data.setup);

    });

    $("#newjoke").click(function () {
        getJoke();
    });
     // Stänger klick-funktionen på #newjoke
    function getJoke() {
        var url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";// här lägger du url till api
        
    
        $.getJSON(url, function (data) {
            console.log(data);
            $("#punch").text('"' + data.punchline + '"');
            $("#joke").text("-" + data.setup);
    
        });


    };

});   