import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('exchange', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:person_id'});
    this.route('generate');
  });
  this.route('twiddle');
  this.route('two-darray');
});

export default Router;
