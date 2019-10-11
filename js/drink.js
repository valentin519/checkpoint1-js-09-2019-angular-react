
const glass = document.getElementById('drink');
const glassFull = `<img src="image/whisky.png" title="drink me !" alt="a whisky glass" class="whisky" />`
const glassEmpty = `<img src="image/empty_whisky.png" title="fill me !" alt="an empty whisky glass" class="whisky" />`

let isDrunk = false;
let howManyDrinks = 0;
let warnings = 0;
let timeToStop = false;

glass.addEventListener('click', () => {
    if (isDrunk === true && timeToStop === false) {
        glass.innerHTML = glassFull; 
        isDrunk = false;
    } else {
        glass.innerHTML = glassEmpty; 
        isDrunk = true;
        howManyDrinks++;
    };

    if (howManyDrinks > 2 && warnings === 0) {
        confirm("Boy, you must be thirsty !")
        warnings++;
    } else if (howManyDrinks > 4 && warnings === 1) {
        confirm("That's a lot of drinks, don't you think ?")
        warnings++;
    } else if (howManyDrinks > 5 && warnings === 2) {
        document.getElementById('body').style.filter = 'blur(2px)';
        confirm("Arre yuo shure ? Tihngs are strating to blur")
        warnings++;
    } else if (howManyDrinks > 6 && warnings === 3) {
        document.getElementById('body').style.filter = 'blur(4px)';
        confirm("Puor me aontehr oen !")
        warnings++;
    } else if (howManyDrinks > 7 && warnings === 4) {
        document.getElementById('body').style.filter = 'blur(8px)';
        confirm("So tsirhty...")
        warnings++;
    } else if (howManyDrinks > 8 && warnings === 5) {
        document.getElementById('body').style.filter = 'opacity(0)';
        confirm("ZzZ...")
        warnings++;
        timeToStop = true;
    }
});