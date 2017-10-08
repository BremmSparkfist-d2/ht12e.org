'use strict';

const Homey = require('homey');

class MyDriver extends Homey.Driver {
	
    onPairListDevices( data, callback ){

		
	
        callback( null, [
            {
                name: 'My Light',
                data: {
                    id: 'my_driver'
                }
            }
        ]);
		
		

    }
	
	onGetState( data, callback ){
		console.log('...!!!...');
	}
	
	get () {
		console.log('...!!!...');
	}
}

module.exports = MyDriver;