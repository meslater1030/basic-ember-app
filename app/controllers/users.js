import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: null,
  lastName: null,
  actions: {
    createuser() {
      const user = this.get('store').createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      });
      return user.save();
      // Ember.$.ajax('https://simple-investing-app.herokuapp.com/api/users', {
      //           method: 'POST',
      //           dataType: 'json',
      //           contentType: 'application/json',
      //           crossDomain: true,
      //           data: JSON.stringify({
      //             data: {
      //               attributes: {
      //                   'first-name': 'asdfasd',
      //                     'last-name': 'asdfasdf'
      //                 }
      //             }
      //         })
      //       })
    },
    updateUser(user) {
      return user.save();
    },
    deleteUser(user) {
      user.deleteRecord();
      return user.save();
    }
  }
});
