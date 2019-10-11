const minMax = () => {
  const minMax = [];
  let min = 100;
  let max = 0;
  
    for (let i = 0; i <= array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }
    minMax.push(`${min}, ${max}`);
  }
  return minMax;