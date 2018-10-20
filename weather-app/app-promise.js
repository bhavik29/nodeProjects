const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

address = encodeURIComponent(argv.address);
geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=rAdzGDdGGdJJGuXbuGhMe4iwNE4AEmTn&location=${address}`;

axios.get(geocodeUrl).then((response) => {
	if(response.data.info.statuscode !== 0){
		throw new Error('Unable to find that address');
	}

	var lat = response.data.results[0].locations[0].latLng.lat;
	var lng = response.data.results[0].locations[0].latLng.lng;
	var weatherUrl = `https://api.darksky.net/forecast/417b3236bdd8624e3b057521d93f4bb0/${lat},${lng}`;
	// console.log(response.data);
	return axios.get(weatherUrl);
}).then((response) => {
	var temperature =  response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature} F. It feels like ${apparentTemperature} F`);
}).catch((e) => {
	if(e.code === 'ENOTFOUND'){
		console.log('Unable to connect to API servers');
	}else{
		console.log(e.message);
	}
});