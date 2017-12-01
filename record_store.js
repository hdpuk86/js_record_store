var Record = require('./record.js');
var join = require('lodash/join');
var remove = require('lodash/remove');

var RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },

  removeRecord: function(record){
    var removed = remove(this.inventory, function(item){
      return item === record;
    })
    return removed[0];
  },

  listInventory: function(){
    var list = this.inventory.map(record => record.properties());
    return join(list, "\n\n");
  },

  sell: function(record){
    var soldRecord;
    if(this.inventory.includes(record)){
      soldRecord = this.removeRecord(record);
      this.balance += record.price;
    } else {
      soldRecord = "Out of stock";
    }
    return soldRecord;
  }
};

module.exports = RecordStore;
