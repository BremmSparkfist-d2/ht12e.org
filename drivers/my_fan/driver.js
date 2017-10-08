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
	

}

module.exports = MyDriver;