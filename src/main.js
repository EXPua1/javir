var map = function (arr, callback) {
  let newArray = [];
  for (const item of arr) {
    newArray.push(callback(item));
  }
  return newArray;
};

function fn(num) {
  return num + 1;
}

const array = [1, 2, 3];

console.log(map(array, fn));
