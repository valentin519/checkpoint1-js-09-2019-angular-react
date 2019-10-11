const minMax = (array) => {
    let min = 0;
    let max = 0;
  
    for (let i = 1; i = array.length - 1; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      else if (array[i] > max) {
        max = array[i];
      }
    }
    array.push(min, max);
    return array;
  }

console.log(minMax([4, 6, 35, -65, -9, 0, 67]));
console.log(minMax([-30, 5, 43, 108, -5, -7, 89]));
console.log(minMax([56, 7, 63, 9, 7, 12, 85]));
