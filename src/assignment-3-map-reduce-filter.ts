// map using genrics

function map<U, T>(array: U[], transform: (u: U) => T): T[] {
  const result = new Array<T>();
  array.forEach(item => result.push(transform(item)));
  return result;
}
const square = map([1, 2, 3, 4], item => item * item);
console.log(square);

// filter
function filter<U>(array: U[], predicate: (u: U) => boolean): U[] {
  const result = new Array<U>();
  array.forEach(item => {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

const evenNumber = filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], item => item % 2 === 0);

console.log(evenNumber);

// reduce
function reduce<T, U>(array: T[], accumulator: (accumulated: U, currentItem: T) => U, initialValue: U): U {
  let accumulated: U = initialValue;
  array.forEach(currentItem => {
    accumulated = accumulator(accumulated, currentItem);
  });
  return accumulated;
}

const addition = reduce([1, 2, 3, 4, 5], (accumulated, item) => accumulated + item, 0);
console.log(addition);
