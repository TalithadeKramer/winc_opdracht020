/*
const age = 22;
const isFemale = true;
const driverStatus = "bob";
const naam = "Sarah";
const totalAmount = 27;
*/

const age = 16;
const isFemale = false;
const driverStatus = 808;
const naam = "Truus"
const totalAmount = 57;


if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (age <= 18 && age >= 25) {
    console.log("Je krijgt 50% korting!");
}

if (naam === "Sarah" || naam === "Bram") {
    console.log("Je krijgt een gratis biertje");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Gefeliciteerd, je krijgt gratis (vega)bitterballen!");
}
else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Gefeliciteerd, je krijgt gratis een portie nachos!");
}
else if (totalAmount >= 100) {
    console.log("Gefeliciteerd, je krijgt gratis een fles champagne");
}