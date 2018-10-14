const request = require('request');

var geocodeAddress = (address, callback) => {

	address = encodeURIComponent(address);
	request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=rAdzGDdGGdJJGuXbuGhMe4iwNE4AEmTn&location=${address}`,
	json: true
	}, (error, response, body) => {

	if(error){
		callback('Unable to connect to Google servers.');
	}else if (body.info.statuscode !== 0){
		callback('Unable to find address.');
	}else{
		callback(undefined, {
			address: body.results[0].providedLocation.location,
			longitude: body.results[0].locations[0].latLng.lng,
			latitude: body.results[0].locations[0].latLng.lat
		})
	}
})
}

module.exports = {
	geocodeAddress
};
