/* eslint-disable no-console */
/* eslint-disable strict */

function roundAvg(array, decimal) {
  let total = array.reduce((acc, item) => {
    return acc + item;
  },0);
  return Math.round((total/(array.length)) * decimal)/decimal;
}



module.exports = roundAvg;