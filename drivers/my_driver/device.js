'use strict';

const Homey = require('homey');

class MyDevice extends Homey.Device {

    // this method is called when the Device is inited
    onInit() {
		this.log('onInit');
	}

    // this method is called when the Device is added
    onAdded() {
        this.log('device added');
    }

    // this method is called when the Device is deleted
    onDeleted() {
        this.log('device deleted');
    }

    // this method is called when the Device has requested a state change (turned on or off)
    onCapabilityOnoff( value, opts, callback ) {

        // ... set value to real device
		console.log('on/off called');
		mySignal.tx([ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ], console.log);
		
        // Then, emit a callback ( err, result )
        callback( null );

        // or, return a Promise
        return Promise.reject( new Error('Switching the device failed!') );
    }
	
	

}

module.exports = MyDevice;