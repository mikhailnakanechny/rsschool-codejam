function make() {
  const array = [].concat(Array.prototype.slice.call(arguments));

  return function solution() {
    if (typeof arguments[0] === 'function') {
      return array.reduce(arguments[0]);
    }
    array.push(...arguments);
    return solution;
  };
}
