// Task 1:
// 1. Miles-to-Kilometers Converter (Operators):
// •Create a variable named milesand assign a numeric value representing distance in miles.
// •Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying milesby 1.60934.
// •Store the converted distance in kilometers in a variable named kilometers.
// •Use console.logtoprint a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles
// Answer:
const miles = 130;
// (1 mile = 1.60934 kilometers)
const kilometers = miles * 1.60934;
// Use console.log to print the message
console.log(`The distance of ${miles} miles is equal to ${kilometers.toFixed(4)} kilometers.`);
export {};
