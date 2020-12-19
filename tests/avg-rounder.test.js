'use strict';

const roundAvg = require('../avg-rounder.js');
const expect = require('chai').expect;

describe('roundAvg', () => {
  it('should return the average rounded to the specified decimal place', () => {
    let sampleArray = [25,25,25,25];
    const expected = 25.0;
    const actual = roundAvg(sampleArray, 10);
    expect(actual).to.equal(expected);
  });
  
});