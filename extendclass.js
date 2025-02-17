//parent class
class Media {
    constructor (info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

//child class
class Song extends Media{
    constructor (songData) {
        super (songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist : "Queen",
    name : "Bohemian Rhapsody",
    publishDate : 1978,
});

console.log(mySong);