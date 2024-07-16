function findMax(arr) {
    if(arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}
const arr=[12,32,14,36,25];
const emptyArray = [];
console.log(findMax(arr));
console.log(findMax(emptyArray));