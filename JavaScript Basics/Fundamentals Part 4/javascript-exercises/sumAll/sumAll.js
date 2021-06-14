const sumAll = function(no1, no2) {
    if(no1 < 0 || no2 < 0 ) return 'ERROR'
    if( isNaN(no2) ) return 'ERROR'
    if( no2 instanceof String) return 'ERROR'
    let min = no1 < no2 ? no1 : no2
    let max = no1 > no2 ? no1 : no2
    let sum = 0
    for(let i=min;i<=max;i++)
        sum += i
    return sum
};

module.exports = sumAll;
