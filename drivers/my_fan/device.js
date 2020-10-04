'use strict';

const Homey = require('homey');
const fanState = 0;

class MyDevice extends Homey.Device {

    // this method is called when the Device is inited
    onInit() {
		this.log('onInit');
		
		this.registerCapabilityListener('dim', this.onCapabilityOnoff.bind(this));
		
		this.setCapabilityValue('dim', 0);
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
		
		mySignal.register().then(() => {
			
			if (value == 0) {
				mySignal.cmd('Fan_Off');
				this.log('fan off');
			} else if (value == 1) {
				mySignal.cmd('Fan_Low');
				this.log('fan low');
			} else if (value == 2) {
				mySignal.cmd('Fan_Medium');
				this.log('fan medium');
			} else if (value == 3) {
				mySignal.cmd('Fan_High');
				this.log('fan high');
			} else {
				throw 'error';
			}
			
			this.setCapabilityValue('dim', value);
				
		}).catch( this.error );
    }
}

module.exports = MyDevice;