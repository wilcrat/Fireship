//method 1
const obj = {
  rabbit: "Mickey",
  year: 1998,
};
//or
obj["rabbit"] = "Wil";

console.log(obj["rabbit"]);

//method 2
const obje = new Object();

obje.Kitten = "Bii";
console.log(obje.Kitten);

//method 3
//mostly used when you want to inherit the properties of an existing object
//or in other words use the existing object as the prototype
const organism = {
  dna: Math.random(),
};

const ob = Object.create(organism);

console.log(ob);
console.log(ob.dna);

console.log(Object.getPrototypeOf(ob));

//another one
const spider = "🕷️";
const legs = 8;

const objec = { spider, legs };

console.log(objec.legs);
