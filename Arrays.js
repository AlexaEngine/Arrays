// Add missing import statements
const sum = function (arr) {
    return arr.reduce((acc, item) => acc + item, 0);
}
{  
const calculateSum = function () {
    const input = document.getElementById("inputArray").value;
    const arr = input.split(",").map(Number);
    
    // Handle case when input array is empty
    if (arr.length === 0) {
        document.getElementById("sumResult").textContent = "Input array is empty";
        return;
    }
    
    const sumResult = sum(arr);
    document.getElementById("sumResult").textContent = sumResult;
}
        document.getElementById("sumResult").textContent = sumResult;
}
