'use strict';

//const tempConvert = require('../temp-convert.js');
const convertToCelsius = require('../temp-convert.js');
const expect = require('chai').expect;

describe ('convertToCelsius', () => {
  it('should return an int representing temperature in celesius from fahrenheit', () => {
    const expected = 212;
    const actual = convertToCelsius(100, 'F');
    expect(actual).to.equal(expected);
  });
});