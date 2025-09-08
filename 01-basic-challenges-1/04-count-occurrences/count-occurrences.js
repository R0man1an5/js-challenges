function countOccurrences(str, chr) {
    
    
    //let count =0;
    // for(let i=0;i<str.length;i++){
    //     if(str[i]===chr)
    //         count++;
    // }
    
    return str.split(chr).length -1;
}

module.exports = countOccurrences;
