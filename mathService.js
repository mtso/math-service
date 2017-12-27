module.exports = {
  sum: function() {
    return Array.prototype.slice.call(arguments).reduce((a, b) => a + b)
  },
  difference: function() {
    return Array.prototype.slice.call(arguments).reduce((a, b) => a - b)
  },
  product: function() {
    return Array.prototype.slice.call(arguments).reduce((a, b) => a * b)
  },
};
