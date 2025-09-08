function reverseString(str) {
    let strr='';
    for(let i=str.length-1;i>=0;i--){
strr+=str[i];
    }
    return strr
}

module.exports = reverseString;
