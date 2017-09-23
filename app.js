'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {
	
	onInit() {
		
		this.log('MyApp is running...');
		
		var mySignal = new Homey.Signal433('my_signal');
		
		console.log('registering');
		mySignal.register().then(() => {
			
			mySignal.tx([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], console.log);
				
		}).catch( this.error );
		
	}

}

module.exports = MyApp;
