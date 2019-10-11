function theater() {
    let theater = []
    for (let i = 0; i < 26; i++){
      for (let j = 0; j < 100; j++){
      theater.push(i + '-' + j)
      }
    } 
    return theater
  }
  
  theater()