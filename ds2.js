// Find the number of countries in Europe region
// Find the number of countries per region
// Find the total population for each subregion per region

const countriesData = require("./countries_1.json");

function europeCountries(countries){
    return countries.filter(country => country.region === "Europe").length;
}

console.log(europeCountries(countriesData));

function regionWiseCountry(countries){
    return countries.reduce((acc, country) => {
        if(!acc[country.region]){
            acc[country.region] = 0;
        }
        acc[country.region]++;
        return acc;
    }, {});
}

console.log(regionWiseCountry(countriesData));

function totalPopulation(countries){
    return countries.reduce((acc, country) => {
        if(!acc[country.region]){
            acc[country.region] = {};
        }

        if(!acc[country.region][country.subregion]){
            acc[country.region][country.subregion] = 0;
        }

        acc[country.region][country.subregion]+= country.population;

        return acc;
    }, {})
}

console.log(totalPopulation(countriesData));