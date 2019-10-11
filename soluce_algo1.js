const Arr = () => {
    const Arr = [];
    for (let i=0; i<26; i++){
        const column = i+1;
        const tab = [];
        for (let j=0; j<100 ; j++){
            tab.push(`${column}-${j+1}`)
        }
        Arr.push(tab);
    }
    return Arr;
}
