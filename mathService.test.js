/*global describe b:true */
/*global test b:true */
/*global expect b:true */

const mathService = require('./mathService')

describe('sum', () => {
  const sum = mathService.sum;

  test('should return sum of integers', (done) => {
    expect(sum(1, 2, 3)).toBe(6);
    done();
  });

  test('should return sum of all numbers including negatives', (done) => {
    expect(sum(1, -2, 3)).toBe(2);
    done();
  });

  test('should return sum of all numbers including floats', (done) => {
    expect(sum(1, 2.5, 3)).toBe(6.5);
    done();
  });
});

describe('difference', () => {
  const difference = mathService.difference;

  test('should return difference of integers', (done) => {
    expect(difference(1, 2, 3)).toBe(-4);
    done();
  });

  test('should return difference of all numbers including negatives', (done) => {
    expect(difference(1, -2, 3)).toBe(0);
    done();
  });

  test('should return product of all numbers including floats', (done) => {
    expect(difference(1, 2.5, 3)).toBe(-4.5);
    done();
  });
});

describe('product', () => {
  const product = mathService.product;

  test('should return product of integers', (done) => {
    expect(product(1, 2, 3)).toBe(6);
    done();
  });

  test('should return product of all numbers including negatives', (done) => {
    expect(product(1, -2, 3)).toBe(-6);
    done();
  });

  test('should return product of all numbers including floats', (done) => {
    expect(product(1, 2.5, 3)).toBe(7.5);
    done();
  });
});
