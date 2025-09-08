const findMaxNumber = (arr) =>{
    // let max = arr[0];
    // arr.forEach(a => (a>max)?max=a: max);
    // return max;
    return Math.max(...arr);
}


module.exports = findMaxNumber;
