
/*

*/


// tab 1

console.log(color);

var color = "blue";

console.log(color);



//tab 2

var color;

console.log(color);

color = "blue";

console.log(color);



// tab 1

function getTotal() {
    console.log(multiplier);
    console.log(total);

    let total = 0;

    for (var i = 0; i < 10; i++) {

        let valueToAdd = i;
        var multiplier = 2;
        total += valueToAdd * multiplier;
    }

    return total;
}

getTotal();
