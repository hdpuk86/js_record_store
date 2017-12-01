var assert = require('assert');
var Record = require('../record.js');

describe("Record Tests", function(){

  beforeEach(function(){
    record = new Record("Blink-182", "Feeling This", "Pop-Punk", 1);
  });

  it('should have an artist', function(){
    assert.strictEqual(record.artist, "Blink-182");
  });

  it('should have a title', function(){
    assert.strictEqual(record.title, "Feeling This");
  });

  it('should have a genre', function(){
    assert.strictEqual(record.genre, "Pop-Punk");
  });

  it('should have a price', function(){
    assert.strictEqual(record.price, 1);
  });

  it('should list properties', function(){
    assert.strictEqual(record.properties(),
  "title: Feeling This\nartist: Blink-182\ngenre: Pop-Punk\nprice: £1");
  });

});
