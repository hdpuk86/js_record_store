var remove = require('lodash/remove');
var sumBy = require('lodash/sumBy');
var Record = require('./record.js');

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
  },

  totalValue: function(genre){
    if(genre){
      var filtered = this.collection.filter(record => record.genre === genre);
      return sumBy(filtered, 'price');
    } else {
      return sumBy(this.collection, 'price');
    }
  }

};

module.exports = Collector;
