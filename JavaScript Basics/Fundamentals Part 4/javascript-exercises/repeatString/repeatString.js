const repeatString = function(str, no) {
    let result = ''
    if(no < 0) return 'ERROR'
    for(let i=0;i<no;i++)
    result += str
    return result
};

module.exports = repeatString;
