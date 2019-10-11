
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
    } else if (howManyDrinks > 3 && warnings === 1) {
        confirm("That's a lot of drinks, don't you think ?")
        document.getElementById('drink').style.transform = 'translate(3px, 9px)';
        warnings++;
    } else if (howManyDrinks > 4 && warnings === 2) {
        document.getElementById('body').style.filter = 'blur(2px)';
        document.getElementById('drink').style.transform = 'translate(38px, 94px)';
        document.getElementById('book').style.transform = 'rotate(-6deg)';
        confirm("Arre yuo shure ? Tihngs are strating to blur")
        warnings++;
    } else if (howManyDrinks > 5 && warnings === 3) {
        document.getElementById('body').style.filter = 'blur(4px)';
        document.getElementById('drink').style.transform = 'translate(-53px, 69px)';
        document.getElementById('book').style.transform = 'rotate(68deg)';
        confirm("Puor me aontehr oen !")
        warnings++;
    } else if (howManyDrinks > 6 && warnings === 4) {
        document.getElementById('body').style.filter = 'blur(8px)';
        document.getElementById('elephant').style.display = 'inline';
        document.getElementById('elephant').style.transform = 'translateX(-500px)';
        document.getElementById('drink').style.transform = 'translate(22px, 133px)';
        document.getElementById('bookIndex').style.transform = 'rotate(-43deg)';
        confirm("So tsirhty...")
        warnings++;
    } else if (howManyDrinks > 7 && warnings === 5) {
        document.getElementById('body').style.filter = 'opacity(0)';
        confirm("ZzZ...")
        warnings++;
        timeToStop = true;
    }
});