function titleCase(str) {
return str.split(' ').map(s=> s[0].toUpperCase()+s.slice(1)).reduce((d,f)=>d+' '+f);

}

module.exports = titleCase;
