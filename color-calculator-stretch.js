const prompt = require('prompt-sync')({sigint: true});
//let allColors = "red yellow blue purple orange green"
let colorDecision = prompt("Please choose one or two colors: red, blue, yellow, purple, orange, green: ");
console.log(`You chose: ${colorDecision}.`)
if (colorDecision.includes("red blue")){
console.log("Your combined color is Purple.");
}else if (colorDecision.includes("blue red")){
console.log("Your color is Purple.");
}else if (colorDecision.includes("yellow blue")){
console.log("Your combined color is Green.");
}else if (colorDecision.includes("blue yellow")){
console.log("Your combined color is Green.");
}else if (colorDecision.includes("red yellow")){
console.log("Your combined color is Orange.");
}else if (colorDecision.includes("yellow red")){
console.log("Your combined color is Orange.");
// Error checks for invalid color combination
}else if (colorDecision.includes("yellow green")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("yellow purple")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("yellow orange")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("blue green")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("blue purple")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("blue orange")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("red green")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("red purple")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("red orange")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("green red")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("green blue")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("green yellow")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("purple yellow")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("purple yellow")){
  console.log("Invalid color combination.");
}else if (colorDecision.includes("p yellow")){
  console.log("Invalid color combination.");
// End invalid color choice error check
}else if (colorDecision.includes("purple")){
console.log("Your combined colors are Red and Blue");
}else if (colorDecision.includes("orange")){
console.log("Your combined colors are Red and Yellow");
}else if (colorDecision.includes("green")){
console.log("Your combined colors are Blue and Yellow");
} else if (colorDecision !== typeof "string"){
  console.log("Sorry, please choose from one of the available colors.")
}