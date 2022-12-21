const fs = require('fs');
const countries = require('./countries+states+cities.json');
console.log('src readed');

for (const i in countries) {
    const country = countries[i];
    console.log(`parse country ${country.iso2} ${country.name}`);
    const myCities = [];
    for (const j in country.states) {
        const state = country.states[j];
        const stateName = state.name;
        for (const y in state.cities) {
            const city = state.cities[y];
            const myCity = {};
            myCity.state = stateName;
            myCity.name = city.name;
            myCity.lat = city.latitude;
            myCity.lon = city.longitude;
            myCities.push(myCity);
        }
    }
    var citiesStr = JSON.stringify(myCities);
    citiesStr = citiesStr.replaceAll('},{','},\n{');
    fs.writeFileSync(`../public/${country.iso2}.json`, citiesStr);
}