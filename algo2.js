let array = [4, 6, 35, -65, -9, 0, 67]
function minMax() {
    let min = 0;
    let max = 0;
  
    for (let i = 0; i = array.length; i+1) {
      if (array[i] <= min) {
        min = array[i];
      }
      
      else if (array[i] >= max) {
        max = array[i];
      }
      
      return array;
    }
    array.push(min, max);
    
}
console.log(minMax(array))