const request = require('request');

var geocodeAddress = (address) => {
	request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=rAdzGDdGGdJJGuXbuGhMe4iwNE4AEmTn&location=${address}`,
	json: true
	}, (error, response, body) => {

	if(error){
		console.log('Unable to connect to Google servers.');
	}else if (body.info.statuscode !== 0){
		console.log('Unable to find address.')
	}else{
	  console.log(`Address: ${body.results[0].providedLocation.location}`);
	  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
	  console.log(`Longitude: ${body.results[0].locations[0].latLng.lat}`);
	}
})
}

module.exports = {
	geocodeAddress
};
