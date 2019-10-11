const minMax =  (array) => {
    let min = array [0];
    let max = array[0];
   let chocolat = [];
   console.log("hi")
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
      chocolat.push(min, max);
    }
    
    console.log(chocolat)
    return chocolat;
  }

  minMax([1,2,3, -2]);

