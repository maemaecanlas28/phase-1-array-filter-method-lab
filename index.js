// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, string) {
    return array.filter(function (name) {
        return string.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch (array, string) {
    return array.filter(function (name) {
        return name.startsWith(string);
    })
}

const cuteDriver = [
    {
        name: "Cocoa Puffs",
        hometown: "Salinas"
    },
    {   name: "Honey Puffs",
        hometown: "nonexistent"
    }
]

function matchName (array, string) {
    return array.filter(function (driverObj) {
        return driverObj.name === string;
    })
}