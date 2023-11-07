//Using output inside lines of code
function getMilk(money) {
    var numberOfBottles = Math.floor(money/1.5);
    console.log("buy " + numberOfBottles + " bottles of milk");
    return money % 1.5; //Remainder of this division
    return calcChange (money, costPerBottle);

}

var change = getMilk(4);
console.log(change);

function clacBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}
console.log("Hello master, here is your " + getMilk(10, 3) + " change.");


