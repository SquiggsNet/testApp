import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    receiver: DS.attr('string'),
    created: DS.attr('string', {
        defaultValue: function(){
            return new Date();
        }
    })
});
