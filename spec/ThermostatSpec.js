'use strict'; 

describe('Thermostat', function() {
    let thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat(); 
    }); 

    it('starts at standard temp', function(){
        expect(thermostat.temp).toEqual(20); 
    }); 

    describe('raise temp', function( ) { 
        it('raises the temp by 1', function() {
        expect(thermostat.raiseTemp()).toEqual(21);
    });
    describe('lower temp', function() {
        it('lowers the temp by 1', function(){
            expect(thermostat.dropTemp()).toEqual(19);
        });
        })
    });
});  
