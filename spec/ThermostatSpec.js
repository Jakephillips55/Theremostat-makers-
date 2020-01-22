'use strict'; 

describe('Thermostat', function() {
    var thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat(); 
    }); 

    it('starts at standard temp', function(){
        expect(thermostat.getCurrenttemp()).toEqual(20); 
    }); 

    describe('Controls Temp', function(){
   
        /// THIS NEEDS ANOTHER IT FOR CHECKING IN RANGE/// 
        it('raises the temp by 1', function() {
            expect(thermostat.raiseTemp()).toEqual(21);
        });
    
        it('lowers the temp by 1', function(){
            expect(thermostat.dropTemp()).toEqual(19);
        });
    
        
        it('has max temp of 32', function(){ 
            thermostat.ecoOff();
            expect(thermostat.MAX_TEMP).toEqual(32);
        })
    
        it('has a min temp', function(){
            expect(thermostat.MIN_TEMP).toEqual(10);
        }); 

        it('can be reset to stdn temp', function(){
            thermostat.maxTemp();
            // setTimeout(thermostat, 1000);
            expect(thermostat.reset()).toEqual(20); 
        });
    })

    describe('Eco mode', function(){
        
        it('checks if power saving mode is on', function(){
            thermostat.pwrSave(); 
            expect(thermostat.eco).toEqual(true);
        });
        
        it('wont let temp over 25', function (){
            thermostat.pwrSave();
            expect(thermostat.MAX_TEMP).toEqual(25); 
        });
        
        it('can be turned off', function(){
            thermostat.ecoOff();
            expect(thermostat.eco).toBeFalsy(); 
        });
        
    }); 


    describe('Usage data', function(){
        it('Tells user if usage is high', function(){
            thermostat.ecoOff(); 
            thermostat.temp = thermostat.MAX_TEMP; 
            expect(thermostat.queryUsage()).toEqual('High usage');
        })
        it('Tells user if usage is medium', function(){
            expect(thermostat.queryUsage()).toEqual('Medium usage');
        });
        it('Tells user if usage is low', function(){
            thermostat.temp = thermostat.MIN_TEMP;
            console.log(thermostat.temp)
            expect(thermostat.queryUsage()).toEqual('Low usage'); 
        });
    });

    // describe('range', function(){
    //     it('checks user is in temp range lower bound', function(){
    //         thermostat.minTemp
    //         expect(function(){thermostat.dropTemp()}).toThrowError("Out of range")
    //     });

    //     it('check user is in tem range upper bound', function(){
    //         thermostat.maxTemp
    //         expect(function(){thermostat.raiseTemp()}).toThrowError("Out of range")
    //     })
    // });
    
});
