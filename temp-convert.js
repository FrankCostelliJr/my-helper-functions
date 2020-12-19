/* eslint-disable no-console */
/* eslint-disable strict */
/**
 * * --Temperature Converter--  
 * * A helper function to quickly perform temperature conversions and return result as string.*/

function tempConvert(temperature, currentScale, endScale) {
  let result;
  if(currentScale.toLowerCase() === 'f' || currentScale.toLowerCase() === 'fahrenheit') { //!>Conversions from Fahrenheit
    if(endScale.toLowerCase() === 'c' || currentScale.toLowerCase() === 'celsius') {
      result = ((temperature - 32) * 5 / 9);
    }
    else if(endScale.toLowerCase() === 'k' || currentScale.toLowerCase() === 'kelvin') {
      result = ((temperature - 32) * 5 / 9 + 273.15);
    }
  }
  else if(currentScale.toLowerCase() === 'c' || currentScale.toLowerCase() === 'celsius') { //!>Conversions from Celsius
    if(endScale.toLowerCase() === 'f' || currentScale.toLowerCase() === 'fahrenheit') {
      result = ((temperature * 9 / 5) + 32);
    }
    else if(endScale.toLowerCase() === 'k' || currentScale.toLowerCase() === 'kelvin') {
      result = (temperature + 273.15);
    }
  }
  else if(currentScale.toLowerCase() === 'k' || currentScale.toLowerCase() === 'kelvin') {//!>Conversions from Kelvin
    if(endScale.toLowerCase() === 'f' || currentScale.toLowerCase() === 'fahrenheit') {
      result = ((temperature - 273.15) * 9 / 5 + 32);
    }
    else if(endScale.toLowerCase() === 'c' || currentScale.toLowerCase() === 'celsius') {
      result = (temperature - 273.15);
    }
  }
  //sub this return line for testing purposes
  return `${temperature.toFixed(2)}° ${currentScale[0].toUpperCase()} = ${result.toFixed(2)}° ${endScale[0].toUpperCase()}`;
  //return result.toFixed(2);
}

module.exports = tempConvert;


