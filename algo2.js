/* algo2 */


const array = [4, 6, 35, -65, -9, 0, 67];

const minMax = () => array => {
  let min = array[0];
  let max = array[0];
  const minMaxArr = [min, max]

  for (let i = 0; i = array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  minMaxArr[0] = min;
  minMaxArr[1] = max
  return (minMaxArr)
}

console.log(minMax(array))