//BACK-END
var encoder = function (inputStr) {
    var newInput = inputStr.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var row = Math.floor(Math.sqrt(newInput.length));
    var column = Math.ceil(Math.sqrt(newInput.length));
    var splitArr = [];
    var resultStr = "";

    for (i = 0; i < newInput.length; i += column) {
        splitArr.push(newInput.substring(i, i + column));
    }

    for (j = 0; j < column; j++) {
        for (i = 0; i < row; i++) {
            resultStr += splitArr[i][j];
        }
    }
    return (resultStr.match(/.{5}/g).join(' ')); //insert a space after every 5th character.
}
//FRONT-END
$(document).ready(function () {
    $("form#input").submit(function (event) {
        event.preventDefault();
        var inputStr = $("#inputStr").val();
        $("#encodedStr").empty();
        $("#encodedStr").append(encoder(inputStr));
    })
})