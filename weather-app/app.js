const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

const address = encodeURIComponent(argv.address);

geocode.geocodeAddress(address);