import Ember from 'ember';

const { get, set, computed } = Ember;

export default Ember.Controller.extend({

  exchangeGenerated: false,

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

            // this.toggleProperty('exchangeGenerated');
        }

    },
    exchangResults: computed('exchangeGenerated',function () {
       

        return get(this, 'exchangeGenerated') ?
            'This is what is displayed when proper results are generated' :
            'Click Generate Exchange to see who will be giving a beer to who.';

  })
});
