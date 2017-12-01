var Record = require('./record.js');
var join = require('lodash/join');
var remove = require('lodash/remove');

var RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.inventory = [];
  this.inventoryValue = 0;
  this.balance = 0;
};

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
    this.inventoryValue += record.price;
  },

  removeRecord: function(record){
    var removed = remove(this.inventory, function(item){
      return item === record;
    })
    this.inventoryValue -= record.price;
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
  },

  reportFinances: function(){
    var total = this.balance + this.inventoryValue;
    return "Balance: £" + this.balance + ", Stock: £" + this.inventoryValue + ", Total: £" + total;
  }

};

module.exports = RecordStore;
