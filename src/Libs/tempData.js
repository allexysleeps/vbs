export const generateRandomArray = (length) => {
  let i = 0;
  const lookup = {};
  while (i < length) {
    const r = Math.floor(Math.random() * length);
    if (r in lookup) continue;
    lookup[r] = i++
  }
  const arr = [];
  for (let key in lookup) {
    arr.push(lookup[key]);
  }
  return arr;
};

const spliceWay = (length) => {
  console.time(`splice way length: ${length}`);
  const getRandomIndex = (min, max) => {
    return max <= min ? min : Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const naturalArray = (() => {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
    return array;
  })();
  const randomArray = Array.from({length}, () => {
    const randomIndex = getRandomIndex(0, naturalArray.length - 1);
    const randomNumber = naturalArray[randomIndex];
    naturalArray.splice(randomIndex, 1);
    return randomNumber;
  });
  console.timeEnd(`splice way length: ${length}`);
};

const uncontrolledWay = (length) => {
  console.time(`random way length: ${length}`);
  let i = 0;
  const lookup = {};
  while (i < length) {
    const r = Math.floor(Math.random() * length);
    if (r in lookup) continue;
    lookup[r] = i++
  }
  const arr = [];
  for (let key in lookup) {
    arr.push(lookup[key]);
  }
  console.timeEnd(`random way length: ${length}`);
};

// generateRandomArray(10);
// uncontrolledWay(10);
// generateRandomArray(100);
// uncontrolledWay(100);
// generateRandomArray(1000);
// uncontrolledWay(1000);
// generateRandomArray(10000);
// uncontrolledWay(10000);
// generateRandomArray(100000);
// uncontrolledWay(100000);
