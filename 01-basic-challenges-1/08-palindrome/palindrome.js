function isPalindrome(str) {
    let strr='';
    str = str.toLowerCase().replaceAll(',', '').replaceAll(' ', '');
    for(let i=str.length-1;i>=0;i--){
strr+=str[i];
    }
    console.log('str =' +str)
    console.log('strr =' +strr)
    return str === strr;
}

module.exports = isPalindrome;
