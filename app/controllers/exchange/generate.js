import Ember from 'ember';

const { get, set, computed } = Ember;

export default Ember.Controller.extend({
    participants: 'person',

    beerExchange: computed('model', function(){
        participants = this.get('model');
        console.log(participants);
        let names = [];
        this.get('participants').forEach(function(participant){
            names += participant.name
        })
        return names;
    })
});
