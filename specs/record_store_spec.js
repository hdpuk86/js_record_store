var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store');

describe("Store Tests", function(){

  beforeEach(function(){
    record = new Record("Biffy Clyro", "Bubbles", "Pop-Rock", 1);
    recordStore = new RecordStore("Change The Record", "Glasgow");
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, "Change The Record");
  });

  it('should have a location', function(){
    assert.strictEqual(recordStore.location, "Glasgow");
  });

  it('should have an inventory', function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  });

});
