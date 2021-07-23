const cities = require('all-the-cities');
 
const one = cities.filter(city => city.name.match('Albuquerque'));

console.log(one)