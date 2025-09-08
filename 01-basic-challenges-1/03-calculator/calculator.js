function calculator(n1, n2, oper) {
    switch(oper){
    case '+':
        return n1+n2;
        break;
    case '-':
        return n1-n2;
        break;
    case '*':
        return n1*n2;
        break;
    case '/':
        return n1/n2;
        break;
    default:
        return 0;
    }


}

module.exports = calculator;
