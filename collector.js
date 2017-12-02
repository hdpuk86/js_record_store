var remove = require('lodash/remove');

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
      var sold = remove(this.collection, record);
      this.cash += record.price;
      return sold[0];
    }
  }
};

module.exports = Collector;
