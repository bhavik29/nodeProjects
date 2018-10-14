const request = require('request');

var getWeather = (lat,lng,callback) => {

	request({
	url: `https://api.darksky.net/forecast/417b3236bdd8624e3b057521d93f4bb0/${lat},${lng}`,
	json: true
	}, (error, response, body) => {
	if(!error && response.statusCode === 200){
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
		});
	}else{
		callback('Unable to fetch weather');
	}
	
	});
}

module.exports = {
	getWeather
}

