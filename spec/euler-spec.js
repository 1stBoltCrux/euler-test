import { generateArray, findThreeFiveMult } from "./../src/euler.js"

describe( 'generateArray', function() {
  it('should return an array of numbers from 0 to 1000', function(){
    expect(generateArray()).toContain(1000);
  });
});

// describe('findThreeFiveMult', function() {
//   it('should return an array that only includes multiples of 3 or 5', function(){
//     console.log(findThreeFiveMult(generateArray()));
//     expect(findThreeFiveMult(generateArray())).toContain(999);
//   });
// });

describe('findThreeFiveMult', function() {
  it('should return an array that only includes multiples of 3 or 5', function(){
    console.log(findThreeFiveMult(generateArray()));
    expect(findThreeFiveMult(generateArray())).toEqual(234168);
  });
});
