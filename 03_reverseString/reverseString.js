const reverseString = function(str) {
    // let revStr = ""
    // for(let i=str.length-1; i>=0; i--){
    //     revStr = revStr + str[i];
    // }

    // return revStr;

    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
