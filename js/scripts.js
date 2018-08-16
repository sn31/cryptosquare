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

var matrixFinder = function (newInput) {
    //Find rows and columns
    var row = Math.floor(Math.sqrt(newInput.length));

    if (Math.pow(row, 2) > newInput.length) {
        var column = row + 1;
    }
    else {
        var column = row;
    }
    // Split input to smaller arrays
    var splitArr = [];

    for (i = 0; i < newInput.length; i += column) {
        splitArr.push(newInput.substring(i, i + column));
    }
    console.log(splitArr)
    //Get 1st colum:
    var resultStr =[];
    for (j=0;j<=row;j++) {
        for(i=0;i<column;i++) {
            if (typeof(splitArr[i].charAt(j)) === "undefined") {
                resultStr.pop();
            }
            else {
                resultStr.push(splitArr[i].charAt(j));
            }
        } 
    }
    console.log(resultStr);
    console.log(resultStr.join("").split(0,5)); 
    return resultStr;
}

// var createTable = function (splitArr) {
//     var cryotoSquare = new Array(row);
//     for (i=0;i<row;i++) {
//         var row[i] = splitArr[i];
//     }
// }
//FRONT-END
$(document).ready(function () {
    $("form#input").submit(function (event) {
        event.preventDefault();
        var inputStr = $("#inputStr").val();
        console.log(matrixFinder(removeChar(inputStr)));
        $("encoderStr").empty();
        $("#encodedStr").append(removeChar(inputStr));
    })
})