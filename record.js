var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {
  properties: function(){
    return "Title: " + this.title + "\nArtist: " + this.artist + "\nGenre: " + this.genre + "\nPrice: £" + this.price;
  }
};

module.exports = Record;
