const siege = () => {
    const siege = [];
    for (let i = 1; i <= 26 ; i++) {
    for (let j = 1; j <= 100 ; j++) {
        siege.push(`${i} - ${j}`);
    }
    }
    return siege;
}

console.log(siege())
