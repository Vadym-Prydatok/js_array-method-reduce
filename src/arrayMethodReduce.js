'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = (arguments.length < 2) ? this[0] : initialValue;
    const startValue = (arguments.length < 2) ? 1 : 0;

    for (let i = startValue; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
