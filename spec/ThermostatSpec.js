'use strict'; 

describe('Thermostat', function() {
    var thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat(); 
    }); 

    it('starts at standard temp', function(){
        expect(thermostat.temp).toEqual(20); 
    }); 

    describe('Controls Temp', function(){
   
        it('raises the temp by 1', function() {
        expect(thermostat.raiseTemp()).toEqual(21);
    });
    
        it('lowers the temp by 1', function(){
            expect(thermostat.dropTemp()).toEqual(19);
        });
        })
        it('has max temp of 32', function(){ 
            thermostat.ecoOff();
            expect(thermostat.maxTemp()).toEqual(32);
        })
    
            it('has a min temp', function(){
                expect(thermostat.minTemp()).toEqual(10);
        }); 
        it('can be reset to stdn temp', function(){
            thermostat.maxTemp();
            // setTimeout(thermostat, 1000);
            expect(thermostat.reset()).toEqual(20); 
        });
    describe('Eco mode', function(){
        it('checks if power saving mode is on', function(){
            thermostat.pwrSave(); 
            expect(thermostat.eco).toEqual(true);
        });
        it('wont let temp over 25', function (){
            thermostat.pwrSave();
            expect(thermostat.maxTemp()).toEqual(25); 
        });
        it('can be turned off', function(){
            thermostat.ecoOff();
            expect(thermostat.eco).toBeFalsy(); 
        });
        
    }); 
    describe('Usage data', function(){
        it('Tells user if usage is high', function(){
            thermostat.ecoOff(); 
            thermostat.maxTemp(); 
            expect(thermostat.queryUsage()).toEqual('High usage');
        })
        it('Tells user if usage is medium', function(){
            expect(thermostat.queryUsage()).toEqual('Medium usage');
        });
        it('Tells user if usage is low', function(){
            thermostat.minTemp();
            console.log(thermostat.temp)
            expect(thermostat.queryUsage()).toEqual('Low usage'); 
        });
    });
    
});
