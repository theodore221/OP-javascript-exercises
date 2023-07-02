const removeFromArray = function(arr, ...nums) {

    const newArray = [];
    arr.forEach(element => {
        if(!nums.includes(element)){
            newArray.push(element)
        } 
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
