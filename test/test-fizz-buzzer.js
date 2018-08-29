// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return \'fizz-buzz\' if number is divisible by 15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz'}
    ];
    // for each input num,   `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });


  // it('should return "fizz-buzz" for multiples of 15', function() {
  //   [15, 30, 45].forEach(function(input) {
  //     expect(fizzBuzzer(input)).to.equal('fizz-buzz');
  //   });
  // });

  it('should return \'buzz\' if number is divisible by 5', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'},
      {num: 20, expected: 'buzz'}
    ];
    // for each input num,   `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return \'fizz\' if number is divisible by 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 6, expected: 'fizz'},
      {num: 9, expected: 'fizz'}
    ];
    // for each input num,   `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return the input number if number is not divisible by 15, 5, or 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 4, expected: 4},
      {num: 7, expected: 7},
      {num: 11, expected: 11}
    ];
    // for each input num,   `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if input is not a number NaN', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a','1', false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});