// Original data
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Conversion functions
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Convert all Fahrenheit to Celsius
const day1TempC = fahrenheitToCelsius(day1TempF);
const day3TempC = fahrenheitToCelsius(day3TempF);
const day5TempC = fahrenheitToCelsius(day5TempF);
const day7TempC = fahrenheitToCelsius(day7TempF);
const day9TempC = fahrenheitToCelsius(day9TempF);
const day11TempC = fahrenheitToCelsius(day11TempF);
const day13TempC = fahrenheitToCelsius(day13TempF);
const day15TempC = fahrenheitToCelsius(day15TempF);
const day17TempC = fahrenheitToCelsius(day17TempF);
const day19TempC = fahrenheitToCelsius(day19TempF);
const day21TempC = fahrenheitToCelsius(day21TempF);
const day23TempC = fahrenheitToCelsius(day23TempF);
const day25TempC = fahrenheitToCelsius(day25TempF);
const day27TempC = fahrenheitToCelsius(day27TempF);
const day29TempC = fahrenheitToCelsius(day29TempF);

// Convert all Celsius to Fahrenheit
const day2TempF = celsiusToFahrenheit(day2TempC);
const day4TempF = celsiusToFahrenheit(day4TempC);
const day6TempF = celsiusToFahrenheit(day6TempC);
const day8TempF = celsiusToFahrenheit(day8TempC);
const day10TempF = celsiusToFahrenheit(day10TempC);
const day12TempF = celsiusToFahrenheit(day12TempC);
const day14TempF = celsiusToFahrenheit(day14TempC);
const day16TempF = celsiusToFahrenheit(day16TempC);
const day18TempF = celsiusToFahrenheit(day18TempC);
const day20TempF = celsiusToFahrenheit(day20TempC);
const day22TempF = celsiusToFahrenheit(day22TempC);
const day24TempF = celsiusToFahrenheit(day24TempC);
const day26TempF = celsiusToFahrenheit(day26TempC);
const day28TempF = celsiusToFahrenheit(day28TempC);
const day30TempF = celsiusToFahrenheit(day30TempC);

// Total and average calculations
const tot_temperature_in_celsius =
    day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC +
    day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC +
    day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC +
    day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC +
    day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;

const tot_temperature_in_fahrenheit =
    day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF +
    day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF +
    day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF +
    day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF +
    day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;

const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

// Log results
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);
console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit);

