import Ember from 'ember';

export default Ember.Controller.extend({
  symbol: null,
  
  unitPrice: null,

  actions: {
    createInvestment() {
      return this.get('store').createRecord('investment', {
        symbol: this.get('symbol'),
        unitPrice: this.get('unitPrice')
      }).save();
    },

    updateInvestment(investment) {
      return investment.save();
    },

    deleteInvestment(investment) {
      return investment.delete();
    }
  }
});
