const fs = require('fs');
const countries = require('./countries+states+cities.json');
console.log('src readed');

for (const i in countries) {
    const country = countries[i];
    console.log(`parse country ${country.iso2} ${country.name}`);
    const myStates = [];
    for (const j in country.states) {
        const state = country.states[j];
        const myState = {};
        myState.id = state.id;
        myState.name = state.name;
        myState.native = null;
        myState.cities = [];
        for (const y in state.cities) {
            const city = state.cities[y];
            const myCity = {};
            myCity.id = city.id;
            myCity.name = city.name;
            myCity.native = null;
            myCity.lat = city.latitude;
            myCity.lon = city.longitude;
            myState.cities.push(myCity);
        }
        myStates.push(myState);
    }
    var citiesStr = JSON.stringify(myStates);
    fs.writeFileSync(`../public/${country.iso2}.json`, citiesStr);
}