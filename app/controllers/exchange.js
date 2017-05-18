import Ember from 'ember';

const { get, set, computed } = Ember;

export default Ember.Controller.extend({

//   exchangeGenerated: "",

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
            var self = this;

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

            console.log(senders);
            console.log(receivers);

            jQuery.each(participants, function(i, value){
                console.log(participants[i]);
                //update person's receiver
                this.store.findRecord('person', participants[i].id).then(function(person){
                    person.set('receiver', receivers[i]);
                    person.save();

                    self.transitionToRoute('exchange.generate');
                });
            });
            

            // this.set('exchangeGenerated', senders);
        }

    }//,
//     exchangeResults: computed('exchangeGenerated',function () {
//         console.log(exchangeGenerated);
//         return get(this, 'exchangeGenerated') ?
      
//             "blue" :
//             'Click Generate Exchange to see who will be giving a beer to who.';

//   })
});
