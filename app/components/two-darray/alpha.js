import Ember from 'ember';

export default Ember.Component.extend({
    alpha: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],

    actions: {
        selectAlpha(value, component){
            this.set('model.alpha', value);
        }
    }
});
