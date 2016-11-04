import Ember from 'ember';
import styles from '../../index/styles'
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.Component.extend({
	styles,
	tagName: 'ul',
	classNames: ['cell','-4of12'],
    localClassName:['user-list'],
	actions: {
    selectUser(user) {
      set(this, 'selectedUser', user);
    },

    clearUser() {
      set(this, 'selectedUser', null);
    }
  }
});
