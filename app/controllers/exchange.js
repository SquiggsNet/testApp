import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
        deletePerson: function(id){
            var self = this;
            
            this.store.findRecord('person', id).then(function(person){
                person.deleteRecord();
                person.save();

                self.transitionToRoute('exchange.new');
            });
        },

        generateExchange: function(){
            let participants = this.get('model').toArray();
            let senders = [];
            let receivers = [];
            let match=true;

            participants.map(function(model){
                senders.pushObject(model.get('name'));
                receivers.pushObject(model.get('name'));
            });

            while(match){
                match=false;
                receivers.sort(function(a, b){return 0.5 - Math.random()});

                jQuery.each(senders, function(i, value){		
                    var iReceiver = jQuery.inArray(receivers[i], senders);
                    var checkSender = jQuery.inArray(receivers[iReceiver], senders);
                    if  (checkSender === i){
                        match=true;
                        return;
                    }
                });
            }

            jQuery.each(participants, function(i, value){
                //update person's receiver
                this.store.findRecord('person', participants[i].id).then(function(person){
                    person.set('receiver', receivers[i]);
                    person.save();
                });
            });

            this.transitionToRoute('exchange.generate');
        }
    }
});
