import DS from 'ember-data';

export default DS.Model.extend({
  symbol: DS.attr('string'),
  unitPrice: DS.attr('string'),
  exchange: DS.attr('string')
});
