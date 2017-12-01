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
  listInventory: function(){
    var list = this.inventory.map(record => record.properties());
    return join(list, "\n\n");
  },
  sell: function(record){
    if(this.inventory.includes(record)){
      this.balance += record.price;
      var soldRecord = remove(this.inventory, function(item){
        return item === record;
      })
    } return soldRecord[0];
  }
};

module.exports = RecordStore;
