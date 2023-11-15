
function stringLength(str) {

    const len = str.length;

    if(len==0) {
        throw new Error('String length should be atleast 1!')
    }
    if(len>10) {
        throw new Error('String length should not be greater than 10!')
    }
    
    return len;
}

module.exports = stringLength;