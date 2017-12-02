var _ = require('lodash');

var Collector = function(cash){
  this.cash = cash;
  this.collection = [];
};

Collector.prototype = {
  buy: function(record){
    if(this.cash >= record.price){
      this.collection.push(record);
      this.cash -= record.price;
    }
  },

  sell: function(record){
    if(this.collection.includes(record)){
      var sold = _.remove(this.collection, record);
      this.cash += record.price;
      return sold[0];
    }
  },

  totalValue: function(genre){
    if(genre){
      var filtered = this.collection.filter(record => record.genre === genre);
      return _.sumBy(filtered, 'price');
    } else {
      return _.sumBy(this.collection, 'price');
    }
  },

  sortCheapest: function(){
    return _.sortBy(this.collection, 'price');
  },

  sortExpensive: function(){
    return this.sortCheapest().reverse();
  },

  mostValuable: function(){
    return this.sortExpensive()[0];
  }

};

module.exports = Collector;
