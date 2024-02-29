function mergeSort(array) {
    if (array.length > 1) {
        const mid = Math.floor(array.length / 2);
        const leftArray = array.slice(0, mid);
        const rightArray = array.slice(mid);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
    }
    else return array;
}
function merge(leftArray, rightArray) {
    const newArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            newArray.push(leftArray.shift());
        }
        else newArray.push(rightArray.shift());


    }
    return newArray.concat(leftArray).concat(rightArray);
}

console.log(mergeSort([73, 139, 15, 128, 90, 80, 55, 83, 133, 59, 105, 112, 31, 130, 92]));