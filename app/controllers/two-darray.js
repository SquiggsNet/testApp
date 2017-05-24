import Ember from 'ember';

const { get, set, computed } = Ember;

export default Ember.Controller.extend({
    betOne: 'a',
    betTwo: 'b',
    betThree: 'c',
    betFour: 'd',
    berOne: '6',
    berTwo: '2',
    berThree: '8',
    berFour: '9',
    alphas: Ember.String.w('a b c d e f g h i j k l m n o p q r s t u v w z y z'),
    nums: Ember.String.w('0 1 2 3 4 5 6 7 8 9'),
    areaInput: "a,6\nb,2\nc,8\nd,9",
    twoDArrayResults: "click to generate results",
    actions: {
        selectAlphaOne(bet) {
            this.set('betOne', bet);
        },
        selectAlphaTwo(bet) {
            this.set('betTwo', bet);
        },
        selectAlphaThree(bet) {
            this.set('betThree', bet);
        },
        selectAlphaFour(bet) {
            this.set('betFour', bet);
        },
        selectNumOne(ber) {
            this.set('berOne', ber);
        },
        selectNumTwo(bet) {
            this.set('berTwo', ber);
        },
        selectNumThree(ber) {
            this.set('berThree', ber);
        },
        selectNumFour(ber) {
            this.set('berFour', ber);
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
});
