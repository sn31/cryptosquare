//BACK-END
var removeChar = function (input) {
    var newInput = "";
    for (i = 0; i < input.length; i++) {
        if (input[i].match(/^[a-zA-Z0-9]$/)) {
            newInput += input[i];
            // console.log(newInput[i]);
        }
    }
    return newInput;
}

// var encoder = function (input) {

// }

//FRONT-END
$(document).ready(function () {
    $("form#input").submit(function (event) {
        event.preventDefault();
        var inputStr = $("#inputStr").val();
        // console.log(removeChar(inputStr));
        $("#encodedStr").append(removeChar(inputStr));
    })
})