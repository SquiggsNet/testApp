import Ember from 'ember';

const { get, set, computed } = Ember;

export default Ember.Controller.extend({
    vehicle: null,
    alphas: Ember.String.w('a b c d e f g h i j k l m n o p q r s t u v w z y z'),
    areaInput: "a,6\nb,2\nc,8\nd,9",
    twoDArrayResults: "click to generate results",
    actions: {
        selectVehicle(vehicle) {
            this.set('vehicle', vehicle);
        },

        generateArray: function(input){
            let arr = input.split("\n");
            let twoDArray = [];

            jQuery.each(arr, function(i, value){		
                twoDArray.push(arr[i].split(','));
            });

            jQuery.each(twoDArray, function(i, iValue){
                jQuery.each(twoDArray[i], function(j, jValue){
                    if(jQuery.isNumeric(twoDArray[i][j])){
                        twoDArray[i][j] = Number(twoDArray[i][j])
                    }
                });
            });

            this.set('twoDArrayResults', JSON.stringify(twoDArray));
        }
    }
    // alphas: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    // nums: [0,1,2,3,4,5,6,7,8,9],

    // actions: {
    //     selectAlpha(value, component){
    //         this.set('model.alpha', value);
    //     },

    //     selectNum(value, component){
    //         this.set('model.num', value);
    //     }
    // }
});
