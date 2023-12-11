import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  let namesWithQuotes: string[] = file.split(",");
  namesWithQuotes = namesWithQuotes.map((e) => e.slice(1));
  let names: string[] = namesWithQuotes.map((e) => e.slice(0, -1));
  names.sort();

  let sum = 0;
  for (let i = 0; i < names.length; i++) {
    let alphabeticalValue = calcAlphabeticalValue(names[i]);
    alphabeticalValue *= i + 1;
    sum += alphabeticalValue;
  }
  console.log("answer: " + sum)
}

function calcAlphabeticalValue(name: string) {
  let alphabeticalValues: number[] = [];
  for (let i = 0; i < name.length; i++) {
    alphabeticalValues.push(name.toUpperCase().charCodeAt(i) - 64);
  }
  return alphabeticalValues.reduce((acc, value) => acc + value);
}

readfile("names.txt");
