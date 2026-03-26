console.log("Hello World");
console.log("Hello");

const salaryRateHourUsd = 80;
const availableHours = (5 * 5) +  (4 * 5);
const projectHours = 40;
const costOfWorks = salaryRateHourUsd * availableHours;

console.log('Can I work?: ' + (availableHours > projectHours));
console.log('Cost of works: ' + costOfWorks + '$');
