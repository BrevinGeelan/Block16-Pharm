//I have been tasked with making a checkout system for a pharmacy that will take into account a customers' subscription, or coupon discount if they hold them.
//I will also need to ensure that if a customer holds both a sub and coupon, that the coupon is applied after the sub.
//I have been provided these objects and the values inside them which I will use in the functions
//I'm pretty sure I will need to use if/else statments here..
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
//First, I will create the function to calculate timmy's total cost.
function TimmyCost() {
    let Timmytotal = timmy.pricePerRefill * timmy.refills; //First, I will need to generate the initial price of the refills before any discounts
    if (timmy.subscription) { //next, I will use an if statement and the '.' method to determine if timmy does, or does not have a sub, and adjust the price based on that.
        Timmytotal = Timmytotal * 0.75;
    }
    if (timmy.coupon) { //Then, I'm hoping this will be the syntax to determine if a coupon is also held, then take that off the total after the sub.
        Timmytotal = Timmytotal - 10
    }
    else if (timmy.coupon) { // this will be for if the sub is not held, but the coupon is.
        Timmytotal = Timmytotal - 10
    }
    return Timmytotal; //Return the value to log
}
TimmyCost() //Call the function
console.log("Your grand total is $" + TimmyCost()); //Log out the total and test to see if the code works as expected.
//Then will repeat for the next two customers.
function SarahCost () {
    let SarahTotal = sarah.pricePerRefill * sarah.refills;
    if (sarah.subscription) {
        SarahTotal = SarahTotal * 0.75;
    }
    if (sarah.coupon) {
        SarahTotal = SarahTotal - 10;
    }
    else if (sarah.coupon) {
        SarahTotal = SarahTotal - 10;
    }
    return SarahTotal;
}
SarahCost ()
console.log("Your grand total is $" + SarahCost()); //Log this to see if the code works with the subscription now instead of the coupon..
//Now the last function
function RockyCost () {
    let RockyTotal = rocky.pricePerRefill * rocky.refills;
    if (rocky.subscription) {
        RockyTotal = RockyTotal * 0.75;
    }
    if (rocky.coupon) {
        RockyTotal = RockyTotal - 10;
    }
    else if (rocky.coupon) {
        RockyTotal = RockyTotal - 10;
    }
    return RockyTotal;
}
RockyCost()
console.log("Your grand total is $" + RockyCost()); //Test final function to see if code properly take coupon amount out after the sub discount.. Output should be 102.5
//Success!