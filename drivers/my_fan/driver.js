'use strict';

const Homey = require('homey');

class MyDriver extends Homey.Driver {

    onPairListDevices( data, callback ){

        callback( null, [
            {
                name: 'My Fan',
                data: {
                    id: 'my_fan'
                }
            }
        ]);

    }
	
	onPair( socket ) {
		socket.on('list_devices', (data, callback) => {
			
			this.log('list_devices called');
			
			callback( null, [
            {
                name: 'My Fan',
                data: {
                    id: 'my_fan'
                }
            }
        ]);
	  
		});
	
		socket.on('pincode', ( pincode, callback ) => {
		
			this.log('pincode called');
			this.log(pincode);
			
			if( pincode === ['1', '2', '3', '4'] ) {
				this.log('pincode correct')
					callback( null, true );
			} else {
				this.log('pincode false')
				callback( null, false );
			}
		});
	}
}

module.exports = MyDriver;