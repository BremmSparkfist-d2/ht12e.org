'use strict';

const Homey = require('homey');

class MyDevice extends Homey.Device {

    // this method is called when the Device is inited
    onInit() {
		this.log('onInit');
		
		this.registerCapabilityListener('button', this.onCapabilityOnoff.bind(this));
	
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
    async onCapabilityOnoff( value, opts, callback ) {

        // ... set value to real device
		let mySignal = new Homey.Signal433('my_signal');
		
		console.log('toggle fan light');
		mySignal.register().then(() => {

			mySignal.cmd('Light');
				
		}).catch( this.error );
    }
}

module.exports = MyDevice;