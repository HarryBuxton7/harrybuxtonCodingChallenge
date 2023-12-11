"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function readfile(filename) {
    var file = (0, fs_1.readFileSync)(filename, "utf-8").trim();
    var namesWithQuotes = file.split(",");
    namesWithQuotes = namesWithQuotes.map(function (e) { return e.slice(1); });
    var names = namesWithQuotes.map(function (e) { return e.slice(0, -1); });
    names.sort();
    var sum = 0;
    for (var i = 0; i < names.length; i++) {
        var alphabeticalValue = calcAlphabeticalValue(names[i]);
        alphabeticalValue *= i + 1;
        sum += alphabeticalValue;
    }
    console.log("answer: " + sum);
}
function calcAlphabeticalValue(name) {
    var alphabeticalValues = [];
    for (var i = 0; i < name.length; i++) {
        alphabeticalValues.push(name.toUpperCase().charCodeAt(i) - 64);
    }
    return alphabeticalValues.reduce(function (acc, value) { return acc + value; });
}
readfile("names.txt");
//# sourceMappingURL=challenge.js.map