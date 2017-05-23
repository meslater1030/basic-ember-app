import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: null,

  lastName: null,

  actions: {
    createUser() {
      debugger;
      // The last name is not saved.retrieved/whatever
      const user = this.get('store').createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      });
      return user.save();
    },

    updateUser(user) {
      return user.save();
    },

    deleteUser(user) {
      user.deleteRecord();
      user.save()
    }
  }
});
