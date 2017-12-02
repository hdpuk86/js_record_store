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
  }
};

module.exports = Collector;
