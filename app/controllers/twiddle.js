import Ember from 'ember';

const { get, set, computed } = Ember;

export default Ember.Controller.extend({
  isButtonOn: false,
  // begin edit area
  toggle () {
    this.toggleProperty('isButtonOn');
  },
  text: computed('isButtonOn', function () {
  // end edit area
  	return get(this, 'isButtonOn') ?
      'Congrats you\'ve fixed it and turned on the button' :
    	'You must fix controllers/application.js and press the button';
  }),
});
