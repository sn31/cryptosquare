//BACK-END

var removeChar = function (input) {
    var newInput = "";
    for (i = 0; i < input.length; i++) {
        if (input[i].match(/^[a-zA-Z0-9]$/)) {
            newInput += input[i].toLowerCase();
            // console.log(newInput[i]);
        }
    }
    return newInput;
}

var encoder = function (newInput) {

    var row = Math.ceil(Math.sqrt(newInput.length));

    if (Math.pow(row,2) > newInput.length) {
        var column = row -1;
    }
    else {
        var column = row;
    }
    
    return [row,column];
}

//FRONT-END
$(document).ready(function () {
    $("form#input").submit(function (event) {
        event.preventDefault();
        var inputStr = $("#inputStr").val();
        console.log(encoder(removeChar(inputStr)));
        $("encoderStr").empty();
        $("#encodedStr").append(removeChar(inputStr));
    })
})