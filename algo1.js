
/*algo1*/

const listOfSeats = () => {
  const seatArray = []
  for (let i = 1; i <= 26; i++) {
    for (let j = 1; j <= 100; j++) {
      seatArray.push(`${i}-${j}`)
    }
  }
  return (seatArray)
}

console.log(listOfSeats())
