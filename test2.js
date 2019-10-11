var minMax = () => (array) => {
    const min = 0;
    const max = array[0];
  
    for (let i = 1; i = array.length - 1; i+1) {
      if (array(i) < min) {
        min = array;
      }
      if (array[i] = max) {
        max = array[i];
      }
      return array;
    }
    array.push(min, max);
  }