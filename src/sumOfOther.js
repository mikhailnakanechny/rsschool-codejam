module.exports = function sumOfOther(array) {
  const arrOfSum = [];
  for (let i = 0; i < array.length; i += 1) {
    arrOfSum.push(array.filter(e => e !== array[i]).reduce((sum, current) => sum + current));
  }
  return arrOfSum;
};
