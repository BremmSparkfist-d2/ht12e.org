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
	
	onPairListDevices( data, callback ) {

		const devices = [
		  {
			// Required properties:
			"data": { "id": "abcd" },

			// Optional properties, these overwrite those specified in app.json:
			// "name": "My Device",
			// "icon": "/my_icon.svg", // relative to: /drivers/<driver_id>/assets/
			// "capabilities": [ "onoff", "dim" ],
			// "capabilitiesOptions: { "onoff": {} },

			// Optional properties, device-specific:
			// "store": { "foo": "bar" },
			// "settings": { "my_setting": "my_value" },

		  }
		]

		callback( null, devices );

	}
}

module.exports = MyDevice;