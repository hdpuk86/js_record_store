var RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  }
};

module.exports = RecordStore;
