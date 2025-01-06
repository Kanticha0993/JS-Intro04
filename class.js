class Song {
    constructor() {
        this.title = title;
        this.artist = artist;
    }

    play() {
        console.log("Playing!");
    }
    stop() {
        console.log("Stoping!")
    }

}

const mySong = new Song('Bohemian Rhapsody Queen');
console.log(mySong.title);