var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {
  properties: function(){
    return "title: " + this.title + "\nartist: " + this.artist + "\ngenre: " + this.genre + "\nprice: £" + this.price;
  }
};

module.exports = Record;
