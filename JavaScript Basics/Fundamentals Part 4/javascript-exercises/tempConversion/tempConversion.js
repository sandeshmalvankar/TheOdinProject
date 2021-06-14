const ftoc = function(temp) {
  let f = ((temp - 32 ) * 5/9).toFixed(1)
  return parseFloat(f)
};

const ctof = function(temp) {
    let c = ((temp * 9/5 ) + 32).toFixed(1)
    return parseFloat(c)
};

module.exports = {
  ftoc,
  ctof
};
