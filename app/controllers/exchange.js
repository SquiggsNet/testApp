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
        }
    }
});
