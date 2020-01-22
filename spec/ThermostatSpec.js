'use strict'; 

describe('Thermostat', function() {
    let thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat(); 
    }); 

    it('starts at standard temp', function(){
        expect(thermostat.temp).toEqual(20); 
    }); 
}); 