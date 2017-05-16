import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addPerson: function(){
            var name = this.get('name');

            //create new person
            var newPerson = this.store.createRecord('person', {
                name: name
            });

            //save to database
            newPerson.save();

            //clear form
            this.setProperties({
                name: ''
            });
        }
    }
});
