const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAtAVoospP8uMQucCO8OOyCASedl63l2rY&address=1301%20lombard%20street%20philadelphia',
	json: true
}, (error, response, body) => {
  console.log(body);
})
