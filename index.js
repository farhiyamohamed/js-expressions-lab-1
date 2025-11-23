//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

//! Start by creating the variables for the data recorded
let tot_temperature_in_fahrenheit;
let tot_temperature_in_celsius;
let avg_temperature_in_fahrenheit;
let avg_temperature_in_celsius;

//* Temperature data for each day
const temperatures = [
  "32F", "25C", "70F", "18C", "80F", "15C",
  "72F", "28C", "68F", "20C", "75F", "23C",
  "82F", "30C", "65F", "22C", "77F", "26C",
  "78F", "24C", "73F", "21C", "79F", "27C",
  "71F", "19C", "74F", "17C", "76F", "29C"
];

//* Conversion functions
const toFahrenheit = (c) => (c * 9/5) + 32;
const toCelsius = (f) => (f - 32) * 5/9;

//* Arrays to store converted temperatures
const tempsInF = [];
const tempsInC = [];

//! Convert all temperatures to both units
temperatures.forEach(temp => {
  if (temp.endsWith("F")) {
    const f = parseFloat(temp);
    tempsInF.push(f);
    tempsInC.push(toCelsius(f));
  } else {
    const c = parseFloat(temp);
    tempsInC.push(c);
    tempsInF.push(toFahrenheit(c));
  }
});

//! Calculate totals
tot_temperature_in_fahrenheit = tempsInF.reduce((acc, val) => acc + val, 0);
tot_temperature_in_celsius = tempsInC.reduce((acc, val) => acc + val, 0);

//! Calculate averages
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / tempsInF.length;
avg_temperature_in_celsius = tot_temperature_in_celsius / tempsInC.length;

//! Optional console logs
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);

//! Export variables for the test
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
