//declaration
function makeBread(qty) {
  const bread = "🍞".repeat(qty);
  //return value
  return bread;
}
const loaves = makeBread(7);
//task
console.log(loaves);

//function expression
const makeBeer = function (qty) {
  return "🥫".repeat(qty);
};
const beers = makeBeer(3);

console.log(beers);

//positional
function makeBreakfast(main, side, drink) {
  return "Breakfast includes: " + main + ", " + side + " and " + drink;
}
const breakfast = makeBreakfast("🍟", "🥙", "🥃");
console.log(breakfast);
