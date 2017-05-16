import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editPerson: function(id){
            var self = this;
            var name = this.get('model.name');

            //update person
            this.store.findRecord('person', id).then(function(person){
                person.set('name', name);

                person.save();

                self.transitionToRoute('exchange.new');
            });
        }
    }
});
