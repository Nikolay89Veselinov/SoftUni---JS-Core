function nowPlaying(n) {
    let track = n[0]
    let artist = n[1]
    let duration = n[2]



    console.log("Now Playing:" + " " + artist + " - " + track + " [" + duration +"]")
}
nowPlaying(['Number One', 'Nelly', '4:09'])