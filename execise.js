

let m = require('./exercise')
let filter = m.filter([1,2,3])
// call filter (with callback function) to filter out all the numbers not equal to 2
filter(function (elem) {
  return elem !== 2; // check if element is not equal to 2
}, function (currentArray) {
  console.log(currentArray); // prints [1, 3]
});

console.log(arrayFilterer(originalArray))



function arrayFilterer (filterCriteria,callback) {
    let currentArray= originalArray;-
    filterCriteria(originalArray);
    
    return this;
}




