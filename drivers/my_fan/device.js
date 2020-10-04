'use strict';

const Homey = require('homey');

class MyDevice extends Homey.Device {

    // this method is called when the Device is inited
    onInit() {
		this.log('onInit');
		
		//this.registerCapabilityListener('onoff', this.onCapabilityDimAsync.bind(this));
		//this.registerCapabilityListener('dim', this.onCapabilityOnOffAsync.bind(this));
		this.registerMultipleCapabilityListener(['onoff', 'dim'], ({ onoff, dim }) => {
			this.log(onoff);
			this.log(dim);
			//return this.onMultipleCapabilityAsync.bind({onoff, dim});
		});
	}

    // this method is called when the Device is added
    onAdded() {
        this.log('device added');
    }

    // this method is called when the Device is deleted
    onDeleted() {
        this.log('device deleted');
    }

	async onMultipleCapabilityAsync( onoff, dim ) {
		this.log('dim')
		this.log(dim);
		this.log('onoff')
		this.log(onoff);
		
		if (onoff === true) {
			return this.setOnOff(true);
		} else if (onoff === false ) {
			return this.setOnOff(false);
		} else {
			return this.onCapabilityDimAsync(dim);
		}
	}
	
	async setOnOff(state) {
		
		let mySignal = new Homey.Signal433('my_signal');
		
		if (state === true ) {
			this.log('Running setOnOff with true state');
			mySignal.register().then(() => { 
				mySignal.cmd('Fan_Low');
			}).catch( this.error );
		} else {
			this.log('Running setOnOff with false state');
			mySignal.register().then(() => { 
				mySignal.cmd('Fan_Off');
			}).catch( this.error );
		}
	}
	
    // this method is called when the Device has requested a state change (turned on or off)
    async onCapabilityDimAsync( value ) {

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
				
		}).catch( this.error );
    }

	async onCapabilityOnOffAsync( value, opts, callback ) {

        // ... set value to real device
		let mySignal = new Homey.Signal433('my_signal');
		
		mySignal.register().then(() => {
			
			mySignal.cmd('Fan_Off');

		}).catch( this.error );
    }
	
}

module.exports = MyDevice;