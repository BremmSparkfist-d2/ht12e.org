'use strict';

const Homey = require('homey');

class MyDriver extends Homey.Driver {
	
    onPairListDevices( data, callback ){

        callback( null, [
            {
                name: 'Ceiling Light',
                data: {
                    id: 'my_driver'
                }
            }
        ]);

    }
}

module.exports = MyDriver;